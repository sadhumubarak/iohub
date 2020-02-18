import React, { Component, Fragment } from 'react';
import './index.scss';

class Subscribe extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {

        return (
            <Fragment>
                <div className="subscribe">
                    <p>Articles</p>
                    <h1>Discover How I Think</h1>
                    <p>Get behind the scenes look of my design process. Sign up to 
                        say informed about the latest case studies and get unlimited access to 
                        my design resources
                    </p>

                    <input type="text" placeholder="you@sample.com" />
                    <button className="btn-subscribe">Subscribe</button>
                </div>
            </Fragment>
        );
    }
}

export default Subscribe;


