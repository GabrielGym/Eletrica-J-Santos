import React from 'react';
import { useState } from "react";
import "../styles/Header.css"
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import chevron from '../assets/chevron-down.png'
import capaDeFundoCategory from "../assets/Rectangle 48.png"
import lampada from "../assets/image 3.png"
import lustre from "../assets/image 3 (1).png"
import luminarias from "../assets/image 3 (2).png"
import decoracoes from "../assets/image 3 (3).png"
import acessorios from "../assets/image 3 (4).png"
import ferramentas from "../assets/image 3 (5).png"
import utensiliosDomesticos from "../assets/image 3 (6).png"
import cabos from "../assets/image 3 (7).png"

export const scrollLocation = () => {
    const element = document.getElementById('scrollTargetLocation');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

export const Header = () => {
    const [buttonMenu, setButtonMenu] = useState(false)
    const [buttonCategory, setButtonCategory] = useState(false)

    const scrollHome = () => {
        const element = document.getElementById('scrollTargetHome');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };


    const scrollContact = () => {
        const element = document.getElementById('scrollTargetContact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header>
            <div className="logo-header">
                <h1>ELÉTRICA <span>J.SANTOS</span></h1>
            </div>
            <div className="open-infos-header-mobile">
                <button onClick={() => setButtonMenu(!buttonMenu)}><AiOutlineMenuUnfold /></button></div>

            {buttonMenu ? <div className="infos-header-mobile">
                <button className="button-home" onClick={scrollHome}>Home</button>
                <button className="button-categoy" onClick={() => setButtonCategory(!buttonCategory)}>Categorias <img src={chevron} alt="Options categories" /></button>
                <button className="button-about" onClick={scrollLocation}>Sobre</button>
                <button className="button-location" onClick={scrollLocation}>Localização</button>
                <button className="button-contact" onClick={scrollContact}>Contato</button>
            </div> : null}

            <div className="infos-header">
                <button className="button-home" onClick={scrollHome}>Home</button>
                <button className="button-categoy" onClick={() => setButtonCategory(!buttonCategory)}>Categorias <img src={chevron} alt="Options categories" /></button>
                <button className="button-about" onClick={scrollLocation}>Sobre</button>
                <button className="button-location" onClick={scrollLocation}>Localização</button>
                <button className="button-contact" onClick={scrollContact}>Contato</button>
            </div>

            {buttonCategory ? <ol className="conteiner-options-category">
                <li className='options-category'>
                    <div className='conteiner-img-category'>
                        <img src={capaDeFundoCategory} alt="fundo da imagem da categoria" className='fundo-da-img-category' />
                        <img src={lampada} alt="LÂMPADAS" className='img-category' />
                    </div>
                    <h2 className='name-category'>LÂMPADAS</h2>

                </li>
                <li className='options-category'>
                    <div className='conteiner-img-category'>
                        <img src={capaDeFundoCategory} alt="fundo da imagem da categoria" className='fundo-da-img-category' />
                        <img src={lustre} alt="LUSTRES" className='img-category' />
                    </div>
                    <h2 className='name-category'>LUSTRES</h2>

                </li>
                <li className='options-category'>
                    <div className='conteiner-img-category'>
                        <img src={capaDeFundoCategory} alt="fundo da imagem da categoria" className='fundo-da-img-category' />
                        <img src={luminarias} alt="LUMINÁRIAS" className='img-category' />
                    </div>
                    <h2 className='name-category'>LUMINÁRIAS</h2>
                </li>
                <li className='options-category'>
                    <div className='conteiner-img-category'>
                        <img src={capaDeFundoCategory} alt="fundo da imagem da categoria" className='fundo-da-img-category' />
                        <img src={decoracoes} alt="DECORAÇÕES" className='img-category' />
                    </div>
                    <h2 className='name-category'>DECORAÇÕES</h2>
                </li>
                <li className='options-category'>
                    <div className='conteiner-img-category'>
                        <img src={capaDeFundoCategory} alt="fundo da imagem da categoria" className='fundo-da-img-category' />
                        <img src={acessorios} alt="ACESSÓRIOS" className='img-category' />
                    </div>
                    <h2 className='name-category'>ACESSÓRIOS</h2>
                </li>
                <li className='options-category'>
                    <div className='conteiner-img-category'>
                        <img src={capaDeFundoCategory} alt="fundo da imagem da categoria" className='fundo-da-img-category' />
                        <img src={ferramentas} alt="FERRAMENTAS" className='img-category' />
                    </div>
                    <h2 className='name-category'>FERRAMENTAS</h2>
                </li>
                <li className='options-category'>
                    <div className='conteiner-img-category'>
                        <img src={capaDeFundoCategory} alt="fundo da imagem da categoria" className='fundo-da-img-category' />
                        <img src={utensiliosDomesticos} alt="UTENSÍLIOS DOMÉSTICOS" className='img-category' />
                    </div>
                    <h2 className='name-category'>UTENSÍLIOS DOMÉSTICOS</h2>
                </li>
                <li className='options-category'>
                    <div className='conteiner-img-category'>
                        <img src={capaDeFundoCategory} alt="fundo da imagem da categoria" className='fundo-da-img-category' />
                        <img src={cabos} alt="CABOS" className='img-category' />
                    </div>
                    <h2 className='name-category'>CABOS</h2>
                </li>
            </ol> : null}

        </header>
    )
} 