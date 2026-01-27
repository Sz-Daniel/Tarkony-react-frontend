import { ItemSingleData } from '../types/ItemSingle/queryType';
import { ItemSingleDisplay } from '../types/ItemSingle/responseType';
import {
  bestBuyCalc,
  bestSellerCalc,
  buyFromListCalc,
  IOBarterListCalc,
  IOCraftListCalc,
  sellToListCalc,
  taskGiveCalc,
  taskNeedCalc,
} from './adapters';
export function itemSingleAdapter(data: ItemSingleData): ItemSingleDisplay {
  console.log('Adapter ', data);
  const sellToList = sellToListCalc(data.sellFor);
  const buyFromList = buyFromListCalc(data.buyFor);
  const barterInputList = IOBarterListCalc(data.bartersFor);
  const barterOutputList = IOBarterListCalc(data.bartersUsing);
  const craftInputList = IOCraftListCalc(data.craftsFor);
  const craftOutputList = IOCraftListCalc(data.craftsUsing);
  const taskGiveList = taskGiveCalc(data.receivedFromTasks, data.name);
  const taskNeedList = taskNeedCalc(data.usedInTasks, data.name);
  return {
    id: data.id ?? '',
    name: data.name ?? '',
    shortName: '',
    category: [],
    width: data.width ?? 0,
    weight: data.weight ?? 0,
    height: data.height ?? 0,
    hasGrid: data.hasGrid ?? 0,
    inspectImageLink: data.inspectImageLink ?? '',
    backgroundColor: data.backgroundColor ?? '',
    gridImageLink: data.gridImageLink ?? '',

    description: data.description ?? '',
    wikiLink: data.wikiLink ?? '',
    updated: data.updated ?? '',
    fleaPrice: null,
    historicalPrices: data.historicalPrices,
    stats: null,
    sellTo: sellToList ?? [],
    buyFrom: buyFromList ?? [],
    barterInput: barterInputList ?? [],
    barterOutput: barterOutputList ?? [],
    craftInput: craftInputList ?? [],
    craftOutput: craftOutputList ?? [],
    taskNeed: taskNeedList ?? [],
    taskGive: taskGiveList ?? [],
  };
}
