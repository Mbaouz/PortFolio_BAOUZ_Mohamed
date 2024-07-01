
import { useState } from "react";
import Collapse from '../../Components/Collapse/Collapse';
import logList from '../../datas/logements.json';
import './fiche.scss'
import { useParams } from 'react-router-dom'
import Error from '../Error/Error'
import { FaGithub } from 'react-icons/fa';



const Fiche = () => {
    const [index, setIndex] = useState(0)
    const { projectId } = useParams();
    
    const projects = logList.find((projects) => projects.id === projectId);
    if (!projects){ return <div>{<Error/>}</div>};
    

    const previous = () => { const NewIndex = (index===0)?projects.pictures.length - 1 : index - 1;
                             setIndex(NewIndex);
        
                           };

    const next = () => {  const NewIndex = (index===projects.pictures.length - 1) ? 0 : index + 1 ;
                        setIndex(NewIndex);

                       };

    const tech = projects.equipments       // Afficher text technologies collapse en list
    const techList = tech.map((equipment, index) => (     
                        
                           <div key={index}>{equipment}</div>
                        
                      ));

                      

    return (
        <div className="carousel">

            <div className='carousel-img'>
                <img src={projects.pictures[index]} alt={projects.title}></img>
                {projects.pictures.length > 1 && 
                <div id="arrow-slide">
                    <svg onClick={previous}  width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="arrL" d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="grey" />
                    </svg>
                    <svg onClick={next} width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="arrL"  d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="grey" />
                    </svg>
                </div>}
                {projects.pictures.length > 1 && 
                <div className="compteur">{index + 1} / {projects.pictures.length}</div>}
            </div>

            <div className='infos'>
                <div className='info-titre'>
                    
                    <h1>{projects.title}</h1>
                    <h2>{projects.location}</h2>

                </div>

            </div>
            
            <div className="tags-stars">
              <div className='tag'>

               <a href='https://github.com/Mbaouz' target="_blank" rel="noopener noreferrer" ><p>{projects.tags[0]}</p>
                 <span><FaGithub/></span></a>
            </div>
            

           </div>
            
            <div className="collapse-fiche">


            

            <Collapse  title="description" description={projects.description} />
            <Collapse  title="Technologies utilisées" description={techList} />
             
            </div>

            </div>

        
    );
};

export default Fiche;