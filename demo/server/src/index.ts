import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server";
import { typeDefs, resolvers } from "./schema";
import { createContext } from "./context";

const main = async () => {
  await createConnection();

  const server = new ApolloServer({
    typeDefs,
    resolvers: resolvers as any,
  });

  const serverInfo = await server.listen();
  console.log(`🚀 Server ready at ${serverInfo.url}`);
};

main().catch(err => {
  console.error(err);
  process.exit(1);
});
