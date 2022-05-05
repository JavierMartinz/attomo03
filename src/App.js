import './App.css';
import React from "react";
import videoGranada from "./Assets/Video/TOURGCF.mp4";
import Header from './Componentes/Core/Header';
import Footer from './Componentes/Core/Footer';
import { BrowserRouter as Router} from 'react-router-dom';
import Landing from './Componentes/Landing/Landing';

function App() {
  return (
    <Router>
    <Header/>
      <video muted loop autoPlay className='back-video'>
        <source src={videoGranada} type="video/mp4"></source>
        Tu navegador no soporta los vídeos de HTML5
      </video>

    <Landing/>
    <Footer/>
    </Router>
  );
}

export default App;
