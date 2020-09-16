import React from 'react';
import './styles.css';
import { FiSearch ,FiList } from 'react-icons/fi'

import logoImg from '../../assets/logo.png';

export default function Home() {
    return (
        <>
            <div className="home-container">

                <header>
                  <a href="/news">
                  <button className="news-button">
                        <FiList className="news-icon" size={30} color="#009688" />
                        Notícias
                        </button>
                        </a>
                </header>

                <div className="content">
                    <div className="content-main">
                        <div className="logoImg">
                            <img src={logoImg} alt="Inova" />
                        </div>

                        <div className="search-box">
                            <input className="search-input" placeholder="Digite um termo de pesquisa" />
                            <a href="/news">
                            <button className="search-button">
                                <FiSearch className="icon-search" size={16} color="#ffffff" />
                            </button>
                            </a>
                        </div>
                    </div>
                </div>

                <footer />

            </div>
        </>
    );
}