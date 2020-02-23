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
                <div className="container-article">
                    <div className="article">
                        <div className="container" data-aos="fade-right">
                            <div className="content-box1">
                                <img src="img-1.png" alt="sample" />
                            </div>
                            <div className="content-box2">
                                <p>CASE STUDY</p>
                                <h1>Reading Experience Filters Concepts</h1>
                                <p>Typography can maek or break the experience of using my application,
                                    especially if we're talking about news or book-reading apps.
</p>

                                <button className="btn-article">Read article</button>

                            </div>
                        </div>

                        <div className="samples">
                            <div className="sample-img-row">
                                <img src="img-1.png" alt="sample-img" />

                                <p>CASE STUDY</p>
                                <h3>Reading Ecperience Filters Concept</h3>
                                <p>Creating a landing page is one of the best
                                    and easiest way to promote your product
                            </p>
                            </div>

                            <div className="sample-img-row">
                                <img src="img-2.png" alt="sample-img" />

                                <p>CASE STUDY</p>
                                <h3>Reading Ecperience Filters Concept</h3>
                                <p>Creating a landing page is one of the best
                                    and easiest way to promote your product
                            </p>
                            </div>

                            <div className="sample-img-row">
                                <img src="img-3.png" alt="sample-img" />

                                <p>CASE STUDY</p>
                                <h3>Reading Ecperience Filters Concept</h3>
                                <p>Creating a landing page is one of the best
                                    and easiest way to promote your product
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Gallery;


