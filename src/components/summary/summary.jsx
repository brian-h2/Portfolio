import './summary.css'
import githubIcon from '../../assets/icons/github.svg';
import linkedinIcon from '../../assets/icons/linkedin.svg';
import gmailIcon from '../../assets/icons/gmail.svg';
import fotoPerfil from '../../assets/images/foto-perfil.jpg';

const element = document.querySelector('.summary');


export function Summary() {
    return (
        <div className="summary">
            <div className="summary-title">
                <h2 >Hi, I Am Developer!</h2>
                <div className="summary-redes-foto">
                    <img src={fotoPerfil} alt="foto-perfil" />
                </div>
            </div>
            <div className="summary-buttons">
                <button><a>Proyects</a></button>
                <button><a target="blank" href="https://drive.google.com/file/d/1UMZVqgH3x2MS5KKo4MW9gUWdkyaEAQAr/view?usp=sharing" >Download CV</a></button>
            </div>
            
            <div className="summary-redes">
                <a target="blank" href="gmail:brianheredia200309@gmail.com"><img src={gmailIcon} alt="github-icon"/></a>
                <a target="blank" href="https://github.com/brian-h2"><img src={githubIcon} alt="github-icon" /></a>                
                <a target="blank" href="https://www.linkedin.com/in/brian-heredia-4a7a12240/"><img src={linkedinIcon} alt="linkedin-icon" /></a> 
            </div>
            <div className="summary-content">
                <p>I am dedicated to<span> Web Development </span> providing diferent services and <span> Desktop Applications </span> to meet the need of businesses</p>
            </div >
            <div className="summary-history">
                <h3>Summary</h3>
                <p>My name is Brian Heredia and my passion for solving problems and creating applications is what I am passionate about. Although I do not have work experience yet, I have been studying and developing skills in the field of software development for three years. During my first year, I completed web development courses with <span>HTML, CSS, JavaScript, React and Firebase</span> and, in my second year, I began my career in Systems Analysis working with <span>C# in .NET</span> creating applications for service administration </p>
            </div>  
        </div>
    )
}
