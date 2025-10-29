import React from 'react';
import { Link } from 'react-router-dom';
import PayPalDonateButton from '../components/PayPalDonateButton';
import { FaDiscord, FaYoutube, FaInstagram } from 'react-icons/fa';
import './Info.css';

const Info = () => {
  return (
    <div className="info-page-grid">
      <main className="main-content">
        <section className="welcome-section">
          <h1>Tervetuloa ARS:iin!</h1>
          <p>ARS on pääosin suomalainen simracing-yhteisö, jonka pääpaino on Assetto Corsa -pelissä. Meillä ajetaan rennolla otteella – tämä on kasuaalin ajamisen koti, jossa kaiken tasoiset kuskit ovat lämpimästi tervetulleita. Sarjoja täällä yritetään ajaa siten että jokaiselle jossain vaiheessa löytyisi jotain mieleistä.</p>
        </section>
        <section className="series-links">
          <h2>Sarjat</h2>
          <div className="links-container">
            <Link to="/paasarja" className="series-card"><h3>Pääsarja</h3></Link>
            <Link to="/shuffle-cup" className="series-card"><h3>Shuffle Cup</h3></Link>
            <Link to="/touge" className="series-card"><h3>Touge</h3></Link>
            <Link to="/hotlap-hontsa" className="series-card"><h3>Hotlap Hontsa</h3></Link>
          </div>
        </section>
      </main>
      <aside className="sidebar">
        <div className="sidebar-card">
          <section className="social-media-section">
            <h2>Meidän somet:</h2>
            <div className="social-links">
              <a href="https://discord.gg/twcdj9gEhQ" target="_blank" rel="noopener noreferrer" aria-label="Discord"><FaDiscord /></a>
              <a href="https://www.youtube.com/@ArcticRacingSociety" target="_blank" rel="noopener noreferrer" aria-label="Youtube"><FaYoutube /></a>
              <a href="https://www.instagram.com/articracingsociety/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
            </div>
          </section>
        </div>
        <div className="sidebar-card">
          <section className="donate-section">
            <h2>Tue toimintaamme</h2>
            <p>Ylläpidämme vakituisesti Hotlap-serveriä yhteistyössä TamUAn kanssa. Lahjoittaminen on täysin vapaaehtoista.</p>
            <div className="donate-button-container">
              <PayPalDonateButton />
            </div>
          </section>
        </div>
      </aside>
    </div>
  );
};

export default Info;