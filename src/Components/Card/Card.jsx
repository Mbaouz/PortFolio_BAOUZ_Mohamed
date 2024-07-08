
import './card.scss'
import projectsList from '../../datas/projets.json';
import { Link } from 'react-router-dom';


const Card = () => {
  return (

  <div className='section-card' id='mes-projets'>
    <h2>Mes Projets</h2>
    <div className="card-contain">
      
      <div className='card-item'>
        {
          projectsList.map(project => (
           
            <Link to={"/fiche/" + project.id} key={project.id}>
              
                 <img src={project.cover} alt={project.title} />
                 <h2>{project.title}</h2>
              
            </Link>
          
          ))
        }
      </div>
    </div>
  </div>
  );
};

export default Card;