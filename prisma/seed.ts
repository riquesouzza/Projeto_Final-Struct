import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
  await prisma.usuario.create({data:{
    nome: 'Kamily',
    nickname: 'KamilyGamerzinha',
    email: 'kamily@gmail.com',
    senha: '852',
    data: new Date(),
    Jogoscomprados: {
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


  await prisma.usuario.create({data:{
    nome: 'Amanda',
    nickname: 'Sr Girafales',
    email: 'srgirafales098@gmail.com',
    senha: '445',
    data: new Date(),
    Jogoscomprados: {
      create: [
        {
          nome: 'The Witness',
          categorias: {
            create: [
              {nome: 'Quebra-cabeça', descricao: 'Jogos que desafiam a mente com lógica, padrões e soluções criativas que exigem atenção e raciocínio.'},
              {nome: 'Exploração', descricao: 'Experiências focadas em descobrir ambientes, observar detalhes e avançar no próprio ritmo enquanto o mundo revela seus segredos.'}
            ]
          },
          tags: {
            create: [
              {desc: 'Dasafiador'},
              {desc: 'Criatividade'},
            ]
          }
        },
        {
          nome: 'The Witcher 3: Wild Hunt',
          classificacao: '16',
          categorias: {
            create: [
              {nome: 'Mundo Aberto', descricao: 'liberdade para explorar um mapa enorme no seu ritmo'},
              {nome: 'RPG', descricao: 'você evolui personagem, faz escolhas e molda a história.'}
            ]
          },
        }
      ]
    }
  }})


 await prisma.tag.create({ data: {
    desc: 'História repetitiva', 
 }})

 await prisma.tag.create({data:{
  desc: 'Comovente', 
 }})

 await prisma.categoria.create({data: {
  nome: 'Corrida', 
  descricao: 'Dispute velocidade em pistas e veículos variados.',
  jogos: {
      create: [
        {
          nome: 'Forza Horizon 5',
          classificacao: 'Livre', 
          tags: {
            create: [
              {desc: 'Jogo barato e bom'},
            ]
          }
        },
        {
          nome: 'Need for Speed: Heat',
          classificacao: '18',
        }
      ]
    }
 }})

 await prisma.categoria.create({data: {
  nome: 'Terror', 
  descricao: 'Dispute velocidade em pistas e veículos variados.',
  jogos: {
      create: [
        {
          nome: 'No, Im not a Human',
          classificacao: '16', 
          tags: {
            create: [
              {desc: 'Histórias que prendem'},
            ]
          }
        },
        {
          nome: 'Phasmophobia',
          classificacao: '12',
          tags: {
            create: [
              {desc:'Caça fantasmas cooperativo'},
            ]
          }
        },
        {
          nome: "Amnesia: The Dark Descent", 
          classificacao: '+18',
          tags: {
            create: [
              {desc: 'Horror'}, 
              {desc: 'Gore'},
              {desc: 'Medo psicológico intenso'},
            ]
          }
        }
      ]
    }
 }})
  console.log('Sucesso!')
}

main()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
  });