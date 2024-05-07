import './skills.css'

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


const Skills = () => {
    return (
        <>
            <div className="skills"> 
                <h4>Skills</h4>
                <ul className='skills-list'>
                    <li><img src={iconCss} alt="icon" /></li>
                    <li><img src={iconHtml} alt="icon" /></li>
                    <li><img src={iconSaas}alt="icon" /></li>
                    <li><img src={iconReact} alt="icon" /></li>
                    <li><img src={iconNode} alt="icon" /></li>
                    <li><img src={iconJs} alt="icon" /></li>
                    
                    <li><img src={iconBoostrap} alt="icon" /></li>
                    <li><img src={iconCSharp} alt="icon" /></li>
                    <li><img src={iconGit} alt="icon" /></li>
                    <li><img src={iconNet} alt="icon" /></li>

                </ul>
            </div>

        </>
    )
}

export default Skills;