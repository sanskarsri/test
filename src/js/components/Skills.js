import React, {Component} from 'react';
import PreloaderElement from '../containers/PreloaderElement';
import TextSplit from '../containers/TextAnimation';
import Sphere from '../containers/Sphere';
import prefix from "./Config";

import '../../css/skills.css';
import '../vendor/tagcanvas.min';
import './animate.css';
import Header from './Header';
import Bar from './Bar';
import { Icon } from '@iconify/react';

const skills = [
    "HTML5",
    "CSS3",
    "C++",
    "C",
    "npm",
    "ReactJS",
    "JavaScript",
    "Sass",
    "jQuery",
    "ES6",
    "JSON",
    "Git",
    "Bootstrap",
    "NodeJs",
    "Illustrator",
    "Photoshop",
    "PHP",
    "MongoDB",
    "SQL",
    "Data Structures",
    "Python",
    "ExpressJs"
];

class Skills extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
        };
    }

    componentDidMount() {
        setTimeout(() => this.setState({isLoading: false}), 1500);
        // var elements = document.querySelectorAll('.text_h1');
    }

    render() {

        if (this.state.isLoading) {
            return <PreloaderElement/>
        }
        return (
            <>
            <Header />
            <div className="skills_content">
                <span className="tags">&nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
                <div className="skills_main">
                    <div className="left_side">
                        <span className="tag_h1">&lt;h1&gt;</span> <br/>
                        <TextSplit className="text_h1">Skills </TextSplit>
                        <span className="tag_h1">&lt;h1/&gt;</span> <br/>
                        <TextSplit splitBy="words" className='left_side_text'>Main area of my expertise is
                            development and competitive programming.</TextSplit>
                        <TextSplit className='left_side_text' splitBy="words">I have various skills enlisted.</TextSplit>
                        <TextSplit className='left_side_text' splitBy="words">Would you like to know more?</TextSplit>
                        <div className="dropdown dropup">
                        <button className="btn btn-secondary dropdown-toggle bg-neon" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Details
                        </button>
                        <div className="dropdown-menu bg-dark" aria-labelledby="dropdownMenuButton">
                          <Bar skill="C++" range="75%"/>
                          <Bar skill="HTML5" range="90%"/>
                          <Bar skill="CSS3" range="85%"/>
                          <Bar skill="Photoshop" range="75%"/>
                          <Bar skill="Illustrator" range="70%"/>
                          <Bar skill="NodeJS" range="50%"/>
                          <Bar skill="ReactJS" range="60%"/>
                          <Bar skill="ExpressJS" range="65%"/>
                          <Bar skill="MongoDB" range="75%"/>
                          <Bar skill="Git" range="80%"/>
                        </div>
                      </div>
                      <TextSplit className="tag_h1 handles_text">Some of my Handles</TextSplit>
                      <div className="social_buttons_skill">
                    <a href="https://www.hackerrank.com/sanskar0703" target='_blank'>
                    <Icon className="hackerrank" icon="cib:hackerrank" />
                    </a>
                    <a href="https://codeforces.com/profile/sanskarsri" target='_blank'>
                    <Icon className="codeforces" icon="simple-icons:codeforces" />
                    </a>
                    <a href="https://www.codechef.com/users/ssri0703" target='_blank'>
                    <Icon className="codechef" icon="simple-icons:codechef" />
                    </a>
                    <a href="https://auth.geeksforgeeks.org/user/sanskar0703/practice/" target='_blank'>
                    <Icon className="gfg" icon="simple-icons:geeksforgeeks" />
                    </a>
                    <a href="https://leetcode.com/SSRI0703/" target='_blank'>
                    <Icon className="leetcode" icon="cib:leetcode" />    
                    </a>
                </div>

                    </div>
                    <div className="right_side">
                        <Sphere id={'mySkills'} width={550} height={500} items={skills}/>
                    </div>
                </div>
                <span className="tags">&nbsp;&nbsp;&nbsp;&lt;/body&gt; <br/> &lt;/html&gt;</span>
            </div>
            
            </>
        )
    }
}

export default Skills;
