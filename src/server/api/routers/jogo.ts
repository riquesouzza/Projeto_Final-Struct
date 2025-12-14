import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const jogoRouter = createTRPCRouter({

  listar: publicProcedure.query(({ ctx }) =>
    ctx.db.jogo.findMany({include: { 
      categoria: true, avaliacoes: true },
      orderBy: { nome: "asc" },
    })
  ),

  listaExcluir: publicProcedure.query(({ ctx }) =>
    ctx.db.jogo.findMany({
      select: {
        id_jogo: true,
        nome: true,
        descricao: true,
        imagem: true,
      },
      orderBy: { nome: "asc" },
    })
  ),

  criar: publicProcedure
    .input(z.object({
      nome: z.string(),
      descricao: z.string().optional(),
      imagem: z.string().optional(),
      categoria: z.array(z.string()).default([]), 
    }))
    .mutation(async ({ ctx, input }) => {
      //if ((ctx.session?.user as any)?.role !== "ADMIN") {
        //throw new TRPCError({ code: "FORBIDDEN", message: "Apenas adms" });
      //}

      return ctx.db.jogo.create({
        data: {
          nome: input.nome,
          descricao: input.descricao,
          imagem: input.imagem,
          categorias: {
            connect: input.categoria.map((categoria: string) => ({ nome: categoria })),
          },
        },
      });
    }),

  excluir: publicProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      //if ((ctx.session?.user as any)?.role !== "ADMIN") {
      //  throw new TRPCError({ code: "FORBIDDEN", message: "Apenas adms" });
     // }
      return ctx.db.jogo.delete({ where: { id_jogo: input.id } });
    }),
});