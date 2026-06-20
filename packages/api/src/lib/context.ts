export const createContext = async ({ req }: { req: Request }) => {
  return {
    req,
  };
};

export type Context = Awaited<ReturnType<typeof createContext>>;
