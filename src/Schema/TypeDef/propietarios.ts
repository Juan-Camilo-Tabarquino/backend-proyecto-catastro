import { GraphQLID, GraphQLInt, GraphQLObjectType, GraphQLString } from 'graphql'

export const PropietarioType = new GraphQLObjectType({
    name: 'Propietario',
    fields:{
        id: { type: GraphQLID },
        email: { type: GraphQLString },
        direccion: { type: GraphQLString },
        telefono: { type: GraphQLInt },
        tipo_documento: { type: GraphQLString },
        numero_documento: { type: GraphQLID },
        nombre: { type: GraphQLString },
        apellidos: { type: GraphQLString },
        razon_social: { type: GraphQLString },
        nit: { type:GraphQLInt },
        predio: { type: GraphQLID },
    }
})