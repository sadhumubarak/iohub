import React, { Component, Fragment } from 'react';
import './index.scss';

class Gallery extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {

        return (
            <Fragment>
                <div className="container-gallery" id="products">
                <div className="gallery">
                    <p>Recent Works</p>

                    <div className="gallery-showcase">
                        <img alt="worked-img"></img>
                        <img alt="worked-img"></img>
                        <img alt="worked-img"></img>
                        <img alt="worked-img"></img>
                    </div>
                <div className="dribbble-link">
                    <a href="#" className="new-link">
                        <span>New</span>Discover all my recent designs on dribbble
                    </a>
                </div>
                </div>
                </div>
            </Fragment>
        );
    }
}

export default Gallery;


