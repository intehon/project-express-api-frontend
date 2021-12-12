export const WINE_URL = `https://winemag.herokuapp.com/wines?page=1&limit=500`

export const TITLE_URL = (wineTitle) => `https://winemag.herokuapp.com/wines/titles/${wineTitle}`

export const TOP_URL = `http://winemag.herokuapp.com/wines/top_rated`

export const PRICE_URL = `http://winemag.herokuapp.com/wines/most_expensive`

export const SELECT_URL = (select) => `http://winemag.herokuapp.com/wines/${select}`

export const VARIETY_URL = (wineVariety) => `https://winemag.herokuapp.com/wines/varieties/${wineVariety}`