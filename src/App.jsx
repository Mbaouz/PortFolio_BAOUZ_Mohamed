import { BrowserRouter, Routes, Route } from 'react-router-dom';



import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Error from './pages/Error/Error';
import Fiche from './pages/Fiche/Fiche';




function App() {
  return (
    
    <BrowserRouter>
    
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/fiche/:logementId' element={<Fiche />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
      
    </BrowserRouter>
   
   
  );
}

export default App;


