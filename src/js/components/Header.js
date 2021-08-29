import React, {Component} from 'react';
import {Link} from "react-router-dom";
import '../../css/header.css';

import prefix from "./Config";

const MyLink = ({to, className = "", children = []}) => {

    let location=window.location.pathname;
    if(location =="/contact")
    location="/about";

    return (
        <Link to={to} className={( location === to ? "active" : " ")}>
             <i className={className}/><span>{children}</span>
             </Link>
    )
};

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: false};

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <header className={this.state.isToggleOn ? "is-open " : () => setTimeout((""), 4000)}>
                <div className={(this.state.isToggleOn ? "is-open " : " ") + "logo"}>
                    {/* <div className="logo_img">
                        <img src={".." + prefix + "/img/Wolf2.png"} alt=""/>
                        <span className="o_letter">O</span>
                        <span className="m_letter">m</span>
                    </div> */}
                    <span>S.Sri.</span>
                </div>
                <div className={(this.state.isToggleOn ? "is-open " : " ") + "main_buttons"}>
                    <MyLink to={"/"} className="fas fa-home">  home </MyLink>
                    <MyLink to={"/about"} className="fas fa-user"> about </MyLink>
                    <MyLink to={"/education"} className="fas fa-book-open"> education </MyLink>
                    <MyLink to={"/skills"} className="fas fa-cog"> skills </MyLink>
                    <MyLink to={"/works"} className="fas fa-briefcase"> Works </MyLink>
                    {/* <Link to={"/works"}> <i className="fas fa-eye"/> works</Link> */}
                    {/* <MyLink to={"/contact"} className="far fa-envelope"> contact </MyLink> */}
                </div>
                <div className={(this.state.isToggleOn ? "is-open " : " ") + "social_buttons"}>
                    <a href="https://github.com/sanskarsri" target='_blank'><i
                        className="fab fa-github"/></a>
                    <a href="https://www.instagram.com/its.sanskar.sri/" target='_blank'><i
                        className="fab fa-instagram"/></a>
                    <a href="https://wa.me/9140862568" target='_blank'><i
                        className="fab fa-whatsapp"/></a>
                </div>
                <div className="burger_menu">
                    <button className={(this.state.isToggleOn ? "is-open " : " ") + "menu-icon"}
                            onClick={this.handleClick}><span/></button>
                </div>
            </header>
        );
    }
}

export default Header
