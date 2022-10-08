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
import { Construcciones } from "../../Entities";
import { ConstruccionType } from "../TypeDef";
  
  export const CREATE_CONSTRUCCION = {
    type: ConstruccionType,
    args: {
        area: { type: new GraphQLNonNull(GraphQLInt) },
        num_pisos: { type: new GraphQLNonNull(GraphQLInt) },
        tipo: { type: new GraphQLNonNull(GraphQLString) },
        direccion: { type: new GraphQLNonNull(GraphQLString) },
        predio: { type: new GraphQLNonNull(GraphQLID) },
    },
    async resolve(parent: any, args: any) {
      const { area, direccion, tipo, num_pisos, predio } = args;
  
      const result = await Construcciones.insert({
        area,
        tipo,
        num_pisos,
        direccion,
        predio,
      });
  
      return { ...args, id: result.identifiers[0].id };
    },
  };

  export const DELETE_CONSTRUCCION = {
    type: GraphQLBoolean,
    args: {
      id: { type: new GraphQLNonNull(GraphQLID) },
    },
    async resolve(_: any, { id }: any) {
      const result = await Construcciones.delete({ id });
      if (result.affected! > 0) return true;
      return false;
    },
  };