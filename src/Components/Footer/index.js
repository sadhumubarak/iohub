import React, { Component, Fragment } from 'react';
import './index.scss';

class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {

        return (
            <Fragment>
                
                    <footer><div className="footer">
                    <p>Get in touch</p>
                    <h1>Let's work together</h1>
                    <p>if your have a webiste or mobile app idea in mind or you need some
                        advice about product design, feel free to contact us. Currently out time books
                        quickly. so the sooner you write, the better it is for both of us.
                    </p>
                    <button className="btn-email">sample.com</button>

                    <div className="icon-row">
                        <img src="icon-facebook.svg" alt="facebook"/>
                        <img src="icon-instagram.svg" alt="instagram"/>
                        <img src="icon-pinterest.svg" alt="pinterest"/>
                    </div>

                    <p> &copy; 2020 All rights reserved - Designed @ Coded by iohub team </p>
                </div>
                </footer>

            </Fragment>
        );
    }
}

export default Footer;


