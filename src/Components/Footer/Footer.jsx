
import './footer.scss'
import logoMb from '../../assets/logoMb3b.png'
import { BiMobile } from 'react-icons/bi';
import { MdMail } from 'react-icons/md';

const Footer = () => {
    return (
  <footer className="footer-contain" id="contact">
      <div className='contact'>
        <h4>Contact :</h4>
        <a href='mailto:baouz.med@outlook.fr'> <h4 className='mail'><MdMail/> : baouz.med@outlook.fr</h4></a>
        <a href='tel:+33758695115'><h4 className='mail'><BiMobile/>: (+33) 07.58.69.51.15</h4></a>
      </div>
      <img  src={logoMb} alt="logo"/>
       <p>© 2024 BAOUZ Mohamed.All rights reserved</p>
  </footer>
    );
};

export default Footer;