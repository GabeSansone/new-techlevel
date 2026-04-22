import sun from "../assets/sol.png"
import moon from "../assets/lua-crescente.png"
import "./btn-mode.css"

export function Mode({ tema, setTema }) {
    return (
        <div className={`default-btn ${tema}`} onClick={() => setTema(tema === "dark" ? "light" : "dark")} style={{
            width: "70px",
            height: "40px",
        }}>
            <img className="default-switch" src={tema === "light" ? sun : moon} style={{
                width: "30px",
                height: "30px",
                padding: "5px",
                transform: tema === "light" ? "translateX(35px)" : "translateX(0px)",
                transition: "all 0.3s ease"
            }}
            />

        </div>
    )
}