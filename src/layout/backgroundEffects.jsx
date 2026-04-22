import "./backgroundEffects.css"

export default function Background({ tema }) {
    return (
        <div id="background-geral" className={tema}>
            <div className="circle c1"></div>
            <div className="circle c2"></div>
            <div className="circle c3"></div>
        </div>
    )
}