import React from 'react';
import './Landing.css';
import ParallaxModule from './Parallax';
import icon01 from '../../Assets/Icons/Mobile/Calendar.svg';
import icon02 from '../../Assets/Icons/Mobile/Clock.svg';
import icon03 from '../../Assets/Icons/Mobile/Place.svg';
import icon04 from '../../Assets/Icons/Mobile/Person.svg';
import icon05 from '../../Assets/Icons/Mobile/Language.svg';
import icon06 from '../../Assets/Icons/Mobile/Declined.svg';
import icon07 from '../../Assets/Icons/Mobile/Slider.svg';
import llave from '../../Assets/Images/Desktop/llave.svg';


function Landing() {
  return (
    <section>
        
        <ParallaxModule/>

        <div className='landing-last'>
          <div className='landing-last-container'>
            <div className='landing-last-main'>
              <img className='landing-llave' src={llave} alt=""></img>
              <h2>información práctica</h2>
            </div>

            <div className='landing-div'>
              <img className='list-icon' src={icon01} alt=''/>
              <div className='landing-desktop'>
                <p><b className='landing-bold'>Fecha y hora:&nbsp;</b></p>
                <div>
                     <p>Viernes:&nbsp;<b>16:00h y 17:00h</b></p>
                     <p>Sábado:&nbsp;<b>11:00h y 12:00h</b></p>
                </div>
                
              </div>
            </div>

            <div className='landing-div'>
              <img className='list-icon' src={icon02} alt=''/>
              <p><b>Duración: </b>1 hora</p>
            </div>

            <div className='landing-div'>
              <img className='list-icon' src={icon03} alt=''/>
              <div>  
                <p><b>Lugar:&nbsp;</b>Estadio Nuevo Los Cármenes</p>
                <p><b>Punto de encuentro:&nbsp;</b>Tienda del estadio</p>
              </div>
            </div>

            <div className='landing-div'>
              <img className='list-icon' src={icon03} alt=''/>
              <div className='landing-desktop'>  
                <p><b>Lugar:&nbsp;</b></p>
                <div>
                  <p>Estadio Nuevo Los Cármenes</p>
                  <p><b>Punto de encuentro:&nbsp;</b>Tienda del estadio</p>
                </div>
              </div>
            </div>

            <div className='landing-div'>
             <img className='list-icon' src={icon04} alt=''/>
              <p><b>Menores: </b>Acceso permitido a todos los públicos. Entrada gratuita a menores de 5 años.</p>
            </div>

            <div className='landing-div'>
              <img className='list-icon' src={icon05} alt=''/>
              <p><b>Idiomas: </b>Disponible en otros idiomas</p>
            </div>

            <div className='landing-div'>
              <img className='list-icon' src={icon06} alt=''/>
              <p><b>Cancelación: </b>Cancelación gratuita hasta 7 días antes</p>
            </div>

            <div className='landing-div'>
              <img className='list-icon' src={icon07} alt=''/>
              <p><b>Personalizar: </b>Para personalizar tu experiencia (cumpleaños, empresas, grupos grandes) contactad
              con hola@bstadium.es</p>
            </div>

            <div className='landing-div'>
              <img className='list-icon' src={icon07} alt=''/>
              <div className='landing-desktop'>
                <p><b>Personalizar: </b></p>
                <div>
                <p>Para personalizar tu experiencia (cumpleaños, empresas, grupos grandes) contactad
                con hola@bstadium.es</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        
    </section>
  )
}

export default Landing