import {getHotels} from './db'

const resolvers = {
    Query: {
        hotels: (_, {}) => getHotels()
    }
}

export default resolvers