import "./produtos.css"

export default function Produtos() {
    return (
        <section id="product-section">
            <h2>Serviços:</h2>

            <div className="services-box">

                <div className="product bronze-card">
                    <div className="title">
                        <h3>Bronze</h3>
                        <p>$209 - 875</p>
                    </div>

                    <ul>
                        <li>Acompanhamento em tempo real</li>
                        <li>Hospedagem qualificada</li>
                        <li>1° Manutenção grátis</li>
                    </ul>
                </div>

                <div className="product prata-card">
                    <div className="title">
                        <h3>Prata</h3>
                        <p>$475 - 2000</p>
                    </div>
                    <ul>
                        <li>Acompanhamento em tempo real</li>
                        <li>Hospedagem qualificada</li>
                        <li>Call-Dev</li>
                        <li>Desconto de 20% na Hospedagem anual</li>
                    </ul>
                </div>

                <div className="product ouro-card">
                    <div className="title">
                        <h3>Ouro</h3>
                        <p>$3800 - 9500</p>
                    </div>
                    <ul>
                        <li>Tudo das opções anteriores</li>
                        <li>Desconto de 50% na Hospedagem anual</li>
                        <li>1 ano de manutenção com 70% de Desconto</li>
                        <li>Prioridade máxima na criação do seu site</li>
                    </ul>
                </div>

            </div>
            <a href="/">Cursos Dísponiveis</a>

        </section >
    )
}