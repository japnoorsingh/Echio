import React from 'react'

import { Footer, ESports, Features, Influencer, Header } from './containers';
import { CTA, Navbar } from './components';

import './App.css';

const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
             <Influencer />
             <Features />
             <ESports />
             <CTA />
             <Footer />
        </div>
    )
}

export default App