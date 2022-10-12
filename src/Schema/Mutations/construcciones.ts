import {
    GraphQLBoolean,
    GraphQLID,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLString,
  } from "graphql";
import { Construcciones } from "../../Entities";
import { ConstruccionType } from "../TypeDef";
import { MessageType } from "../TypeDef/message";
  
  export const CREATE_CONSTRUCCION = {
    type: ConstruccionType,
    args: {
        area: { type: new GraphQLNonNull(GraphQLInt) },
        num_pisos: { type: new GraphQLNonNull(GraphQLInt) },
        tipo: { type: new GraphQLNonNull(GraphQLString) },
        direccion: { type: new GraphQLNonNull(GraphQLString) },
        predio: { type: new GraphQLNonNull(GraphQLInt) },
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
      id: { type: new GraphQLNonNull(GraphQLInt) },
    },
    async resolve(_: any, { id }: any) {
      const result = await Construcciones.delete({ id });
      if (result.affected! > 0) return true;
      return false;
    },
  };

  export const UPDATE_CONSTRUCCION = {
    type: MessageType,
    args: {
      id: { type: GraphQLInt },
      area: { type: GraphQLInt },
      num_pisos: { type: GraphQLInt },
      direccion: { type: GraphQLString},
      tipo: { type: GraphQLString},
    },
    async resolve(_: any, args: any) {
      const { id, area, num_pisos, direccion, tipo } = args;

      const result = await Construcciones.update({id: parseInt(id)},{area: area, num_pisos: num_pisos, direccion: direccion, tipo: tipo });
      
      if(result.affected === 0) return { success: false, message:"Error durante la actualizacion"}
      
      return {
        success: true,
        message: "La Construccion ha sido actualizada correctamente"
      }
    }
  };