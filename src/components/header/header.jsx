import './header.css'
import { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import scriptIcon from '../../assets/icons/script.svg' 
import hamburIcon from '../../assets/icons/menu-hambur.svg' 



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
                <button onClick={() => i18n.changeLanguage("es")}>ES</button>
                <button onClick={() => i18n.changeLanguage("en")}>EN</button>
                
                <ul className="header-options-links" ref={menuRef}>
                    <a>{t("navbar.navbar-element-1")}</a>
                    <a>{t("navbar.navbar-element-2")}</a>
                    <a>{t("navbar.navbar-element-3")}</a>
                    <a>{t("navbar.navbar-element-4")}</a>
                </ul>
            </div>
        </div>
    )
}