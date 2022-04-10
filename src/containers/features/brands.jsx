import React from 'react';
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
      <h1 className="gradient__text">BRANDS</h1>
      <div className="container">
  <div className="scroll-wrapper">
    <div className="orb">1</div>
    <div className="orb red">2</div>
    <div className="orb dark">3</div>
    <div className="orb blue">4</div>
    <div className="orb orange">5</div>
    <div className="orb purple">6</div>
    <div className="orb green">7</div>
  </div>
  <div className="scroll-wrapper">
    <div className="orb">1</div>
    <div className="orb red">2</div>
    <div className="orb dark">3</div>
    <div className="orb blue">4</div>
    <div className="orb orange">5</div>
    <div className="orb purple">6</div>
    <div className="orb green">7</div>
  </div>
</div>

    </div>
  </div>
);

export default brands;
