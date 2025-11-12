export default function HomePage() {
  //parte feita por Pedro
  
  //essa é a categoria dos jogos que aparecem na pagina inicial.
  const categories = [
    { id: 'acao', label: 'Ação', description: 'Jogos com ritmo acelerado e combates intensos.' },
    { id: 'aventura', label: 'Aventura', description: 'Exploração, narrativa e descoberta.' },
    { id: 'battle-royale', label: 'Battle Royale', description: 'Jogos de sobrevivência em larga escala — último jogador ou equipe sobrevivente vence.' },
    { id: 'esporte', label: 'Esporte', description: 'Competição, simulações e partidas multiplayer.' },
    { id: 'kids', label: 'Kids', description: 'Jogos leves e apropriados para todas as idades.' },
    { id: 'terror', label: 'Terror', description: 'Atmosfera tensa, sustos e suspense.' },
  ]; 
// nessa parte mostra os kard dos jogos com as reviews
  const reviews = [
    {
      id: 'rev1',
      title: 'Elden Ring',
      image: '/images/capa_elden.jpeg',
      rating: 5,
      reviewer: 'Pedro',
      comment:
        'Uma experiência incrível: mundo vasto, combate desafiador e uma narrativa que prende. Recomendo para quem gosta de exploração e dificuldade justa.',
    },
    {
      id: 'rev2',
      title: 'Rocket League',
      image: '/images/capa_rocket.jpg',
      rating: 4,
      reviewer: 'Mariana',
      comment:
        'Divertido e competitivo — partidas rápidas e ótima curva de aprendizado. Perfeito para jogar com amigos, apesar de alguns problemas ocasionais de matchmaking.',
    },
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center" aria-label={`Avaliação: ${rating} de 5 estrelas`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-400'}`}>
            {i < rating ? '★' : '☆'}
          </span>
        ))}
      </div>
    );
  };

  return (
    //nesta parte fala sobre o site.
    <main>
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[var(--steam-dark)] to-[var(--steam-mid)]">
        <div className="max-w-3xl text-center px-6">
          <h1 className="text-4xl font-extrabold steam-accent">SteamReviews</h1>
          <p className="mt-4 steam-text">Uma plataforma estilo Steam focada em reviews de jogos — descubra opiniões, avaliações e destaques.</p>
        </div>
      </section>

      <section id="about" className="min-h-screen py-16 bg-[var(--steam-dark)]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold steam-accent">Sobre</h2>
          <p className="mt-3 steam-text text-justify">
            Somos um grupo de estudantes apaixonados por jogos e tecnologia, criadores deste site dedicado a análises e avaliações de títulos disponíveis na Steam. Nosso objetivo é oferecer uma plataforma simples, confiável e feita por gamers, para gamers — onde cada usuário pode compartilhar suas opiniões, descobrir novos jogos e contribuir para uma comunidade mais informada. Este projeto nasceu como parte de um trabalho acadêmico, mas reflete nossa verdadeira paixão por unir entretenimento digital e desenvolvimento web.
          </p>
        </div>
      </section>

      <section id="categories" className="min-h-screen py-16 bg-[var(--steam-mid)]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold steam-accent">Categorias</h2>
          <p className="mt-3 steam-text">Navegue por gêneros e tags para encontrar reviews do seu interesse.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#category-${cat.id}`}
                aria-label={`Ver categoria ${cat.label}`}
                className="block p-5 rounded-lg bg-[var(--steam-dark)] hover:scale-[1.02] transform transition-shadow shadow-sm hover:shadow-md"
              >
                <h3 className="text-xl font-semibold steam-accent">{cat.label}</h3>
                <p className="mt-2 steam-text text-sm">{cat.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="min-h-screen py-16 bg-[var(--steam-dark)]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold steam-accent">Reviews</h2>
          <p className="mt-3 steam-text">Confira aqui as avaliações mais recentes da comunidade e aproveite para criar e compartilhar suas próprias reviews com outros fãs de jogos!</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((r) => (
              <article
                key={r.id}
                className="bg-[var(--steam-mid)] rounded-lg overflow-hidden shadow-sm hover:shadow-md transform hover:scale-[1.02] transition"
              >
                <div className="w-full overflow-hidden rounded-t-lg" style={{ aspectRatio: '16/9' }}>
                  <img src={r.image} alt={`${r.title} cover`} className="w-full h-full object-cover object-center" loading="lazy" />
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold steam-accent">{r.title}</h3>
                  <div className="mt-2">{renderStars(r.rating)}</div>
                  <p className="mt-3 steam-text text-justify">{r.comment}</p>
                  <p className="mt-3 text-sm text-gray-300">— {r.reviewer}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
