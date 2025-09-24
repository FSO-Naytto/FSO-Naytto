import React from 'react';
import { InstagramEmbed } from 'react-social-media-embed';

const InstagramFeed = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <InstagramEmbed url="https://www.instagram.com/articracingsociety/" width={550} />
    </div>
  );
};

export default InstagramFeed;