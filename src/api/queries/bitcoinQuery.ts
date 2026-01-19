export const bitcoinQuery = {
  name: 'bitcoin',
  key: 'itemPrices',
  query: `query {
  itemPrices(gameMode: pve, id: "59faff1d86f7746c51718c9c") {
    offerCount
    offerCountMin
    timestamp
    priceMin
    price
  }
}`,
};

//prefactor for future use
export const priceHistoryQuery = {
  name: 'bitcoin',
  key: 'itemPrices',
  query: `query {
  itemPrices(gameMode: pve, id: "59faff1d86f7746c51718c9c") {
    offerCount
    offerCountMin
    timestamp
    priceMin
    price
  }
}`,
};
