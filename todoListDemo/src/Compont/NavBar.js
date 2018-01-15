import React, { Component } from 'react';
import './nav.css'


class  NavBar extends Component{
    render(){
        return( <nav className="navbar">

            <a className="nav-logo" href="/">
                <img alt="logo" src="https://cdn2.jianshu.io/assets/web/nav-logo-4c7bbafe27adc892f3046e6978459bac.png"/>
            </a>

            <a className="btn btn-write">
                <i className="ic-write"></i>
                写文章
            </a>

        </nav>);
    }
}

export default NavBar;