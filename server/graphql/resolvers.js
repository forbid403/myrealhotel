import {getHotels, getPrices} from './db'

const resolvers = {
    Query: {
        hotels: (_, {}) => getHotels(),
        prices: (_, {id}) => getPrices(id)
    }
}

export default resolvers