import { postRouter } from "@/server/api/routers/post";
import { createCallerFactory, createTRPCRouter } from "@/server/api/trpc";
import { jogoRouter } from "@/server/api/routers/jogo";
import { categoriaRouter } from "@/server/api/routers/categoria";
import { avaliacaoRouter } from "@/server/api/routers/avaliar";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  jogo: jogoRouter,
  categoria: categoriaRouter,
  avaliar: avaliacaoRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);


