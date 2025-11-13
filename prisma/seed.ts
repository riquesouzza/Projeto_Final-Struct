import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
  await prisma.usuario.create({data:{
    nome: 'Kamily',
    nickname: 'KamilyGamerzinha',
    email: 'kamily@gmail.com',
    senha: '852',
    data: new Date(),
    jogos: {
      create: [
        {
          nome: 'Stardew Valley',
          categorias: {
            create: [
              {nome: 'Casual', descricao: 'Jogos simples e rápidos, ideais para momentos de lazer sem compromisso.'},
              {nome: 'Simulação', descricao: 'Experimente situações reais ou fictícias com alta imersão.'}
            ]
          },
          tags: {
            create: [
              {desc: 'Divertido'},
              {desc: 'História envolvente'},
            ]
          }
        },
        {
          nome: 'Hades',
          classificacao: '+14',
          categorias: {
            create: [
              {nome: 'Roguelike', descricao: 'Jogos com mapas gerados aleatoriamente, alta dificuldade e progressão baseada em tentativa e erro.'}
            ]
          },
        }
      ]
    }
  }})

 await prisma.usuario.create({data:{
    nome: 'Cálita',
    nickname: 'uchoa',
    email: 'calitauchoa@gmail.com',
    senha: '123',
    data: new Date(),
  }})

  console.log('Sucesso!')
}

main()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
  });