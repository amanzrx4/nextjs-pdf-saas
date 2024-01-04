import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

import { TRPCError, initTRPC } from "@trpc/server";
/**
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */
const t = initTRPC.create();
const middleware = t.middleware;
/**
 * Export reusable router and procedure helpers
 * that can be used throughout the router
 */

const isAuthenticated = middleware(async ({ next }) => {
  const { getUser } = getKindeServerSession();

  const user = await getUser();
  if (!user) throw new TRPCError({ code: "UNAUTHORIZED" });

  return next({
    ctx: {
      user,
    },
  });
});

export const router = t.router;
export const publicProcedure = t.procedure;
export const authProcedure = t.procedure.use(isAuthenticated);
