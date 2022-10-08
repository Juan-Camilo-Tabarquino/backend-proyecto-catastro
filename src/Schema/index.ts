import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { CREATE_PREDIO } from "./Mutations";
import { CREATE_TERRENO } from "./Mutations/terreno";
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
    // deleteUser: DELETE_USER,
    // updateUser: UPDATE_USER,
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});