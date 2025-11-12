export default function Footer() {
  return (

    // O Footer foi feito por Luca

    // Ele contém seções de navegação e contato, além de direitos autorais
  <footer className="w-full steam-bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:justify-between items-start gap-6">
          <div>
            <h4 className="text-xl font-bold steam-accent">SteamReviews</h4>
            <p className="mt-2 steam-text text-sm max-w-md">
              Plataforma de reviews de jogos — opiniões, destaques e recomendações da comunidade.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 md:items-center md:gap-12">
            <div>
              <h5 className="font-semibold steam-accent">Navegação</h5>
              <ul className="mt-2 space-y-1 text-sm">
                <li>
                  <a className="steam-link" href="/#home">
                    Home
                  </a>
                </li>
                <li>
                  <a className="steam-link" href="/#about">
                    Sobre
                  </a>
                </li>
                <li>
                  <a className="steam-link" href="/#categories">
                    Categorias
                  </a>
                </li>
                <li>
                  <a className="steam-link" href="/#reviews">
                    Reviews
                  </a>
                </li>
                
              </ul>
            </div>

            <div>
              <h5 className="font-semibold steam-accent">Contato</h5>
              <p className="mt-2 steam-text text-sm">Luca</p>
              <p className="mt-1 steam-text text-sm">Pedro</p>
              <p className="mt-1 steam-text text-sm">Brasília, DF</p>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-700 pt-4 flex flex-col sm:flex-row sm:justify-between items-center gap-4">
          <p className="text-sm steam-text">© {new Date().getFullYear()} SteamReviews. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
