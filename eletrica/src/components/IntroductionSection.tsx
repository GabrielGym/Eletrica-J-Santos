import "../styles/IntroductionSection.css"
import imgIntroduction from "../assets/Group 61.png"
import arrowDown from "../assets/arrow-down.png"

export const IntroductionSection = () => (
    <section>
        <h1>ILUMINE O SEU DIA A DIA!</h1>
        <h3>Aqui na Elétrica J. Santos queremos trazer mais luz para o seu dia a dia! Temos produtos para toda sua casa com a melhor qualidade e atendimento da região!</h3>
        <button className="view-products">VEJA NOSSOS PRODUTOS</button>
        <button className="button-about">NOS CONHEÇA MELHOR</button>
        <button><img src={arrowDown} alt="Flexa para baixo" /> <h3>Role para ver mais</h3></button>
        <img src={imgIntroduction} alt="Mulher sorrindo" className="img-introduction"/>
    </section>
)