//Queries
export type ItemCategoriesDTO = {
  data: {
    itemCategories: CategoriesData;
  };
};

export type ItemBaseDTO = {
  data: {
    items: ItemBaseData[];
  };
};

export type ItemDetailDTO = {
  data: {
    items: ItemDetailData;
  };
};

export type SearchNameListDTO = {
  id: string;
  name: string;
};

//Data
export type CategoriesData = {
  id: string;
  name: string;
  normalizedName: string;
  children: normalizedName[];
  parent: normalizedName;
};

export type ItemBaseData = {
  id: string;

  name: string;

  gridImageLink: string;

  changeLast48h: number;

  changeLast48hPercent: number;

  sellFor: traderFor[];

  buyFor: traderFor[];

  category: normalizedName;
};

export type ItemDetailData = {
  id: string;

  name: string;

  normalizedName: string;

  wikiLink: string;

  sellFor: SellFor[];

  buyFor: BuyFor[];

  bartersUsing: BartersUsing[];

  bartersFor: BartersFor[];

  craftsUsing: CraftsUsing[];

  craftsFor: CraftsFor[];

  usedInTasks: UsedInTask[];

  receivedFromTasks: ReceivedFromTask[];
};

//Fragments
export type ReceivedFromTask = {
  name: string;
  finishRewards: FinishRewards;
};

type FinishRewards = {
  items: RewardItem[];
};

export type RewardItem = {
  count: number;
  item: name;
};

export type UsedInTask = {
  name: string;
  objectives: TaskObjectiveItem[];
};

export type TaskObjectiveItem = {
  description: string;
  count: number;
  item: name;
};

export type CraftsUsing = {
  id: string;
  duration: number;
  level: number;
  station: Station;
  taskUnlock: TaskUnlock;
  requiredItems: QueryCountedItem[];
  rewardItems: QueryCountedItem[];
};
export type CraftsFor = {
  id: string;
  duration: number;
  level: number;
  station: Station;
  taskUnlock: TaskUnlock;
  requiredItems: QueryCountedItem[];
  rewardItems: QueryCountedItem[];
};

export type Station = {
  name: string;
  imageLink: string;
};
export type BartersFor = {
  id: string;
  buyLimit: number;
  level: number;
  trader: traderDetail & Trader;
  taskUnlock: TaskUnlock;
  requiredItems: QueryCountedItem[];
  rewardItems: QueryCountedItem[];
};

export type BartersUsing = {
  id: string;
  buyLimit: number;
  level: number;
  trader: traderDetail & Trader;
  taskUnlock: TaskUnlock;
  requiredItems: QueryCountedItem[];
  rewardItems: QueryCountedItem[];
};
export type QueryCountedItem = {
  count: number;
  item: itemIcon;
};

type traderDetail = {
  imageLink: string;
  name: string;
};
export type BuyFor = {
  priceRUB: number;
  price: number;
  currency: string;
  vendor: Vendor;
};

type Vendor = {
  minTraderLevel: number;
  buyLimit: number;
  trader: Trader;
  taskUnlock: TaskUnlock;
};

export type Trader = traderDetail & {
  levels: Levels[];
};
type Levels = {
  level: number;
  requiredPlayerLevel: number;
  requiredReputation: number;
  requiredCommerce: number;
};
export type TaskUnlock = {
  name: string;
  minPlayerLevel: number;
};

export type SellFor = {
  priceRUB: number;
  vendor: sellforVendor;
  price: number;
  currency: string;
};

type sellforVendor = {
  name: string;
  foundInRaidRequired: Boolean;
};

type BaseType = {
  id: string;
  name: string;
  normalizedName: string;
};

export type traderForType = {
  priceRUB: number;
  vendor: name;
};

type itemIcon = {
  id: string;
  name: string;
  gridImageLink: string;
};

type normalizedName = {
  normalizedName: string;
};

type traderFor = {
  priceRUB: number;
  vendor: name;
};

type name = {
  name: string;
};
