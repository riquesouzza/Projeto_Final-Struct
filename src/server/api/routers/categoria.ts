// categoriaRouter.ts
import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const categoriaRouter = createTRPCRouter({
  listar: publicProcedure.query(async ({ ctx }) => {
    try {
      const categorias = await ctx.db.categoria.findMany({
        include: {
          jogos: true,  
        },
      });
      return categorias;
    } catch (error) {
      throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Erro ao carregar categorias" });
    }
  }),
});
