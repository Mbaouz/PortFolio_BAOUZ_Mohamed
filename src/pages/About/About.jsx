
import Collapse from "../../Components/Collapse/Collapse";
import AboutImg from '../../assets/background.jpg'
import '../../Components/Collapse/collapse.scss'

const About = () => {
    return (
        <div>
            <div className='back-img-about'>
                <img src={AboutImg} alt="nature"></img>
            </div>
            <div className="collapse-contain-about">
                <Collapse  title="A Propos de moi" description="   Passionné  depuis  toujours  par  le  monde  de  l’informatique ,  j'ai  suivi  des  formations  et travaillé plusieurs  années  dans  le  domaine des réseaux  informatiques  et  de  maintenance , pas seulement dans bien d'autres domaines aussi comme la restauration, la livraison et l’électricité, ces expériences enrichissantes tant sur le plan professionnels  que sur le plan  humain qui mon aidé a mieux savoir connaitre mes clients et de savoir me mettre a leurs place pour comprendre au mieux leurs attentes. C'est en voulant élargir mes connaissances en informatique que je me suis tourné vers une formation de développeur web qui ma permis d'acquérir de nouvelles compétences et 
                de maitrisé les différents outils de développement de sites web et d'être autonome.  " />
                <Collapse title="Mes Compétences" description="  Référencement naturel , JavaScript , Html5 , Sass , React , Redux . " />
                <Collapse title="CV" description="/projectsPic/cv.jpg"/>
                
            </div>
        </div>
    );
};

export default About;