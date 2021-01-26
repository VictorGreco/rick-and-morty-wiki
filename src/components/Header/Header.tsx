import React from 'react';
import './Header.css';
import logo from '../../logo.png';
import title from '../../title.png';
import { Link } from "react-router-dom";


export interface HeaderProps {
    data: any;
    setData: Function;
}

const Header = (props: any): JSX.Element => {

    return (
        <header className="Header">
            <Link to="/" >
                <img src={title} alt="title" height="75" width="auto" />
            </Link>
            <Link to="/" >
                <img src={logo} alt="logo" height="60" width="auto" />
            </Link>
        </header>
    )
};
export default Header;