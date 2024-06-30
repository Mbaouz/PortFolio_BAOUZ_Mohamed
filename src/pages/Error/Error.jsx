
import './error.scss'
const Error = () => {
    return (
        <div className='error-contain'>

            <div className='number'>404</div>
            <p> Oups! La page que vous demandez n'existe pas. </p>
            
            <a href=" http://localhost:3000/ " > Retourner sur la page d’accueil </a>

        </div>
    );
};

export default Error;