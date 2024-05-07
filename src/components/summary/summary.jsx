import './summary.css'
import githubIcon from '../../assets/icons/github.svg';
import linkedinIcon from '../../assets/icons/linkedin.svg';
import gmailIcon from '../../assets/icons/gmail.svg';
import fotoPerfil from '../../assets/images/foto-perfil.jpg';

export function Summary() {
    return (
        <>
        <div className="summary">
            <div className="summary-title">
                <h2>Hi, I Am Developer!</h2>
                <div className="summary-redes-foto">
                    <img src={fotoPerfil} alt="foto-perfil" />
                </div>
            </div>
            <div className="summary-buttons">
                <button>Proyectos</button>
                <button><a target="blank" href="https://drive.google.com/file/d/1UMZVqgH3x2MS5KKo4MW9gUWdkyaEAQAr/view?usp=sharing" >Descargar CV</a></button>
            </div>
            
            <div className="summary-redes">
                <a target="blank" href="gmail:brianheredia200309@gmail.com"><img src={gmailIcon} alt="github-icon"/></a>
                <a target="blank" href="https://github.com/brian-h2"><img src={githubIcon} alt="github-icon" /></a>                
                <a target="blank" href="https://www.linkedin.com/in/brian-heredia-4a7a12240/"><img src={linkedinIcon} alt="linkedin-icon" /></a> 
            </div>
            <div className="summary-content">
                <p>Me dedico al <span> Desarrollo Web </span> brindando distintos servicios y <span> Aplicaciones en Escritorio </span> para cubrir necesidades en emprendimientos</p>
            </div>
            <div className="summary-history">
                <h3>Summary</h3>
                <p>My name is Brian Heredia and my passion for solving problems and building applications is what motivates me to apply for this opportunity. Although I don't have work experience yet, I have spent three years studying and developing skills in the field of software development. During my first year, I completed web development courses, and in my second year, I began my career in systems analysis. </p>
            </div>
            
        </div>
        </>
    )
}
// <p>Mi nombre es Brian Heredia, Soy del interior de Córdoba, Jesus Maria. Actualmente me encuentro desarrollandome en el area web y software, con un stack de conocimientos necesarios para llevar a cabo un proyecto, soluciones, planificacion y producto final.</p>