import './header.css'
import scriptIcon from '../../assets/icons/script.svg' 
import hamburIcon from '../../assets/icons/menu-hambur.svg' 


export function Header() {
    return (
        <div className="header">
            <div className="header-name">
                <h1>Brian</h1>
                <img src={scriptIcon} alt="script-icon"/>
            </div>
              
            <div className="header-options">
                <img className="menu" src={hamburIcon} alt="hambur-icon" id="hambur-icon"/>
                <ul>
                    <a>Home</a>
                    <a>Summary</a>
                    <a>Proyects</a>
                    <a>Contact</a>
                </ul>
            </div>
        </div>
    )
}