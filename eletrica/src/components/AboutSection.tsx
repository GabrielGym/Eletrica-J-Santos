
import capaDeFundo from "../assets/Group 65.png"
import '../styles/AboutSection.css'

export const AboutSection = () => (
    <section>
        <h1 className="title-about">SUA MELHOR OPÇÃO</h1>
        <div className="conteiner-about">
            <img src={capaDeFundo} alt="Parte da Frente da nossa loja" />
            <div>
                <p>Desde 1970 somos especializados em materiais elétricos, sendo uma das principais distribuidoras do setor.
                    Oferecemos os melhores produtos, com o preço que cabe no seu bolso e atende todas as necessidades do seu dia a dia.
                    Aqui você irá encontrar lustres, luminárias, utilidades domésticas, ferramentas, acessórios, lâmpadas, fios e cabos, quadros de distribuição, caixas de entrada padrão Eletropaulo, materiais elétricos em geral, equipamentos de segurança e comunicação.</p>
                <button>Saiba mais sobre nós</button>
            </div>
        </div>
    </section>
)