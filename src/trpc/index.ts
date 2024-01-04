import prisma from "@/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { TRPCError } from "@trpc/server";
import { publicProcedure, router, authProcedure } from "./trpc";

import z from "zod";

export class TRPCResponse {
  public readonly message: string;
  public readonly status: boolean;

  constructor(opts: { message: string; status: boolean }) {
    this.message = opts.message;
    this.status = opts.status;
  }
}

export const appRouter = router({
  test: publicProcedure.query(async () => {
    return new TRPCResponse({
      message: "Working cool",
      status: true,
    });
  }),
  authCallback: publicProcedure.query(async () => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    if (!user) throw new TRPCError({ code: "UNAUTHORIZED" });
    const dbUser = await prisma.user.findUnique({
      where: {
        id: user.id,
      },
    });

    if (!dbUser) {
      await prisma.user.create({
        data: {
          id: user.id,
          email: user.email || "",
        },
      });
    }
    return { message: "Hello world!" };
  }),

  getUserFiles: authProcedure.query(async ({ ctx }) => {
    const { user } = ctx;
    return await prisma.file.findMany({
      where: {
        userId: user.id,
      },
    });
  }),

  deleteFile: authProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { user } = ctx;
      const file = await prisma.file.findUnique({
        where: {
          id: input.id,
        },
      });
      if (!file) throw new TRPCError({ code: "NOT_FOUND" });
      if (file.userId !== user.id)
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "You are not authorized to delete this file",
        });
      await prisma.file.delete({
        where: {
          id: input.id,
        },
      });
      return new TRPCResponse({
        message: "File deleted successfully",
        status: true,
      });
    }),
});
// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;
