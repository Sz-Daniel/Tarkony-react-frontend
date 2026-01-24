import {
  Accordion,
  AccordionSummary,
  Box,
  Button,
  Pagination,
  Stack,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useQueryClient } from '@tanstack/react-query';
import { memo, useEffect, useMemo, useState } from 'react';

import { ItemDetailDisplay } from './ItemDetail';
import { SearchBar } from '../ui/SeachBar';
import { Item } from '../../themes/themes';

import { useNavigate } from 'react-router-dom';

import { ItemBaseResponse } from '../../api/types_/Items/responseType';
import { itemBaseQuery } from '../../api/queries/_';

type ItemListProps = {
  selectedCategory: string[];
  setSelectedCategory: React.Dispatch<React.SetStateAction<string[]>>;
};

export function ItemList({
  selectedCategory,
  setSelectedCategory,
}: ItemListProps) {
  const [expanded, setExpanded] = useState<string | false>(false);
  //paginator
  const [page, setPage] = useState(1);
  // Full item list that will be filtered in useEffect based on selectedCategory and searchedName
  const [showItem, setShowItem] = useState<ItemBaseResponse[]>([]);
  // setSearchedName is updated via SearchBar
  const [searchedName, setSearchedName] = useState<string>('');
  // itemDetails - accordionHandleChange
  const [selectedItem, setSelectedItem] = useState<string>('');

  const navigate = useNavigate();

  // Retrieves cached data using useCategoryGraphQuery()
  const queryClient = useQueryClient();
  const itemBaseListCache: ItemBaseResponse[] =
    queryClient.getQueryData([itemBaseQuery.cacheName]) ?? [];

  // Filters the displayed item list by category and searchedName
  const filteredItems = useMemo(() => {
    let list = itemBaseListCache;
    if (selectedCategory.length) {
      list = list.filter((item) => selectedCategory.includes(item.category));
    }
    if (searchedName) {
      const lower = searchedName.trim().toLowerCase();
      const regex = buildSearchRegex(lower);
      list = list?.filter((item) => regex.test(item.name.toLowerCase())) ?? [];
    }
    return list;
  }, [itemBaseListCache, selectedCategory, searchedName]);

  useEffect(() => {
    setShowItem(filteredItems);
    setPage(1);
  }, [filteredItems]);

  //Accordion
  const accordionHandleChange =
    (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
      setSelectedItem(isExpanded ? panel : ''); // csak nyitáskor állítjuk be
    };

  //Pageinated
  const paginationHandleChange = (_: any, value: number) => {
    setPage(value);
  };
  const itemsPerPage = 10;
  const paginatedItems = showItem.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage,
  );

  return (
    <>
      <Box sx={{ padding: 4 }}>
        <SearchBar setSearchedName={setSearchedName} />
      </Box>
      <Box sx={{ padding: 4 }}>
        <Button
          sx={{ flex: 2, alignSelf: 'flex-start' }}
          onClick={() => {
            navigate('/bitcoin');
          }}
        >
          Bitcoin price
        </Button>
      </Box>
      {paginatedItems.map((item: ItemBaseResponse) => (
        <Accordion
          key={item.id}
          expanded={selectedItem === item.id}
          onChange={accordionHandleChange(item.id)}
        >
          {/* The TSX component using React.memo is located at the end of this file, wrapping AccordionSummary.*/}
          <ItemBaseDisplay item={item} />

          {/*The related TSX component for AccordionDetails can be found in ItemDetail.*/}
          {selectedItem === item.id && <ItemDetailDisplay itemId={item.id} />}
        </Accordion>
      ))}

      <Pagination
        count={Math.max(1, Math.ceil(showItem.length / itemsPerPage))}
        page={page}
        onChange={paginationHandleChange}
        sx={{ mt: 2 }}
      />
    </>
  );
}

/**
 * React.memo is applied here since props do not change frequently.
 * However, filtering and/or searching by name can trigger re-rendering.
 * ItemDetailDisplay itself does not require memoization.
 */
type ItemBaseDisplayProps = {
  item: ItemBaseResponse;
};
const ItemBaseDisplay = memo(({ item }: ItemBaseDisplayProps) => {
  return (
    <>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{
          '& .MuiAccordionSummary-content': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
          },
        }}
      >
        {/* ICON */}
        <Box sx={{ flex: 1, alignSelf: 'flex-start' }}>
          <Item>
            <img
              src={item.iconURL}
              alt={item.name}
              loading="lazy"
              style={{ maxWidth: '100%' }}
            />
          </Item>
        </Box>

        {/* NAME */}
        <Box sx={{ flex: 2 }}>
          <Item>
            <Typography variant="body1">{item.name}</Typography>
          </Item>
        </Box>

        {/* BEST SELLER PRICE*/}
        <Box sx={{ flex: 1, alignSelf: 'flex-end' }}>
          {item.bestSeller && (
            <Stack spacing={0}>
              <Item>Sell to: {item.bestSeller.place} </Item>
              <Item>
                {item.bestSeller.price?.toLocaleString()}
                {'Flea Market' === item.bestSeller.place ? (
                  <Typography
                    component="span"
                    color={item.changePercent > 0 ? 'red' : 'green'}
                  >
                    <sup>
                      {item.changePercent}% {item.changePrice.toLocaleString()}
                    </sup>
                  </Typography>
                ) : (
                  ''
                )}
              </Item>
            </Stack>
          )}
        </Box>
      </AccordionSummary>
    </>
  );
});

export function buildSearchRegex(query: string) {
  const parts = query
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .map((s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')); // escape speciális regex karaktereket

  const pattern = parts.join('.*?'); // a szavak közé tetszőleges karakterek jöhetnek

  return new RegExp(pattern, 'i'); // kis/nagybetűtől független keresés
}
