export type SingleItemPricesResultType = {
  id: string;
  sellTo: SellTo[];
  buyFrom: BuyFrom[];
};
export type SingleItemResultType = {
  id: string;
  name: string;
  shortName: string;
  categories: string[];

  width: number;
  weight: number;
  height: number;
  hasGrid: number;

  inspectImageLink: string;
  backgroundColor: string;
  gridImageLink: string;

  description: string;
  wikiLink: string;

  updated: string;

  fleaPrice: FleaPrice | null;

  stats: Stats | null;

  sellTo: SellTo[];

  buyFrom: BuyFrom[];

  barterInput: Barter[];

  barterOutput: Barter[];

  craftInput: Craft[];

  craftOutput: Craft[];

  taskNeed: TaskNeed[];

  taskGive: TaskGive[];
};

export type Stats = {
  velocity: number;
  recoilModifier: number;
  loudness: number;
  accuracyModifier: number;
  ergonomicsModifier: number;
};
export type FleaPrice = {
  lastLowPrice: number;
  low24hPrice: number;
  avg24hPrice: number;
  high24hPrice: number;
  changeLast48hPercent: number;
  changeLast48h: number;
  lastOfferCount: number;
};
type TaskGive = {
  name: string;
  reward: TaskItem[];
};
type TaskNeed = {
  name: string;
  task: Task[];
};

type Task = Description & TaskItem;
type Description = {
  description: string;
};
type TaskItem = {
  name: string;
  count: number;
};
//craftUsing
export type Craft = CraftRequirement & {
  inputItems: ResponseCountedItem[];
  outputItems: ResponseCountedItem[];
};

type CraftRequirement = {
  id: string;
  duration: number;
  stationRequirement: StationRequirement;
  questRequirement: QuestRequirement;
};

type StationRequirement = {
  level: number;
  stationName: string;
  stationIcon: string;
};

export type Barter = PurchaseRequirement & {
  inputItems: ResponseCountedItem[];
  outputItems: ResponseCountedItem[];
};

export type ResponseCountedItem = {
  count: number;
  id: string;
  img: string;
  name: string;
};

type SellTo = PriceInfo & {
  fir: Boolean;
  traderName: string;
};

type BuyFrom = PriceInfo & PurchaseRequirement;

type PriceInfo = {
  priceRub: number;
  price: number;
  priceCurrency: string;
};

type PurchaseRequirement = {
  id: string;
  limit: number;
  playertoTraderRequirements: PlayertoTraderRequirements;
  questRequirement: QuestRequirement;
};
type QuestRequirement = {
  level: number;
  name: string;
};

type PlayertoTraderRequirements = {
  traderName: string;
  traderIcon: string;
  traderLevel: number;
  playerLevel: number;
  reputation: number;
  commerce: number;
};

/** NOT USING
 * type HistoricalPrices = {
    offerCount:number,
    price: number,
    priceMin: number,
    timestamp: string,
}
 * 
 */
