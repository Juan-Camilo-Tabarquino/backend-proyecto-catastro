import { GraphQLID, GraphQLInt, GraphQLObjectType, GraphQLString } from 'graphql'

export const PredioType = new GraphQLObjectType({
    name: 'Predio',
    fields:{
        numero_predial: { type: GraphQLID },
        avaluo: { type: GraphQLInt },
        nombre: { type: GraphQLString },
        departamento: { type: GraphQLString },
        municipio: { type: GraphQLString },
        terrenoId: { type: GraphQLInt },
    }
})