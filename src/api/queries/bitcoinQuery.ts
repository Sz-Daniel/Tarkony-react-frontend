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
