import React from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import blog01 from '../../assets/blog01.jpg';
import blog02 from '../../assets/blog02.jpg';
import blog03 from '../../assets/blog03.jpg';
import blog04 from '../../assets/blog04.jpg';
import blog05 from '../../assets/blog05.jpg';
import './header.css';

const Header = () => (
  <div className="ech__header section__padding" id="home">
    <div className="ech__header-content">
      <h1 className="gradient__text">There can only be one Hero, Let&apos;s Go </h1>
      <Carousel>
        <Carousel.Item>
          <img src={blog01} height="920px" width="1720px" alt="blog01"/>
        </Carousel.Item>
        
        <Carousel.Item>
          <img src={blog02} height="920px" width="1720px" alt="blog02"/>
        </Carousel.Item>
        
        <Carousel.Item>
          <img src={blog03} height="920px" width="1720px" alt="blog03"/>
        </Carousel.Item>

        <Carousel.Item>
          <img src={blog04} height="920px" width="1720px" alt="blog04"/>
        </Carousel.Item>

        <Carousel.Item>
          <img src={blog05} height="920px" width="1720px" alt="blog05"/>
        </Carousel.Item>
      </Carousel>
    </div>
  </div>
);

export default Header;
