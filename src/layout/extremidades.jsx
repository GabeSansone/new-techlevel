import icontech from "../assets/techlevel logo white.png"
import { Mode } from "../components/btn-mode.jsx"
import icondark from "../assets/techlevel logo.png"
import "./extremidades.css"
import Background from "./backgroundEffects.jsx"
import { useState } from "react"
export function Header({ tema, setTema }) {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header>
            <div id="icon-col">
                <a href="/">
                    <img
                        src={tema === "dark" ? icontech : icondark}
                        alt="techlevel-icon"
                        style={{ width: "100px" }}
                        loading="lazy"
                    />
                </a>
                <h1 style={{
                    fontWeight: "600",
                    color: tema === "dark" ? "white" : "#030330"
                }}>
                    Techlevel
                </h1>
            </div>

            {/* BOTÃO HAMBURGUER */}
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <ul className={`nav-bar header-nav ${menuOpen ? "open" : ""}`} style={{ listStyleType: "none" }}>
                <li><a href="#text-about">Sobre</a></li>
                <li><a href="#product-section">Produtos</a></li>
                <li><a href="#text-hostinger">Hostinger</a></li>
                <li><a href="mailto:techleveloficial@gmail.com">Contate</a></li>
            </ul>

            <Mode tema={tema} setTema={setTema} />
        </header>
    )
}

export function Footer() {
    return (
        <footer>
            <ul className="nav-bar footer-nav" style={{ listStyleType: "none" }}>
                <li><a href="#text-about">Sobre</a></li>
                <li><a href="#product-section">Produtos</a></li>
                <li><a href="#text-hostinger">Hostinger</a></li>
                <li><a href="mailto:techleveloficial@gmail.com">Contate</a></li>
            </ul>

            <address>
                <p>techleveloficial@gmail.com</p>
                <p>55 51 1199-1199</p>
            </address>
        </footer>
    )
}