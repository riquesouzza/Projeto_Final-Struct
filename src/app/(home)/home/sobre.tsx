"use client"; 

export default function Sobre () {

  return(
    <section id="about" className="min-h-screen py-16 bg-[var(--steam-dark)]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold steam-accent">Sobre</h2>
          <p className="mt-3 steam-text text-justify">
            Somos um grupo de estudantes apaixonados por jogos e tecnologia, criadores deste site dedicado a análises e avaliações de títulos disponíveis na Steam. Nosso objetivo é oferecer uma plataforma simples, confiável e feita por gamers, para gamers — onde cada usuário pode compartilhar suas opiniões, descobrir novos jogos e contribuir para uma comunidade mais informada. Este projeto nasceu como parte de um trabalho acadêmico, mas reflete nossa verdadeira paixão por unir entretenimento digital e desenvolvimento web.
          </p>
        </div>
    </section>
  );
}