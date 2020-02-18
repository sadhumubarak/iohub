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
                <div className="container-about" id="about">
                <div className="about">
                    <div className="about-box1">
                    <p>Nice to meet you</p>
                    <h1>HI there, We are IOHub</h1>

                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        orem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book.</p>
                        <p>
                        It has survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged. It was popularised in 
                        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker 
                        including versions of Lorem Ipsum
                        </p>
                    </div>
                    <div className="about-box2">
                        <h4>Let,s be friends</h4>
                        <p>im especially active on instagram and Twitter</p>
                        
                        <div className="icon">
                        <label><img src="icon-facebook.svg" alt="icon"/><span>Facebook</span></label>
                        <label><img src="icon-instagram.svg" alt="icon"/><span>Instagram</span></label>
                        <label><img src="icon-pinterest.svg" alt="icon"/><span>pinterest</span></label>
                        </div>
                    </div>


                </div>
                </div>
            </Fragment>
        );
    }
}

export default Gallery;


