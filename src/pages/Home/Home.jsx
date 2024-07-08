
import Card from "../../Components/Card/Card";
import './home.scss';
import Competence from '../../Components/Competences/Competence';
import cvImg from '../../assets/cvImg.jpg'


const Home = () => {

    return (
    <div>

            <Card />
            <div className="section-card" id="a-propos"><h2>A Propos de moi</h2></div>
            <div className="about">
            <p > Passionné depuis toujours par le monde de l’informatique , 
                j'ai suivi des formations et travaillé plusieurs années dans le domaine des réseaux informatiques et de maintenance , 
                pas seulement dans bien d'autres domaines aussi comme la restauration, la livraison et l’électricité, ces expériences 
                enrichissantes tant sur le plan professionnels que sur le plan humain qui mon aidé a mieux savoir connaitre mes clients 
                et de savoir me mettre a leurs place pour comprendre au mieux leurs attentes. C'est en voulant élargir mes connaissances 
                en informatique que je me suis tourné vers une formation de développeur web qui ma permis d'acquérir de nouvelles 
                compétences et de maitrisé les différents outils de développement de sites web et d'être autonome.</p>


                <button className="bt-cv"><a href={cvImg}>Voir mon CV</a></button>

            </div>
            <Competence/>
            
    </div>
    );
};

export default Home;