import {
    GraphQLBoolean,
    GraphQLID,
    GraphQLInputObjectType,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLString,
  } from "graphql";
import { Predios } from "../../Entities";
import { PredioType } from "../TypeDef";
import { MessageType } from "../TypeDef/message";
  
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
  
  export const DELETE_PREDIO = {
    type: GraphQLBoolean,
    args: {
      numero_predial: { type: new GraphQLNonNull(GraphQLID) },
    },
    async resolve(_: any, { numero_predial }: any) {
      const result = await Predios.delete({ numero_predial });
      if (result.affected! > 0) return true;
      return false;
    },
  };

  export const UPDATE_PREDIO = {
    type: MessageType,
    args: {
      numero_predial: { type: GraphQLID },
      avaluo: { type: GraphQLInt },
      nombre: { type: GraphQLString}
    },
    async resolve(_: any, args: any) {
      const { numero_predial, avaluo, nombre } = args;

      const result = await Predios.update({numero_predial},{avaluo: avaluo, nombre: nombre});
      
      if(result.affected === 0) return { success: false, message:"Error durante la actualizacion"}
      
      return {
        success: true,
        message: "El predio ha sido actualizado correctamente"
      }
    }
  };