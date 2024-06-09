import './header.css'
import { useRef, useState } from 'react'
import scriptIcon from '../../assets/icons/script.svg' 
import hamburIcon from '../../assets/icons/menu-hambur.svg' 


export function Header() {

    const menuRef = useRef();
    const menuHambur = useRef();

    //El estado en un principio es false, al darle click se volveria true y mostraria las opciones

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
                <ul className="header-options-links" ref={menuRef}>
                    <a>Home</a>
                    <a>Summary</a>
                    <a>Proyects</a>
                    <a>Contact</a>
                </ul>
            </div>
        </div>
    )
}