import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './ESports.css';

const ESports = () => (
  <div className="ech__blog section__padding" id="blog">
    <div className="ech__blog-heading">
      <h1 className="gradient__text">E-SPORTS <br /> The new gaming future is here</h1>
    </div>
    <div className="ech__blog-container">
      <div className="ech__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 26, 2021" text="VCT'22 is now LIVE .............." />
      </div>
      <div className="ech__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 26, 2021" text="VCT'21 BERLIN Highlights" />
        <Article imgUrl={blog03} date="Sep 26, 2021" text="VCT'22 Coming Soon......." />
        <Article imgUrl={blog04} date="Sep 26, 2021" text="Sentinels on ROCK OG" />
        <Article imgUrl={blog05} date="Sep 26, 2021" text="Forsaken you dumb " />
      </div>
    </div>
  </div>
);

export default ESports;
