import React from 'react';
import './styles.css';
import { FiSearch, FiSliders, FiMapPin, FiCalendar } from 'react-icons/fi'

import logoImg from '../../assets/launcher_icon_white.png';
import newMain from '../../assets/google.jpg';


export default function News() {
    return (
    <>
    <div className="news-container">

    <div className="headerDefault">
    <a href="/" className="home-link" ><img class="logoImg" src={logoImg} alt="Inova" /> </a>
            </div>
                
    <div className="search-box">
        <input className="search-input" placeholder="Digite um termo de pesquisa" />
            <button className="search-button">
            <FiSearch className="icon-search" size={16} color="#ffffff" />
            </button>
                </div>
    
    <h1 className="title-page">Notícias</h1>
                           
    <div className="filter-box">
    <h2>Filtro</h2><FiSliders color="#848484"/>
    <button className="filter-button">Todas</button>
    <button className="filter-button">Princípais</button>
    <button className="filter-button">Verdadeira</button>
    <button className="filter-button">FakeNews</button>
        </div> 
                            
    <div className="newmain-box">
    
    <div className="newMain"/>
    
    <div className="newmain-text">
       <a href="/new"> <h1 className="titleNewmain">Google está precisando de programadores urgente!</h1></a>
           <p>Lorem ipsum dolor sit amet. Est totam incidunt ut esse dolorem ut consectetur pariatur quo 
                    dolores rerum sed accusantium obcaecati. 
          </p>
           <div className="statistcs-box">
            <FiCalendar size={25}  className="map-icon"  color="#848484"/> 
            <div className="subtitle">Há 6 minutos</div>
            <FiMapPin className="map-icon" size={25} color="#E67C7C"/> 
            <div className="subtitle"> Alegrete/Rio Grande do Sul</div>
            </div>
                </div>
                    </div>
                        
    <div className="secundarynew-box">
    
    <a href="/new" className="box-link">
        <div className="new-box1">
           <h1>Café é muito bom</h1> 
          
    <div className="statistcs-box" >
        <div className="subtitle">
            <FiCalendar className="calendar-icon" size={25}  color="#ffffff"/> 
                Há 6 minutos</div>
                    <div className="subtitle">
                        <FiMapPin className="map-icon" size={25}  color="#ffffff"/> 
                            Alegrete/Rio Grande do Sul</div>
                        </div>
                            </div>   
                            </a>

    <a href="/new" className="box-link">          
    <div className="new2-box"> 
     <h1>Idosos flagrados andando sem máscara!</h1> 
    
    <div className="statistcs-box">
    <div className="subtitle">        
        <FiCalendar  size={25}  color="#ffffff" className="calendar-icon"/> 
            Há 6 minutos</div>
                <div className="subtitle">
                    <FiMapPin className="map-icon" size={25}  color="#ffffff"/> 
                        Alegrete/Rio Grande do Sul</div>
                    </div>
                       </div>
                            </a>
    </div>
    
    <div className="footer"/>
    
        </div>
            </>
    
    );
}


