import {
    GraphQLBoolean,
    GraphQLID,
    GraphQLInputObjectType,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString,
    graphqlSync,
  } from "graphql";
import { Propietarios } from "../../Entities";
import { PropietarioType } from "../TypeDef";


//   import { MessageType } from "../TypeDefs/Message";
//   import { UserType } from "../TypeDefs/User";
  
  export const CREATE_PROPIETARIO = {
    type: PropietarioType,
    args: {
        direccion: { type: new GraphQLNonNull(GraphQLString) },
        telefono: { type: new GraphQLNonNull(GraphQLInt) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        tipo_documento: { type: GraphQLString },
        numero_documento: { type: GraphQLInt },
        nombre: { type: GraphQLString },
        apellidos: { type: GraphQLString },
        nit: { type: GraphQLInt },
        razon_social: { type: GraphQLString },
        predio: { type: new GraphQLNonNull(GraphQLID) },
    },
    async resolve(parent: any, args: any) {
      const { direccion,telefono,email,tipo_documento,numero_documento,nombre,apellidos,nit,razon_social,predio } = args;
  
      const result = await Propietarios.insert({
        direccion,
        telefono,
        email,
        tipo_documento,
        numero_documento,
        nombre,
        apellidos,
        nit,
        razon_social,
        predio
      });
  
      return { ...args, id: result.identifiers[0].id };
    },
  };

  export const DELETE_PROPIETARIO = {
    type: GraphQLBoolean,
    args: {
      id: { type: new GraphQLNonNull(GraphQLID) },
    },
    async resolve(_: any, { id }: any) {
      const result = await Propietarios.delete({ id });
      if (result.affected! > 0) return true;
      return false;
    },
  };