import { createLoaders } from "./loaders";

/**
 * Example of how a context object could be created.
 * In this example we attach our DataLoaders onto the context.
 */

export type Context = ReturnType<typeof createContext>;

export const createContext = () => {
  return {
    loaders: createLoaders(),
  };
};
