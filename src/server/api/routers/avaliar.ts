import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const avaliacaoRouter = createTRPCRouter({

  listar: protectedProcedure.query(({ ctx }) => {
    const userId = (ctx.session?.user as any)?.id;

    //if (!userId) {
    // throw new TRPCError({ code: "UNAUTHORIZED" });
    //}

    return ctx.db.avaliacao.findMany({
      where: { autor_id: userId },
      include: {
        jogo: {
          select: {
            id_jogo: true,
            nome: true,
            imagem: true,
          },
        },
      },
      orderBy: { id: "desc" },
    });
  }),

  criar: protectedProcedure
    .input(z.object({ jogoId: z.number(), descricao: z.string(), estrelas: z.number().min(1).max(5) }))
    .mutation(async ({ ctx, input }) => {
      const userId = (ctx.session?.user as any)?.id;
      //if (!userId) throw new TRPCError({ code: "UNAUTHORIZED" });
      return ctx.db.avaliacao.create({
        data: {
          descricao: input.descricao,
          estrelas: input.estrelas,
          jogoId: input.jogoId,
          autor_id: userId,
        },
      });
    }),
});