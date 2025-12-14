"use client"; 

export default function Capa () {

    //Hero: pagina de ínicio
    return(
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[var(--steam-dark)] to-[var(--steam-mid)]">
          <div className="max-w-3xl text-center px-6">
            <h1 className="text-4xl font-extrabold steam-accent tracking-[5] text-shadow-md text-shadow-[#00BA2B]/30">SteamReviews</h1>
            <p className="mt-4 steam-text">Uma plataforma estilo Steam focada em reviews de jogos — descubra opiniões, avaliações e destaques.</p>
          </div>
      </section>
    );
}