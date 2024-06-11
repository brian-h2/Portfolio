import './proyect.css'
import { useTranslation } from 'react-i18next'
import proyectOne from '../../assets/images/1.png';
import proyectTwo from '../../assets/images/2.png';
import proyectThree from '../../assets/images/3.png';
import proyectFour from '../../assets/images/5.png';
import proyectFive from '../../assets/images/6.jpg';
import iconCss from '../../assets/icons/icons-lenguajes/css.svg';
import iconHtml from '../../assets/icons/icons-lenguajes/html.svg';
import iconSaas from '../../assets/icons/icons-lenguajes/sass.svg';
import iconJs from '../../assets/icons/icons-lenguajes/js.svg';
import iconReact from '../../assets/icons/icons-lenguajes/react.svg';
import iconCsharp from '../../assets/icons/icons-lenguajes/c-sharp.svg';
import iconNet from '../../assets/icons/icons-lenguajes/net.svg';
import iconGit from '../../assets/icons/icons-lenguajes/git.svg';
import webIcon from '../../assets/icons/web.svg';
import iconNode from '../../assets/icons/icons-lenguajes/node.svg';
import githubIcon from '../../assets/icons/github.svg';



export function Proyects() {

    const [t, i18n] = useTranslation("global");

    return (
        <div className="proyects">
                <div className="proyects-title">
                    <h3>{t("proyects.proyects-title")}</h3>
                </div>
                <div className="proyects-content">
                    <div className="proyect">
                        <img src={proyectOne}/>
                        <div className="proyect-resum">
                            <p>{t("proyects.proyects-content")}</p>
                            <a href="https://github.com/brian-h2/JavaScript" target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="" srcset="" /></a>
                            <a href="https://e-commerce-silk-tau-28.vercel.app/" target="_blank" rel="noopener noreferrer"><img src={webIcon} alt="" srcset="" /></a>
                        </div>
                        <div className='proyect-icons'>   
                            <img src={iconCss}/>
                            <img src={iconHtml}/>
                            <img src={iconJs}/>
                            <img src={iconSaas}/>
                            <img src={iconReact}/>
                        </div>
                    </div>
                    <div className="proyect">
                    <img src={proyectTwo}/>
                            <div className="proyect-resum">
                            <p>{t("proyects.proyects-content-3")}</p>
                                 <a href="https://github.com/brian-h2/Mouse-G520X-Web" target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="" srcset="" /></a>
                                <a href="https://mouse-g520-x-web.vercel.app/" target="_blank" rel="noopener noreferrer"><img src={webIcon} alt="" srcset="" /></a>
                            </div>
                            
                            <div className='proyect-icons'>
                                <img src={iconCss}/>
                                <img src={iconHtml}/>
                                <img src={iconJs}/>
                                <img src={iconNode}/>
                            </div>
                    </div>
                    <div className="proyect">
                    <img src={proyectThree}/>
                            <div className="proyect-resum">
                            <p>{t("proyects.proyects-content-3")}</p>
                                <a target="blank"href='https://github.com/brian-h2/Hotel-Booking'><img src={githubIcon} alt=""/></a>
                                <a href="https://hotel-booking-nu-six.vercel.app/" target='blank'><img src={webIcon} alt="" srcset=""/></a>
                            </div>
                        
                            <div className='proyect-icons'>
                                <img src={iconCss}/>
                                <img src={iconHtml}/>
                                <img src={iconJs}/>
                                <img src={iconNode}/>
                            </div>
                    </div>
                    <div className="proyect">
                        <img src={proyectFour}/>
                                <div className="proyect-resum">
                                <p>{t("proyects.proyects-content-3")}</p>
                                    <a target="blank"href='https://github.com/brian-h2/Proyecto-final-JS-CoderHouse'><img src={githubIcon} alt=""/></a>
                                    <a href="https://github.com/brian-h2/Proyecto-final-JS-CoderHouse" target='blank'><img src={webIcon} alt="" srcset=""/></a>
                                </div>
                                
                                <div className='proyect-icons'>
                                    <img src={iconCss}/>
                                    <img src={iconHtml}/>
                                    <img src={iconJs}/>
                                    <img src={iconNode}/>
                                
                                </div>
                    </div>
                    <div className="proyect">
                        <img src={proyectFive}/>
                                <div className="proyect-resum">
                                <p>{t("proyects.proyects-content-2")}</p>
                                    <a target="blank"href='https://github.com/brian-h2/pryIntegrador'><img src={githubIcon} alt=""/></a>
                                </div>
                                
                                <div className='proyect-icons'>
                                    <img src={iconCsharp}/>
                                    <img src={iconNet}/>
                                    <img src={iconGit}/>
                                
                                </div>
                        </div>
                    </div>
                   
                </div>
            
    )
}