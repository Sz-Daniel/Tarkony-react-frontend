import { useState } from 'react';
import { CategoryMenu } from '../components/Items/CategoryMenu';
import { ItemList } from '../components/Items/ItemList';
import { Skeleton } from '../components/ui/skeletons/Skeleton';
import { ErrorOverlay } from '../components/ui/Status';
//import { useItemBaseListFetch } from '../hooks/FetchCalls';
//import { useCategoryFetch } from '../hooks/FetchCalls';
import { useCategoryFetch, useItemBaseListFetch } from '../hooks_/FetchCalls';
export function Items() {
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);

  const categoryFetch = useCategoryFetch();
  const itemBaseFetch = useItemBaseListFetch();

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
