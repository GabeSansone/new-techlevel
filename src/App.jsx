import "./App.css"
import { Header } from "./layout/extremidades.jsx"
import { Footer } from "./layout/extremidades.jsx"
import { useState, useEffect } from "react"
import Background from "./layout/backgroundEffects.jsx"
import Produtos from "./layout/produtos.jsx"
import hostingerWhite from "./assets/hostinger white.png"
import hostingerDark from "./assets/Hostinger--Streamline-Simple-Icons.png"
export default function App() {

  const [tema, setTema] = useState(() => {
    return localStorage.getItem("tema") || "dark"
  })
  useEffect(() => {
    document.body.className = tema
    localStorage.setItem("tema", tema)
  }, [tema])

  return (
    <div className={tema}>
      <Background tema={tema} />
      <Header tema={tema} setTema={setTema} />

      <section id="text-about">
        <h2 style={{ color: tema === "dark" ? "white" : "#030330" }}>Sobre nossa Empresa</h2>
        <p style={{ color: tema === "dark" ? "white" : "#030330" }}>
          A <span style={{ color: tema === "dark" ? "white" : "#030330" }}>TechLevel</span> nasceu para solucionar um dos maiores gargalos do mercado de tecnologia: a incerteza quanto
          aos prazos de entrega. Entendemos que a agilidade é vital para o seu negócio, por isso otimizamos nossos
          processos para entregar sites profissionais e complexos em até duas semanas, reduzindo drasticamente o padrão
          de mercado, que pode chegar a dois meses. Mesmo em projetos de alta escala, garantimos a conclusão em até 30 dias.
          Nosso diferencial está na transparência total: oferecemos acompanhamento do desenvolvimento em tempo real via streaming,
          permitindo feedbacks mais precisos e maior envolvimento do cliente ao longo de todo o projeto. Para planos superiores, disponibilizamos
          a Call-Dev, um canal direto de comunicação com o desenvolvedor responsável. Prezamos por um ambiente de colaboração mútua e reforçamos que,
          para manter a produtividade e o bem-estar da equipe, todas as interações devem seguir nossos protocolos de ética e respeito profissional.
        </p>
      </section>

      <Produtos tema={tema} />


      <section id="text-hostinger">
        <a href="https://www.hostinger.com/br" target="_blank"><img src={tema === "dark" ? hostingerWhite : hostingerDark} alt="hostinger icon" style={{ width: "100px" }} /></a>
        <p>
          A <span>Hostinger</span> é uma empresa líder global em tecnologia de hospedagem de sites, fundada em
          2004 na Lituânia. Com a missão de levar o sucesso a todos que estão online, a empresa oferece soluções rápidas,
          seguras e acessíveis, como hospedagem Cloud, VPS e um Criador de Sites com Inteligência Artificial.
          Hoje, a Hostinger atende milhões de usuários em todo o mundo, sendo reconhecida por sua infraestrutura
          de alta performance e suporte ao cliente de excelência.
        </p>
      </section>

      <Footer />
    </div>
  )
}