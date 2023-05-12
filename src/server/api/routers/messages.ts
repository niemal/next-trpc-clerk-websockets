import { z } from "zod";
import { createTRPCRouter, privateProcedure, publicProcedure } from "../trpc";
// import { observable } from "@trpc/server/observable";

export const messagesRouter = createTRPCRouter({
  add: privateProcedure
    .input(
      z.object({
        message: z.string().min(1).max(4096),
      })
    )
    .query(async ({ input, ctx }) => {
      console.log("private add ctx.userId:", ctx.userId);
      console.log("private add input.message:", input.message);
      return "hello from add private!";
    }),

  onAdd: publicProcedure
    .input(
      z.object({
        message: z.string().min(1).max(4096),
      })
    )
    .subscription(async ({ input, ctx }) => {
      console.log("subscription add ctx.userId:", ctx.userId);
      console.log("subscription add input.message:", input.message);
      return "hello from onAdd sub!";
    }),
});
