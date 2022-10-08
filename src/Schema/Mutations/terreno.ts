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
import { Terrenos } from "../../Entities";
import { TerrenoType } from "../TypeDef";
  
  export const CREATE_TERRENO = {
    type: TerrenoType,
    args: {
        area: { type: new GraphQLNonNull(GraphQLInt) },
        valor_comercial: { type: new GraphQLNonNull(GraphQLInt) },
        tipo: { type: new GraphQLNonNull(GraphQLString) },
        construcciones: { type: new GraphQLNonNull(GraphQLString) },
        fuentes_agua: { type: new GraphQLNonNull(GraphQLString) },
        predio: { type: new GraphQLNonNull(GraphQLID) },
    },
    async resolve(parent: any, args: any) {
      const { area, valor_comercial, tipo, construcciones, fuentes_agua, predio } = args;
  
      await Terrenos.insert({
        area,
        tipo,
        valor_comercial,
        construcciones,
        fuentes_agua,
        predio,
      });
  
      return { ...args };
    },
  };