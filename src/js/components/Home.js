import React, {Component} from 'react';
import {Link} from "react-router-dom";
import '../../css/home.css';
import PreloaderElement from '../containers/PreloaderElement';
import TextSplit from '../containers/TextAnimation';

import prefix from "./Config";
import Header from './Header';


class Home extends Component {
    constructor() {
        super();
        this.state = {isLoading: true}
    }

    componentDidMount() {
        setTimeout(() => this.setState({isLoading: false}), 1500);
    }

    render() {
        if (this.state.isLoading) {
            return <PreloaderElement/>
        }
        return (
            <>
            <Header />
            <div className="home_content">
                <div className="left_side">
                    <span className="tags">&nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
                    <div className="home_main">
                        <span className="tag_h1">&lt;h1&gt;</span> <br/>
                        <TextSplit className="text_h1">Hi,</TextSplit>
                        <TextSplit className="text_h1 text-neon">I'm Sanskar Srivastava,</TextSplit>
                        {/* <TextSplit className="text_h1">web developer. </TextSplit> */}
                        <span className="tag_h1">&lt;h1/&gt;</span> <br/>
                        <h2 className="h2_greating">Engineering undergraduate / Competitive Coder / Web Developer</h2>
                        <Link to={prefix + "/about"} className="contact_btn">About me</Link>
                        
                    </div>
                    <span className="tags">&nbsp;&nbsp;&nbsp;&lt;/body&gt; <br/> &lt;/html&gt;</span>
                </div>
                <div className="right_side">
                    <img src={".." + prefix + "/img/Wolf2.png"} alt=""/>
                    <svg className="logo" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <text className="path" xmlSpace="preserve" textAnchor="middle"
                              y="195" x="370">Sanskar
                        </text>
                    </svg>
                    <svg className="logo_mirror" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <text className="path" xmlSpace="preserve" textAnchor="middle"
                              fontSize="250" y="200" x="350">Sanskar
                        </text>
                    </svg>
                </div>
            </div>
            </>
        )
    }

}

export default Home;
