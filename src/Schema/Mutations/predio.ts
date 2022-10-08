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
import { Predios } from "../../Entities";
import { PredioType } from "../TypeDef";


//   import { MessageType } from "../TypeDefs/Message";
//   import { UserType } from "../TypeDefs/User";
  
  export const CREATE_PREDIO = {
    type: PredioType,
    args: {
        numero_predial: { type: new GraphQLNonNull(GraphQLInt) },
        avaluo: { type: new GraphQLNonNull(GraphQLInt) },
        nombre: { type: new GraphQLNonNull(GraphQLString) },
        departamento: { type: new GraphQLNonNull(GraphQLString) },
        municipio: { type: new GraphQLNonNull(GraphQLString) },
    },
    async resolve(parent: any, args: any) {
      const { numero_predial, avaluo, nombre, departamento, municipio } = args;
  
      await Predios.insert({
        numero_predial,
        avaluo,
        nombre,
        departamento,
        municipio,
      });
  
      return { ...args };
    },
  };
  
//   export const DELETE_PREDIO = {
//     type: GraphQLBoolean,
//     args: {
//       id: { type: new GraphQLNonNull(GraphQLID) },
//     },
//     async resolve(_: any, { id }: any) {
//       const result = await Users.delete({ id });
//       if (result.affected! > 0) return true;
//       return false;
//     },
//   };
  

// : { type: GraphQLID},
// avaluo: { type: GraphQLInt},
// nombre: { type: GraphQLInt},
// departamento: { type: GraphQLString},
// municipio: { type: GraphQLString},
// terrenoId: { type: GraphQLInt},

  export const UPDATE_USER = {};