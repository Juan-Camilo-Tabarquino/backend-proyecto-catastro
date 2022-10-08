import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { CREATE_CONSTRUCCION, CREATE_PREDIO, CREATE_PROPIETARIO, CREATE_TERRENO } from "./Mutations";
import { GREETING } from "./Queries";

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    greeting: GREETING,
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createPredio: CREATE_PREDIO,
    createTerreno: CREATE_TERRENO,
    createConstruccion: CREATE_CONSTRUCCION,
    createPropietario: CREATE_PROPIETARIO,
    // deleteUser: DELETE_USER,
    // updateUser: UPDATE_USER,
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});