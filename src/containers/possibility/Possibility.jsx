import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="ech__possibility section__padding" id="possibility">
    <div className="ech__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="ech__possibility-content">
      <h1 className="gradient__text"> BRANDS </h1>
      <h4>Brands associated with echio are the ones that prefer purpose over profit.</h4>
      <p>Echio brings only those brands that MATTER,that  create value in society.we believe that brands are not about product,marketing or website it is about the experience it sells to the customer</p>
      <h2>Total Brands- 6+ </h2>
    </div>
  </div>
);

export default Possibility;
