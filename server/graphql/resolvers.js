import {getHotels, getPrices} from './db'

const resolvers = {
    Query: {
        hotels: (_, {minPrice, maxPrice, freeServices, reviewScore}) => getHotels(minPrice, maxPrice, freeServices, reviewScore),
        prices: (_, {id}) => getPrices(id)
    }
}

export default resolvers