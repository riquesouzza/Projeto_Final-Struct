import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
  await prisma.categoria.create({data:{
    nome: 'RPG',
    descricao: 'Role Playing Game'
  }})
  await prisma.categoria.create({data:{
    nome: 'Aventura',
    descricao: 'Role Playing Game'
  }})
  await prisma.categoria.create({data:{
    nome: 'Sandbox',
    descricao: 'Role Playing Game'
  }})
  console.log('Sucesso')
}

main()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
  });