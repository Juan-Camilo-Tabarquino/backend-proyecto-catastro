import { GraphQLID, GraphQLInt, GraphQLObjectType, GraphQLString } from 'graphql'

export const TerrenoType = new GraphQLObjectType({
    name: 'Terreno',
    fields:{
        id: { type: GraphQLID },
        area: { type: GraphQLInt },
        tipo: { type: GraphQLString },
        valor_comercial: { type: GraphQLInt },
        construcciones: { type: GraphQLString },
        fuentes_agua: { type: GraphQLString },
        predio: { type: GraphQLID },
    }
})