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
                            <img src="io-logo.png" alt="io-logo" />
                        </div>

                        <div className="topnav" id="myTopnav">
                            <a href="#" class="icon" onClick={ () => {this.handleOption();}}>
                            <i class="material-icons">&#xe5d2;</i></a>
                            <a href="#work" >Work</a>
                            <a href="#about" >About</a>
                            <a href="#products" >Products</a>
                            <a href="#blog" >Blog</a>
                            <a href="" >Contact</a>
                        </div>

                        <div className="button-contact">
                            <button className="btn-contact">Contact</button>
                        </div>
                    </div>    
                </header>
            </Fragment>
        );
    }
}

export default Header;


