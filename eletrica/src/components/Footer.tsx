import BoxDuvida from "../assets/Box de dúvida.png"
import imgFooter from "../assets/Footer.png"
import "../styles/Footer.css"

export const Footer = () => (
    <footer id="scrollTargetContact">
        <div className="conteiner-duvida">
            <img src={BoxDuvida} alt="Box de duvida" />
            <button className="button-tira-duvida">ACIONE NOSSO TELEVENDAS</button>
        </div>
        <div className="redes-sociais">
            <img src={imgFooter} alt="redes-sociais" />
        </div>
    </footer>
)