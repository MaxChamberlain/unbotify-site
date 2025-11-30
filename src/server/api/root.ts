import { createCallerFactory, createTRPCRouter } from "@/server/api/trpc";
import { emailRouter } from "./routers/email.router";
import { scanRouter } from "./routers/scan.router";

export const appRouter = createTRPCRouter({
  email: emailRouter,
  scan: scanRouter,
});

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);
