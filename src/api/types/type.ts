/** Query type for API GraphQL calls -> api\query.ts
 * name: key name for cache
 * key: type key indicating the kind of data the result object will contain, enabling extraction of only the array
 * query: contains the query string
 */
export type QueryType = {
  name: string;
  key: string;
  query: string;
};

export type QueryTypeT = {
  cacheName: string;
  dataKey: string;
  graphqlQuery: string;
  restURL: string;
};

// Props type
type ItemDetailPropsType = {
  itemId: string;
};

type numberStatePropsType = {
  number: number;
  setter: React.Dispatch<React.SetStateAction<number>>;
};

type TESTQueryType = {
  id: string;
  name: string;
  normalizedName: string;
  children?: IDType[];
  parent?: IDType;
};

type IDType = {
  id: string;
};

type TESTResultType = BaseType & {
  children?: TESTResultType[];
  parent?: TESTResultType;
};

type BaseType = {
  id: string;
  name: string;
  normalizedName: string;
};

type VarType = {
  variables?: {
    ids: string[];
  };
  name: string;
  normalizedName: string;
};
