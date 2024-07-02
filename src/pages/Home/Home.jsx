

import Card from "../../Components/Card/Card";
import backImage from '../../assets/background.jpg';
import './banner.scss';
import Competence from '../../Components/Competences/Competence';
import 'animate.css';

const Home = () => {
    return (
    <div>

        <div className='banner'>

            <img src={backImage} alt="nature"></img>
            <h1>BAOUZ Mohamed , Développeur Web</h1>

        </div>

            <Card />
            <Competence/>
    </div>
    );
};

export default Home;