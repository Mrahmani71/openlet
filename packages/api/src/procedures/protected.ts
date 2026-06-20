// import { auth } from "@devpush/auth";
// import { ORPCError } from "@orpc/server";
import { publicProcedure } from "./public";

const requireAuth = publicProcedure.middleware(async ({ next }) => {
  // const session = await auth.api.getSession({
  //   headers: context.req.headers,
  // });

  // if (!session?.user) {
  //   throw new ORPCError("UNAUTHORIZED");
  // }

  return next({
    // context: {
    //   session,
    // },
  });
});

export const protectedProcedure = publicProcedure.use(requireAuth);
