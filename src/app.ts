import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './Schema'
// import { schema } from './Schema';

const app = express();

app.use(
    "/graphql",
    graphqlHTTP({
        graphiql: true,
        schema,
    })
)

export default app;