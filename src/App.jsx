import "./App.css";
import { Header, Footer } from "./layout/extremidades.jsx";
import { useState, useEffect } from "react";
import Background from "./layout/backgroundEffects.jsx";
import Produtos from "./layout/produtos.jsx";

import hostingerWhite from "./assets/hostinger white.png";
import hostingerDark from "./assets/Hostinger--Streamline-Simple-Icons.png";

export default function App() {
  const [tema, setTema] = useState(() => {
    return localStorage.getItem("tema") || "dark";
  });

  useEffect(() => {
    document.body.className = tema;
    localStorage.setItem("tema", tema);
  }, [tema]);

  return (
    <div className={tema}>
      <Background tema={tema} />
      <Header tema={tema} setTema={setTema} />

      <section id="text-about">
        <h2>Sobre nossa Empresa</h2>

        <p>
          A <span>TechLevel</span> nasceu para solucionar um dos maiores gargalos do mercado de tecnologia:
          a incerteza quanto aos prazos de entrega. Entendemos que a agilidade é vital para o seu negócio,
          por isso otimizamos nossos processos para entregar sites profissionais e complexos em até duas semanas.

          Mesmo em projetos de alta escala, garantimos a conclusão em até 30 dias.

          Nosso diferencial está na transparência total: oferecemos acompanhamento do desenvolvimento em tempo real
          via streaming, permitindo feedbacks mais precisos e maior envolvimento do cliente.

          Para planos superiores, disponibilizamos a Call-Dev, um canal direto com o desenvolvedor.
        </p>
      </section>

      <Produtos tema={tema} />

      <section id="text-hostinger">
        <a href="https://www.hostinger.com/br" target="_blank" rel="noreferrer">
          <img
            src={tema === "dark" ? hostingerWhite : hostingerDark}
            alt="Hostinger"
          />
        </a>

        <p>
          A <span>Hostinger</span> é uma empresa global de hospedagem de sites,
          oferecendo soluções rápidas, seguras e acessíveis como Cloud, VPS e criador com IA.
        </p>
      </section>

      <Footer />
    </div>
  );
}