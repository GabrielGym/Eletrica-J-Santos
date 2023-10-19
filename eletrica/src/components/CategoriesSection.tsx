import "../styles/CategoriesSection.css"
import capaDeFundo from '../assets/Group 63.jpg'
import capaDeFundoCategory from "../assets/Rectangle 48.png"
import lampada from "../assets/image 3.png"
import lustre from "../assets/image 3 (1).png"
import luminarias from "../assets/image 3 (2).png"
import decoracoes from "../assets/image 3 (3).png"
import acessorios from "../assets/image 3 (4).png"
import ferramentas from "../assets/image 3 (5).png"
import utensiliosDomesticos from "../assets/image 3 (6).png"
import cabos from "../assets/image 3 (7).png"

export const CategoriesSection = () => (
    <section>
        <div className='conteiner-capa-de-fundo'>
            <img src={capaDeFundo} alt="capa de fundo categprias" />
            <h1>CATEGORIAS</h1>
        </div>
        <ol className='conteiner-category'>
            <li className='card-category'>
                <h2 className='name-category'>LÂMPADAS</h2>
                <div className='conteiner-img-category'>
                    <img src={capaDeFundoCategory} alt="fundo da imagem da categoria" className='fundo-da-img-category'/>
                    <img src={lampada} alt="LÂMPADAS" className='img-category'/>
                </div>
            </li>
            <li className='card-category'>
                <h2 className='name-category'>LUSTRES</h2>
                <div className='conteiner-img-category'>
                    <img src={capaDeFundoCategory} alt="fundo da imagem da categoria" className='fundo-da-img-category'/>
                    <img src={lustre} alt="LUSTRES" className='img-category'/>
                </div>
            </li>
            <li className='card-category'>
                <h2 className='name-category'>LUMINÁRIAS</h2>
                <div className='conteiner-img-category'>
                    <img src={capaDeFundoCategory} alt="fundo da imagem da categoria" className='fundo-da-img-category'/>
                    <img src={luminarias} alt="LUMINÁRIAS" className='img-category'/>
                </div>
            </li>
            <li className='card-category'>
                <h2 className='name-category'>DECORAÇÕES</h2>
                <div className='conteiner-img-category'>
                    <img src={capaDeFundoCategory} alt="fundo da imagem da categoria" className='fundo-da-img-category'/>
                    <img src={decoracoes} alt="DECORAÇÕES" className='img-category'/>
                </div>
            </li>
            <li className='card-category'>
                <h2 className='name-category'>ACESSÓRIOS</h2>
                <div className='conteiner-img-category'>
                    <img src={capaDeFundoCategory} alt="fundo da imagem da categoria" className='fundo-da-img-category'/>
                    <img src={acessorios} alt="ACESSÓRIOS" className='img-category'/>
                </div>
            </li>
            <li className='card-category'>
                <h2 className='name-category'>FERRAMENTAS</h2>
                <div className='conteiner-img-category'>
                    <img src={capaDeFundoCategory} alt="fundo da imagem da categoria" className='fundo-da-img-category'/>
                    <img src={ferramentas} alt="FERRAMENTAS" className='img-category'/>
                </div>
            </li>
            <li className='card-category'>
                <h2 className='name-category'>UTENSÍLIOS DOMÉSTICOS</h2>
                <div className='conteiner-img-category'>
                    <img src={capaDeFundoCategory} alt="fundo da imagem da categoria" className='fundo-da-img-category'/>
                    <img src={utensiliosDomesticos} alt="UTENSÍLIOS DOMÉSTICOS" className='img-category'/>
                </div>
            </li>
            <li className='card-category'>
                <h2 className='name-category'>CABOS</h2>
                <div className='conteiner-img-category'>
                    <img src={capaDeFundoCategory} alt="fundo da imagem da categoria" className='fundo-da-img-category'/>
                    <img src={cabos} alt="CABOS" className='img-category'/>
                </div>
            </li>
        </ol>
    </section>
)