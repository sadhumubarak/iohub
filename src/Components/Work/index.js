import React, { Component, Fragment } from 'react';
import './index.scss';

class Work extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {

        return (
            <Fragment><div className="container-work" id="work">
                        <div className="work">
                        <div className="work-title">
                            <div className="work-content">
                                <p>How we work</p>
                                <h1>Desig Process</h1>
                                <p>Reach Your business goals with excellent user experiences
                                    Let's start working on your awesome web or iOS app.
                        </p>
                            </div>

                            <div className="work-buttons">
                                <button className="btn-first">Start a project</button>
                                <button className="btn-second">Learn more</button>
                            </div>
                        </div>

                        <div className="work-schedule-box">
                        <div className="work-schedule">
                            <h3>Strategy</h3>
                            <p><span>Ask first.</span>Before jumping into designing I always make sure that
                                we're asking the right questions and tryig to accomplish the right challenges.
                                this stage includes market research. competitive analyses, consulting and
                                exploring possible solutions.
                        </p>
                        </div>
                        <div className="work-schedule">
                            <h3>Design</h3>
                            <p><span>second title</span>Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text
                                ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book. It has survived not
                                only five centuries, butlso the leap into electronic typesetting,
                            remaining essentially unchanged.</p>
                        </div>
                        <div className="work-schedule">
                            <h3>Development</h3>
                            <p><span>third title</span>Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text
                                ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book. It has survived not
                                only five centuries, butlso the leap into electronic typesetting,
                            remaining essentially unchanged.</p>
                        </div>
                        <div className="work-schedule">
                            <h3>Quality assurance</h3>
                            <p><span>fourth title</span>Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text
                                ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book. It has survived not
                                only five centuries, butlso the leap into electronic typesetting,
                            remaining essentially unchanged.</p>
                        </div>
                        </div>
                    </div>
                    </div>
            </Fragment>
        );
    }
}

export default Work;


