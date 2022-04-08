import React from 'react';
import reactDom from 'react-dom';
import video from '../../assets/video.mp4';
import './header.css';

const Header = () => (
  <div className="ech__header section__padding" id="home">
    <div className="ech__header-content">
      <h1 className="gradient__text">There can only be one Hero,Let&apos;s Go </h1>
    </div>

    <div className="ech__header-image">
      <video autoPlay loop muted>
        <sourse src={video} type="video/mp4" />
      </video>
    </div>
  </div>
);

export default Header;
