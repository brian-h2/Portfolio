import './header.css'
import { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import scriptIcon from '../../assets/icons/script.svg' 
import hamburIcon from '../../assets/icons/menu-hambur.svg' 
import imageUsa from '../../assets/images/flags/usa.jpg';
import imageSpa from '../../assets/images/flags/spain.png';



export function Header() {

    const [t, i18n] = useTranslation("global");

    const menuRef = useRef();
    const menuHambur = useRef();

    const handleMenuClick = () => {
        menuHambur.current.classList.toggle('active')
        menuRef.current.classList.toggle('active')
    }

    return (
        <div className="header">
            <div className="header-name">
                <h1>Brian</h1>
                <img src={scriptIcon} alt="script-icon"/>
            </div>
              
            <div className="header-options">
                <img className="menu" ref={menuHambur} src={hamburIcon} onClick={handleMenuClick} alt="hambur-icon"  id="hambur-icon"/>
                <div className='header-options-list'>
                    <div className='header-idioma'>
                        <button onClick={() => i18n.changeLanguage("es")}><img src={imageSpa}/></button>
                        <button onClick={() => i18n.changeLanguage("en")}><img src={imageUsa}/></button>
                    </div>
                    
                    <ul className="header-options-links" ref={menuRef}>
                        <div className='header-idioma-buton'>
                            <button onClick={() => i18n.changeLanguage("es")}><img src={imageSpa}/></button>
                            <button onClick={() => i18n.changeLanguage("en")}><img src={imageUsa}/></button>
                        </div>
                        <a>{t("navbar.navbar-element-1")}</a>
                        <a>{t("navbar.navbar-element-2")}</a>
                        <a>{t("navbar.navbar-element-3")}</a>
                        <a>{t("navbar.navbar-element-4")}</a>
                    </ul>
                </div>
            </div>
        </div>
    )
}