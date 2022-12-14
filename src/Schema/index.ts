import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { 
         CREATE_CONSTRUCCION, 
         CREATE_PREDIO, 
         CREATE_PROPIETARIO, 
         CREATE_TERRENO, 
         DELETE_CONSTRUCCION, 
         DELETE_PREDIO, 
         DELETE_PROPIETARIO, 
         DELETE_TERRENO, 
         UPDATE_CONSTRUCCION, 
         UPDATE_PREDIO,
         UPDATE_PROPIETARIO,
         UPDATE_TERRENO
        
        } from "./Mutations";
import { GET_ALL_PREDIOS, GET_ALL_TERRENOS, GET_ALL_PROPIETARIOS, GET_ALL_CONSTRUCCIONES } from "./Queries";

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    //Queries Predios
    getAllPredios: GET_ALL_PREDIOS,

    //Queries Terrenos
    getAllTerrenos: GET_ALL_TERRENOS,

    //Queries Construcciones
    getAllConstrucciones: GET_ALL_CONSTRUCCIONES,

    //Queries Propietarios
    getAllPropietarios: GET_ALL_PROPIETARIOS,
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    // Mutaciones Predio
    createPredio: CREATE_PREDIO,
    deletePredio: DELETE_PREDIO,
    updatePredio: UPDATE_PREDIO,

    //Mutaciones Terreno
    createTerreno: CREATE_TERRENO,
    deleteTerreno: DELETE_TERRENO,
    updateTerreno: UPDATE_TERRENO,

    //Mutaciones Construcciones
    createConstruccion: CREATE_CONSTRUCCION,
    deleteConstruccion: DELETE_CONSTRUCCION,
    updateConstruccion: UPDATE_CONSTRUCCION,

    //Mutaciones Propietarios
    createPropietario: CREATE_PROPIETARIO,
    deletePropietario: DELETE_PROPIETARIO,
    updatePropietario: UPDATE_PROPIETARIO,

  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});