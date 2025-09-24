import React from 'react';
import InstagramFeed from '../components/InstagramFeed';

const Info = () => {
  return (
    <div>
      <h1>Info</h1>
      <p>Tervetuloa Arctic Racing Society -sivustolle! Täältä löydät tietoa meistä ja toiminnastamme.</p>
      <hr />
      <h2>Seuraa meitä Instagramissa!</h2>
      <InstagramFeed />
    </div>
  );
};

export default Info;