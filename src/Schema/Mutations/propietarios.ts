import {
    GraphQLBoolean,
    GraphQLID,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLString,
  } from "graphql";
import { Propietarios } from "../../Entities";
import { PropietarioType } from "../TypeDef";
import { MessageType } from "../TypeDef/message";

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
        predio: { type: new GraphQLNonNull(GraphQLInt) },
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

  export const UPDATE_PROPIETARIO = {
    type: MessageType,
    args: {
      id: { type: GraphQLID },
      telefono: { type: GraphQLInt },
      direccion: { type: GraphQLString },
      email: { type: GraphQLString},
      tipo_documento: { type: GraphQLString},
      numero_documento: { type: GraphQLString},
      nombre: { type: GraphQLString},
      apellidos: { type: GraphQLString},
      razon_social: { type: GraphQLString},
      nit: { type: GraphQLInt},
    },
    async resolve(_: any, args: any) {
      const { id, telefono, direccion, email, numero_documento, nombre, apellidos, tipo_documento, razon_social, nit } = args;

      const result = await Propietarios.update({id: parseInt(id)},{

        telefono,
        direccion,
        email,
        nombre,
        apellidos,
        tipo_documento,
        razon_social,
        nit,
        numero_documento

      });
      
      if(result.affected === 0) return { success: false, message:"Error durante la actualizacion"}
      
      return {
        success: true,
        message: "El Propietario ha sido actualizado correctamente"
      }
    }
  };