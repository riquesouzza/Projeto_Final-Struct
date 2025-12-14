import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const kamily = await prisma.usuario.create({
    data: {
      nome: "Kamily",
      nickname: "KamilyGamerzinha",
      email: "kamily@gmail.com",
      senha: "852",
      data: new Date(),
    },
  });

  const cal = await prisma.usuario.create({
    data: {
      nome: "Cálita",
      nickname: "uchoa",
      email: "uchoacalita@gmail.com",
      senha: "123",
      role: "ADM",
      data: new Date(),
    },
  });


  const amanda = await prisma.usuario.create({
    data: {
      nome: "Amanda",
      nickname: "Sr Girafales",
      email: "srgirafales098@gmail.com",
      senha: "445",
      data: new Date(),
    },
  });


  await prisma.categoria.create({
    data: {
      nome: 'Terror',
      jogos: {
        create: [
          { nome: "No, I'm not a Human", 
            descricao: 'No, I m not a Human é um jogo de survival horror e paranoia onde o sol se torna mortal, forçando você a se abrigar e deixar entrar estranhos que batem à porta durante a noite, mas precisa discernir entre humanos e Visitantes, criaturas que imitam humanos, que surgem do subsolo, tudo isso enquanto o mundo desmorona em caos e histeria.',
            imagem: "https://www.gamevicio.com/wp-content/uploads/2025/10/No-Im-not-a-Human-e1760543577658-1084x600.jpg"},
          { nome: 'Phasmophobia', 
            descricao: 'Jogo cooperativo de terror psicológico onde até 4 jogadores assumem o papel de investigadores paranormais, entrando em locais assombrados para coletar evidências e identificar o tipo de fantasma usando equipamentos como leitores EMF, câmeras e caixas de espírito, tudo enquanto tentam sobrevui à atividade paranormal e ao perigo de serem mortos pela assombração, com o objetivo final de vender as provas a uma equipe de remoção de fantasma',
            imagem: "https://www.fatosdesconhecidos.com.br/wp-content/uploads/2020/10/Phasmophobia-fatos-nerd.jpg" },
          { nome: "Amnesia: The Dark Descent", 
            descricao: 'Jogo de survival horror onde você joga como Daniel, que acorda no Castelo de Brennenburg sem memória, apenas com um bilhete que o instrui a fugir de uma sombra e caçar o Barão Alexander, enquanto lida com horrores físicos e mentais em uma trama sobre tortura, memória e a natureza do mal, forçando o jogador a se esconder e resolver quebra-cabeças para sobreviver sem poder lutar',
            imagem: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/57300/5bb76cd89b4752588013eef3c5ae6940e282067c/capsule_616x353.jpg?t=1751032707"},
          { nome:"Detention", 
            descricao: "Detention é um jogo de terror atmosférico ambientado em Taiwan na década de 1960, sob lei marcial. Incorporando elementos religiosos baseados na cultura e mitologia taiwanesa/chinesa, o jogo oferece aos jogadores gráficos e uma experiência de jogo únicos",
            imagem: "https://i.ytimg.com/vi/kTsl6O92KCQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAiTgYB0jdWyrZSdIeoexZch2d0Fg"
          }
        ],
      },
    },
  });


  await prisma.categoria.create({
    data: {
      nome: 'Simulação',
      jogos: {
        create: [
          { nome: "Euro Truck Simulator 2", 
            descricao: 'Simulador de caminhões onde você dirige pelas estradas da Europa, transportando cargas de cidades a cidades, começando com trabalhos rápidos para terceiros e evoluindo para gerenciar sua própria frota e empresa de transporte, customizando veículos e expandindo seus negócios, focado na imersão e realismo da experiência de um caminhoneiro profissiona',
            imagem: "https://jogandocasualmente.com.br/wp-content/uploads/2025/01/review-euro-truck-simulator-2-pc-01.jpg"},
          { nome: 'The Sims 4', 
            descricao: 'É um jogo de simulação de vida onde você cria e controla pessoas (Sims), constrói casas, desenvolve relacionamentos e carreiras, explorando mundos e personalidades únicas com ferramentas intuitivas de criação e uma Galeria para compartilhar criações.',
            imagem: "https://pop.proddigital.com.br/wp-content/uploads/sites/8/2021/03/the-sims-4.jpg" },
          { nome: "Planet Coaster 2", 
            descricao: 'É um jogo de construção e gerenciamento de parques temáticos, onde você projeta e gerencia o parque dos seus sonhos, construindo montanhas-russas personalizadas, criando cenários detalhados e cuidando da felicidade de visitantes expressivos, tudo isso com ferramentas intuitivas e compartilhamento online com a comunidade',
            imagem: "https://image-service.zaonce.net/eyJidWNrZXQiOiJmcm9udGllci1jbXMiLCJrZXkiOiIyMDI0LTA3L3BjMl9hbm5vdW5jZV9rZXlhcnRfZXh0ZW5kZWRfMTkyMHgxMzUwLmpwZyIsImVkaXRzIjp7IndlYnAiOnsicXVhbGl0eSI6ODV9LCJ0b0Zvcm1hdCI6IndlYnAiLCJyZXNpemUiOnsid2lkdGgiOjEyODAsImZpdCI6ImNvbnRhaW4ifX19"},
        ],
      },
    },
  });

  await prisma.categoria.create({
    data: {
      nome: "RPG",
      jogos: {
        create: [
          { nome: "The Witcher 3: Wild Hunt",
            descricao: "The Witcher 3: Wild Hunt coloca você como Geralt de Rívia, um caçador de monstros profissional, em uma busca épica para encontrar sua filha adotiva, Ciri, que é perseguida pela temida Caçada Selvagem (Wild Hunt), um bando de cavaleiros espectrais que ameaçam o mundo, enquanto explora um vasto continente devastado pela guerra, fazendo escolhas morais complexas que moldam o destino de todos",
            imagem: "https://cdn1.epicgames.com/offer/14ee004dadc142faaaece5a6270fb628/EGS_TheWitcher3WildHuntCompleteEdition_CDPROJEKTRED_S1_2560x1440-82eb5cf8f725e329d3194920c0c0b64f"
          },
          { nome: "Stardew Valley",
            descricao: "Um jovem que herda a antiga e decadente fazenda de seu avô e decide deixar a vida corporativa entediante para trás, mudando-se para o campo para cultivar uma nova vida, restaurar a fazenda, se conectar com a natureza e os moradores da Vila Pelicanos, explorando atividades como agricultura, mineração, pesca e combate, enquanto descobre os segredos do vale e luta contra o capitalismo da Corporação Joja", 
            imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/capsule_616x353.jpg?t=1754692865"
          },
          { nome: "Tales of Arise", 
            descricao: "Tales of Arise se passa nos planetas vizinhos de Dahna e Rena, onde Rena domina e explora Dahna há 300 anos, escravizando seu povo, os Dahnanos, para extrair energia. A história segue Alphen, um escravo amnésico que usa uma máscara de ferro e não sente dor, e Shionne, uma Renana amaldiçoada que causa dor ao ser tocada, enquanto eles se unem para derrubar os opressores Renanos (os Lordes) e lutar pela liberdade de Dahna, desenvolvendo um forte laço no processo", 
            imagem: "https://sm.ign.com/ign_br/screenshot/default/arise_s651.png"
          }, 
          { nome: "Last Epoch",
            descricao: "A história se passa no mundo de Eterra, onde você viaja por diferentes eras, do passado ao futuro, para impedir que o Vácuo destrua a realidade, enfrentando impérios sombrios e deuses furiosos para encontrar o poderoso artefato Epoch e salvar o tempo",
            imagem: "https://www.geeksunited.com.br/wp-content/uploads/2024/03/last-epoch.png"
          }
        ]
      }
    }
  });

  console.log("Seed concluído com sucesso!");
}

main()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });