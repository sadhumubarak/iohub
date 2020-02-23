import React, { Component, Fragment } from 'react';

import Header from '../Header';
import Work from '../Work';
import Gallery from '../Gallery';
import Subscribe from '../Subscribe';
import Article from '../Article';
import About from '../About';
import Footer from '../Footer';

import './index.scss';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {

        return (
            <Fragment>
                <Header />
                <div className="container-home">
                <div className="showcase" id="home" data-aos="fade-up">
                    <div className="showcase-box-1">
                        <h1 className="showcase-title">Product Designer</h1>
                        <p className="showcase-paragraph">
                            We design thoughtful experiences to help you gain competitive advantage and grow your business event further
                        </p>
                        <button className="btn-start">
                            Get started
                        </button>
                    </div>
                    <div className="showcase-box-2">
                        <img src="./img-1.jpg" alt="illustrator-file" />
                    </div>
                </div>
                </div>

                <Work/>
                <Gallery/>
                <Subscribe/>
                <Article/>
                <About/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Home;


