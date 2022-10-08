import { GraphQLID, GraphQLInt, GraphQLObjectType, GraphQLString } from 'graphql'

export const ConstruccionType = new GraphQLObjectType({
    name: 'Construccion',
    fields:{
        id: { type: GraphQLID },
        area: { type: GraphQLInt },
        tipo: { type: GraphQLString },
        num_pisos: { type: GraphQLInt },
        direccion: { type: GraphQLString },
        predio: { type: GraphQLID },
    }
})