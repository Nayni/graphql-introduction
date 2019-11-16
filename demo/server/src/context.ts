import { createLoaders } from "./loaders";

export type Context = ReturnType<typeof createContext>;

export const createContext = () => {
  return {
    loaders: createLoaders(),
  };
};
