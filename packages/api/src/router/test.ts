import type { TRPCRouterRecord } from "@trpc/server";

import { publicProcedure } from "../trpc";

export const testRouter = {
  run: publicProcedure.query(() => {
    return { success: "TRPC is working well" };
  }),
} satisfies TRPCRouterRecord;
