import React from 'react';
import { Link } from 'react-router-dom';
import InstagramFeed from '../components/InstagramFeed';
import PayPalDonateButton from '../components/PayPalDonateButton';
import './Info.css';

const Info = () => {
  return (
    <div className="info-page">
      <section className="welcome-section">
        <h1>Tervetuloa Arctic Racing Societyyn!</h1>
        <p>ARS on pääosin suomalainen simracing-yhteisö, jonka pääpaino on Assetto Corsa -pelissä. Meillä ajetaan rennolla otteella – tämä on kasuaalin ajamisen koti, jossa kaiken tasoiset kuskit ovat lämpimästi tervetulleita. Sarjoja täällä yritetään ajaa siten että jokaiselle jossain vaiheessa löytyisi jotain mieleistä.</p>
      </section>

      <section className="instagram-section">
        <h2>❯❯❯❯Seuraa meitä Instagramissa❮❮❮❮</h2>
        <InstagramFeed />
      </section>

      <section className="donate-section">
        <h2>Tue toimintaamme</h2>
        <p>Ylläpidämme vakituisesti Hotlap-serveriä yhteistyössä TamUAn kanssa. Lahjoittaminen on täysin vapaaehtoista.</p>
        <div className="donate-button-container">
          <PayPalDonateButton />
        </div>
      </section>
    </div>
  );
};

export default Info;