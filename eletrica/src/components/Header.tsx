import { useState } from "react";
import "../styles/Header.css"
import { AiOutlineMenuUnfold } from 'react-icons/ai';

export const Header = () => {
   const [buttonMenu, setButtonMenu] = useState(false)

    const openMenu = () => {
        setButtonMenu(!buttonMenu)
    }

    return (
        <header>
            <div className="logo-header">
                <h1>ELÉTRICA <span>J.SANTOS</span></h1>
            </div>
            <div className="open-infos-header-mobile">
                <button onClick={() => openMenu()}><AiOutlineMenuUnfold/></button></div>
            
            {buttonMenu ? <div className="infos-header-mobile">
                <button className="button-home">Home</button>
                <button className="button-categoy">Categorias <img src="../assets/chevron-down.png" alt="Options categories"/></button>
                <button className="button-about">Sobre</button>
                <button className="button-location">Localização</button>
                <button className="button-contact">Contato</button>
           </div>: null}

           <div className="infos-header">
                <button className="button-home">Home</button>
                <button className="button-categoy">Categorias <img src="../assets/chevron-down.png" alt="Options categories"/></button>
                <button className="button-about">Sobre</button>
                <button className="button-location">Localização</button>
                <button className="button-contact">Contato</button>
           </div>
            
        </header>
    )
} 