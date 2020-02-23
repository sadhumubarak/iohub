import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';

import './index.scss';



class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    };

    handleOption() {
        const x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }


    render() {
        const { open } = this.state;
        return (
            <Fragment>
                <header>
                    <div className="header">
                        <div className="logo">
                            <a href="#home">
                            <img src="io-logo.png" alt="io-logo" />
                            </a>
                        </div>

                        <div className="topnav" id="myTopnav">
                                    <a href="#work" >Work</a>
                            <a href="#about" >About</a>
                            <a href="#products" >Products</a>
                            <a href="#blog" >Blog</a>
                            <button className="btn-contact">Contact</button>
                        </div>

                        <div className="menu">
                            <i class="material-icons" onClick={() => {this.handleOption();}}>&#xe5d2;</i>
                        </div> 
                         
                    </div>    
                </header>
            </Fragment>
        );
    }
}

export default Header;


