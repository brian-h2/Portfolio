import './skills.css'
import { useTranslation } from 'react-i18next'
import iconCss from '../../assets/icons/icons-lenguajes/css.svg';
import iconHtml from '../../assets/icons/icons-lenguajes/html.svg';
import iconSaas from '../../assets/icons/icons-lenguajes/sass.svg';
import iconJs from '../../assets/icons/icons-lenguajes/js.svg';
import iconReact from '../../assets/icons/icons-lenguajes/react.svg';
import iconNode from '../../assets/icons/icons-lenguajes/node.svg';
import iconBoostrap from '../../assets/icons/icons-lenguajes/boostrap.svg';
import iconCSharp from '../../assets/icons/icons-lenguajes/c-sharp.svg';
import iconGit from '../../assets/icons/icons-lenguajes/git.svg';
import iconNet from '../../assets/icons/icons-lenguajes/net.svg';
import iconSequelize from '../../assets/icons/icons-lenguajes/sequelize.svg';
import iconMYSQL from '../../assets/icons/icons-lenguajes/mysql.svg';
import iconSQLServer from '../../assets/icons/icons-lenguajes/sql-server.svg';
import iconExpress from '../../assets/icons/icons-lenguajes/express.svg';
import iconTailwind from '../../assets/icons/icons-lenguajes/tailwind.svg';
const Skills = () => {

    const [t, i18n] = useTranslation("global");

    return (
        <div className="skills" data-aos="fade-up" data-aos-duration="1000"  data-aos-easing="ease-in-out"> 
                <h4>{t("skills.skills-title")}</h4>
                <ul className='skills-list'>
                    <li><img src={iconCss} alt="icon" /></li>
                    <li><img src={iconHtml} alt="icon" /></li>
                    <li><img src={iconSaas}alt="icon" /></li>
                    <li><img src={iconReact} alt="icon" /></li>
                    <li><img src={iconJs} alt="icon" /></li>
                    <li><img src={iconBoostrap} alt="icon" /></li>
                    <li><img src={iconGit} alt="icon" /></li>
                    <li><img src={iconTailwind} alt="icon" /></li>

                </ul>
                <h4>{t("skills.skills-title-2")}</h4>
                <ul className='skills-list'>
                    <li><img src={iconNode} alt="icon" /></li>
                    <li><img src={iconCSharp} alt="icon" /></li>
                    <li><img src={iconNet} alt="icon" /></li>
                    <li><img src={iconSequelize} alt="icon" /></li>
                    <li><img src={iconMYSQL} alt="icon" /></li>
                    <li><img src={iconSQLServer} alt="icon" /></li>
                    <li><img src={iconExpress} alt="icon" /></li>
                    
                </ul>
        </div>
    )
}

export default Skills;