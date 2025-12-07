import { useState } from 'react';
import { CategoryMenu } from '../components/Items/CategoryMenu';
import { ItemList } from '../components/Items/ItemList';
import {
  useCategoryGraphQuery,
  useItemBaseListGraphQuery,
} from '../hooks/GraphCalls';
import { Skeleton } from '../components/ui/skeletons/Skeleton';
import { ErrorOverlay } from '../components/ui/Status';
import {
  useCategoryRestQuery,
  useItemBaseListRestQuery,
} from '../hooks/RestCalls';

export function Items() {
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);

  //Direct from 3rdParty
  //const categoryFetch = useCategoryGraphQuery();
  const categoryFetch = useCategoryRestQuery();
  const itemBaseFetch = useItemBaseListRestQuery();

  return (
    <>
      {categoryFetch.data && (
        <CategoryMenu
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      )}
      {itemBaseFetch.data && (
        <ItemList
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      )}

      {categoryFetch.isLoading && categoryFetch.isLoading && (
        <>
          <Skeleton component="CategoryChip" />
          <Skeleton component="ItemBaseList" />
        </>
      )}

      {categoryFetch.isError && (
        <ErrorOverlay message={categoryFetch.error.message} />
      )}
      {itemBaseFetch.isError && (
        <ErrorOverlay message={itemBaseFetch.error.message} />
      )}
    </>
  );
}
