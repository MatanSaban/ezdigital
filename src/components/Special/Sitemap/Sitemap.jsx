import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Sitemap = () => {
  const [sitemap, setSitemap] = useState(null);

  useEffect(() => {
    axios.get('https://cors-anywhere.herokuapp.com/https://ezd-psg.ussl.co.il/sitemap_index.xml')
      .then(res => setSitemap(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <h1>Sitemap</h1>
      {sitemap && (
        <pre>{sitemap}</pre>
      )}
    </>
  );
};

export default Sitemap;
