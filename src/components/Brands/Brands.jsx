import React from 'react';
import './Brands.css';

const Brands = ({ title, text }) => (
  <div className="ech__features-container__feature">
    <div className="ech__features-container__feature-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="ech__features-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Brands;
