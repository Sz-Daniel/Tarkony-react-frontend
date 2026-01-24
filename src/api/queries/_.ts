import { Query } from '../types_/type';

export const categoriesQuery = {
  cacheName: 'categoriesQuery',
  restURL: 'api/Frontend/Categories',
  graphqlField: 'itemCategories',
  graphqlQuery: `
  query{
     itemCategories {
      id
      name
      normalizedName
      children {
        normalizedName
      }
      parent {
        normalizedName
      }
    }
  }`,
};

export const itemBaseQuery = {
  cacheName: 'itemBaseQuery',
  restURL: 'api/Frontend/ItemBase',
  graphqlField: 'items',
  graphqlQuery: `   
  query {
    items {
      id
      name
      category { normalizedName } 
      gridImageLink
      changeLast48h
      changeLast48hPercent
      sellFor{ 
        priceRUB
        vendor{
          name
        }
      }
      buyFor {
        priceRUB
        vendor {
          name
        }
      }
    } 
  }`,
};

export const itemDetailsQuery = (id: string = ''): Query => {
  return {
    cacheName: `itemDetails-${id}`,
    restURL: `api/Frontend/ItemDetail/${id}`,
    graphqlField: 'item',
    graphqlQuery: `   
    query {
      item(id: "${id}") {
        id
        name
        normalizedName
        wikiLink
        sellFor {
          currency
          price
          priceRUB
          vendor {
          name
          ... on FleaMarket {
            foundInRaidRequired
          }
        }
      }

      buyFor {
        currency
        price
        priceRUB
        vendor {
          ... on TraderOffer {
            minTraderLevel
            buyLimit
            trader {
              name
              imageLink
              levels {
                level
                requiredPlayerLevel
                requiredReputation
                requiredCommerce
              }
            }
            taskUnlock {
              name
              minPlayerLevel
            }
          }
        }
      }

      bartersUsing {
        id
        level
        buyLimit
        taskUnlock {
          name
          minPlayerLevel
        }
        trader {
          name
          imageLink
          levels {
            level
            requiredPlayerLevel
            requiredReputation
            requiredCommerce
          }
        }
        rewardItems {
          count
          item {
            id
            gridImageLink
            name
          }
        }
        requiredItems {
          count
          item {
            id
            gridImageLink
            name
          }
        }
      }  

      bartersFor {
        id
        level
        buyLimit
        taskUnlock {
          name
          minPlayerLevel
        }
        trader {
          name
          imageLink
          levels {
            level
            requiredPlayerLevel
            requiredReputation
            requiredCommerce
          }
        }
        rewardItems {
          count
          item {
            id
            gridImageLink
            name
          }
        }
        requiredItems {
          count
          item {
            id
            gridImageLink
            name
          }
        }
      } 

      craftsUsing {
        id
        duration
        level
        station {
          name
          imageLink
        }
        taskUnlock {
          name
          minPlayerLevel
        }
        rewardItems {
          count
          item {
            id
            gridImageLink
            name
          }
        }
        requiredItems {
          count
          item {
            id
            gridImageLink
            name
          }
        }
      }  

      craftsFor {
        id
        duration
        level
        station {
          name
          imageLink
        }
        taskUnlock {
          name
          minPlayerLevel
        }
        rewardItems {
          count
          item {
            id
            gridImageLink
            name
          }
        }
        requiredItems {
          count
          item {
            id
            gridImageLink
            name
          }
        }
      }

      usedInTasks {
        name
        objectives {
          ... on TaskObjectiveItem {
            description
            count
            item {
              name
            }
          }
        }
      }
      receivedFromTasks {
        name
        finishRewards {
          items {
            count
            item {
              name
            }
          }
        }
      }

      }  
    }`,
  };
};

export const itemSingleQuery = (normalizedName: string = ''): Query => {
  return {
    cacheName: `singleItemQuery-${normalizedName}`,
    restURL: `empty`,
    graphqlField: 'item',
    graphqlQuery: `  
    query {
        item(normalizedName: "${normalizedName}") {

        id
        name
        shortName
        categories { name }

        lastLowPrice
        low24hPrice
        avg24hPrice
        high24hPrice
        changeLast48hPercent
        changeLast48h
        lastOfferCount

        width
        weight
        hasGrid


        inspectImageLink
        backgroundColor
        gridImageLink

        description
        wikiLink

        height
        velocity
        recoilModifier
        loudness
        accuracyModifier
        ergonomicsModifier

        updated

        sellFor {
          currency
          price
          priceRUB
          vendor {
          name
          ... on FleaMarket {
            foundInRaidRequired
          }
        }
      }

      buyFor {
        currency
        price
        priceRUB
        vendor {
          ... on TraderOffer {
            minTraderLevel
            buyLimit
            trader {
              name
              imageLink
              levels {
                level
                requiredPlayerLevel
                requiredReputation
                requiredCommerce
              }
            }
            taskUnlock {
              name
              minPlayerLevel
            }
          }
        }
      }

      historicalPrices {
        offerCount
        offerCountMin
        price
        priceMin
        timestamp
      }

      bartersUsing {
        id
        level
        buyLimit
        taskUnlock {
          name
          minPlayerLevel
        }
        trader {
          name
          imageLink
          levels {
            level
            requiredPlayerLevel
            requiredReputation
            requiredCommerce
          }
        }
        rewardItems {
          count
          item {
            id
            gridImageLink
            name
          }
        }
        requiredItems {
          count
          item {
            id
            gridImageLink
            name
          }
        }
      }  

      bartersFor {
        id
        level
        buyLimit
        taskUnlock {
          name
          minPlayerLevel
        }
        trader {
          name
          imageLink
          levels {
            level
            requiredPlayerLevel
            requiredReputation
            requiredCommerce
          }
        }
        rewardItems {
          count
          item {
            id
            gridImageLink
            name
          }
        }
        requiredItems {
          count
          item {
            id
            gridImageLink
            name
          }
        }
      } 

      craftsUsing {
        id
        duration
        level
        station {
          name
          imageLink
        }
        taskUnlock {
          name
          minPlayerLevel
        }
        rewardItems {
          count
          item {
            id
            gridImageLink
            name
          }
        }
        requiredItems {
          count
          item {
            id
            gridImageLink
            name
          }
        }
      }  

      craftsFor {
        id
        duration
        level
        station {
          name
          imageLink
        }
        taskUnlock {
          name
          minPlayerLevel
        }
        rewardItems {
          count
          item {
            id
            gridImageLink
            name
          }
        }
        requiredItems {
          count
          item {
            id
            gridImageLink
            name
          }
        }
      }

      usedInTasks {
        name
        objectives {
          ... on TaskObjectiveItem {
            description
            count
            item {
              name
            }
          }
        }
      }
      receivedFromTasks {
        name
        finishRewards {
          items {
            count
            item {
              name
            }
          }
        }
      }
    }
}
    `,
  };
};

export const bitcoinQuery = {
  cacheName: 'bitcoin',
  restURL: 'empty',
  graphqlField: 'itemPrices',
  graphqlQuery: `
  query {
  itemPrices(gameMode: pve, id: "59faff1d86f7746c51718c9c") {
    offerCount
    offerCountMin
    timestamp
    priceMin
    price
  }
}`,
};
