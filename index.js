const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const { addResolversToSchema } = require('@graphql-tools/schema');
const getTaskSchema = require('./taskSchema');
const taskResolver = require('./taskResolver');

const app = express();

async function startServer() {
  const taskSchema = await getTaskSchema();
  const schemaWithResolvers = addResolversToSchema({
    schema: taskSchema,
    resolvers: taskResolver,
  });

  const server = new ApolloServer({ schema: schemaWithResolvers });
  await server.start();

  app.use(express.json()); // ✅ obligatoire
  app.use('/graphql', expressMiddleware(server, {
    context: async ({ req }) => ({})
  }));

  app.listen(5000, () => {
    console.log('🚀 Server running on http://localhost:5000/graphql');
  });
}

startServer();
