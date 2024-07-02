

import './card.scss'
import logList from '../../datas/logements.json';
import { Link } from 'react-router-dom';





const Card = () => {
  return (

    <div className='section-card' id='mes-projets'>
    <h2>Mes Projets</h2>
    <div className="card-contain">
      
      <div className='card-item'>
        {
          logList.map(logt => (
           
            <Link to={"/fiche/" + logt.id} key={logt.id}>
              
                 <img src={logt.cover} alt={logt.title} />
                 <h2>{logt.title}</h2>
              
            </Link>
          
          ))
        }
      </div>
    </div>
    </div>
  );
};

export default Card;