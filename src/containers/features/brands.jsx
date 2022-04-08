import React from 'react';
import Feature from '../../components/Brands/Brands';
import './brands.css';

const featuresData = [
  {
    title: 'Team SENTINALS',
    text: 'Tenz, Shazam, DapR',
  },
  {
    title: 'Team PRX',
    text: 'Forsaken, Jingxx',
  },
  {
    title: 'Team Velocity',
    text: 'Marzil, Tbone',
  },
  {
    title: 'Team Accent',
    text: 'pdhai pe dhyan do',
  },
];

const brands = () => (
  <div className="ech__features section__padding" id="features">
    <div className="ech__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
    </div>
    <div className="ech__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default brands;
