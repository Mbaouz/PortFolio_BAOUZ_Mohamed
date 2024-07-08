
import './competence.scss'

import jsImg from '../../assets/devLogo/JavaScript.png'
import gitHubImg from '../../assets/devLogo/github.png'
import gitImg from '../../assets/devLogo/git.png'
import reactImg from '../../assets/devLogo/react.png'
import cssImg from '../../assets/devLogo/css.png'
import htmlImg from '../../assets/devLogo/html5.png'
import sassImg from '../../assets/devLogo/sass.png'
import npmImg from '../../assets/devLogo/npm-logo.jpg'
import nodeImg from '../../assets/devLogo/node.png'
import figmaImg from '../../assets/devLogo/figma.png'
import reduxImg from '../../assets/devLogo/redux.png'
import swaggerImg from '../../assets/devLogo/swagger.png'




const Competence = () => {

return (
  
<div className='section-logo'>
<h2>Mes Compétences</h2>
<div className='logo-contain'>
    <div className='item-logo'>
    <img src={gitHubImg} alt="git hub"/>
    <h3>Github</h3>
    </div>
    <div className='item-logo'>
    <img src={gitImg} alt="git"/>
    <h3>Git</h3>
   </div>
    <div className='item-logo'>
    <img src={reactImg} alt="react" />
    <h3>React</h3>
    </div>
    <div className='item-logo'>
    <img src={jsImg} alt="js"/>
    <h3>JavaScript</h3>
    </div>
    <div className='item-logo'>
    <img src={cssImg} alt="css" />
    <h3>CSS3</h3>
    </div>
    <div className='item-logo'>
    <img src={htmlImg}  alt="img"/>
    <h3>Html5</h3>
    </div>
    <div className='item-logo'>
    <img src={sassImg} alt="sass" />
    <h3>Sass</h3>
    </div>
    <div className='item-logo'>
    <img src={npmImg} alt="npm" />
    <h3>Npm</h3>
    </div>
    <div className='item-logo'>
    <img src={nodeImg} alt="node"/>
    <h3>Node</h3>
    </div>
    <div className='item-logo'>
    <img src={figmaImg} alt="figma" />
    <h3>Figma</h3>
    </div>
    <div className='item-logo'>
    <img src={reduxImg} alt="redux"/>
    <h3>Redux</h3>
    </div>
    <div className='item-logo'>
    <img src={swaggerImg} alt="swagger"/>
    <h3>Swagger</h3>
    </div>
  </div> 
  
  </div>

)

}


export default Competence ; 