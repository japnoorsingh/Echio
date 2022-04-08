import React from 'react';
import Brands from '../../components/Brands/Brands';
import './Influencer.css';

const Influencer = () => (
  <div className="ech__Influencer section__margin" id="wgpt3">
    <div className="ech__Influencer-heading">
      <h1 className="gradient__text">INFLUENCER</h1>
      <p>True influencers are those that post on social media to impact not to impress. </p>
    </div>
    <div className="ech__Influencer-container">
      <Brands title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
      <Brands title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
      <Brands title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
    </div>
  </div>
);

export default Influencer;
