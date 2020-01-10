import React, { Component } from "react";
import './App.css';
import logo from './mhraLogoSmall.png'

class Header extends Component {
    render() {
        return(
            <div className='topLeft'>
                <header>
                    <img src={logo} alt='logo' />
                </header>
            </div>
        )
    }
}

export default Header;