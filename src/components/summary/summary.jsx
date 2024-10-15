import './summary.css'
import { useTranslation } from 'react-i18next'
import githubIcon from '../../assets/icons/github.svg';
import linkedinIcon from '../../assets/icons/linkedin.svg';
import gmailIcon from '../../assets/icons/gmail.svg';
import fotoPerfil from '../../assets/images/foto-perfil.jpg';


export function Summary() {

    const [t, i18n] = useTranslation("global");

    return (
        <div className="summary">
            <div className="summary-title">
                <div className="summary-title-content">
                    <h2 >{t("resumen.resumen-title")}</h2>
                    <h3>{t("resumen.resumen-title-2")}💻</h3>
                </div>
                <div className="summary-redes-foto">
                    <img src={fotoPerfil} alt="foto-perfil" />
                </div>
            </div>
            <div className="summary-buttons">
                <button><a>{t("resumen.resumen-boton")}</a></button>
                <button><a target="blank" href="https://drive.google.com/file/d/1UMZVqgH3x2MS5KKo4MW9gUWdkyaEAQAr/view?usp=sharing" >{t("resumen.resumen-boton-descarga")}</a></button>
            </div>
            
            <div className="summary-redes">
                <a target="blank" href="gmail:brianheredia200309@gmail.com"><img src={gmailIcon} alt="github-icon"/></a>
                <a target="blank" href="https://github.com/brian-h2"><img src={githubIcon} alt="github-icon" /></a>                
                <a target="blank" href="https://www.linkedin.com/in/brian-heredia-4a7a12240/"><img src={linkedinIcon} alt="linkedin-icon" /></a> 
            </div>
            <div className="summary-content">
                <p>{t("resumen.resumen-presentacion")}</p>
            </div >
            <div className="summary-history">
                <h3>{t("resumen.resumen-title-summary")}</h3>
                <p>{t("resumen.resumen-profile")}</p>
            </div>  
        </div>
    )
}
