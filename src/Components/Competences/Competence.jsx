
import './competence.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import { faGithub , faGitAlt , faReact , faJs , faCss3 , faHtml5 , faSass , faNpm , faNode ,
         faFigma , } from '@fortawesome/free-brands-svg-icons';
import { SiRedux } from 'react-icons/si';
import { SiSwagger } from 'react-icons/si';
const Competence = () => {

return (
<div className='section-logo'>
<div className='logo-contain'>
    <div className='item-logo'>
    <FontAwesomeIcon className='iconx' icon={faGithub} />
    <h3>Github</h3>
    </div>
    <div className='item-logo'>
    <FontAwesomeIcon className='iconx' icon={faGitAlt} />
    <h3>Git</h3>
   </div>
    <div className='item-logo'>
    <FontAwesomeIcon className='iconx' icon={faReact} />
    <h3>React</h3>
    </div>
    <div className='item-logo'>
    <FontAwesomeIcon className='iconx' icon={faJs} />
    <h3>JavaScript</h3>
    </div>
    <div className='item-logo'>
    <FontAwesomeIcon className='iconx' icon={faCss3} />
    <h3>CSS3</h3>
    </div>
    <div className='item-logo'>
    <FontAwesomeIcon className='iconx' icon={faHtml5} />
    <h3>Html5</h3>
    </div>
    <div className='item-logo'>
    <FontAwesomeIcon className='iconx' icon={faSass} />
    <h3>Sass</h3>
    </div>
    <div className='item-logo'>
    <FontAwesomeIcon className='iconx' icon={faNpm} />
    <h3>Npm</h3>
    </div>
    <div className='item-logo'>
    <FontAwesomeIcon className='iconx' icon={faNode} />
    <h3>Node</h3>
    </div>
    <div className='item-logo'>
    <FontAwesomeIcon className='iconx' icon={faFigma} />
    <h3>Figma</h3>
    </div>
    <div className='item-logo'>
    <SiRedux className='iconx'/>
    <h3>Redux</h3>
    </div>
    <div className='item-logo'>
    <SiSwagger className='iconx'/>
    <h3>Swagger</h3>
    </div>
  </div> 
  
  </div>

)

}


export default Competence ; 