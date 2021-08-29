import React, {Component} from 'react';
import '../../css/about.css';
import PreloaderElement from '../containers/PreloaderElement';
import TextSplit from '../containers/TextAnimation';
import Header from './Header';
// import pdf from "./Sanskar's_Resume.pdf";

class About extends Component {
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
            <div className="about_content">
                <span className="tags">&nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
                <div className="about_main">
                    <div className="left_side">
                        <span className="tag_h1">&lt;h1&gt;</span> <br/>
                        <TextSplit className="text_h1">ABOUT me</TextSplit>
                        <span className="tag_h1">&lt;h1/&gt;</span> 

                        <TextSplit className='left_side_text' splitBy="words">I am B.Tech CSE student. </TextSplit>
                        <TextSplit className='left_side_text' splitBy="words">I am a Competitive Programmer(Specialist @ CodeForces and 4&#9734; @ CodeChef)</TextSplit>
                        <span className="tag_h1">&lt;and&gt;</span>
                        <TextSplit className='left_side_text' splitBy="words">also a FullStack Developer. </TextSplit>
                        
                        <span className="tag_h1">&lt;align-items:left&gt;</span> 
                        <TextSplit className='left_side_text' splitBy="words">Loves to explore ways to upgrade my skills and learn something new and looks forward to do my best to prove my worth.</TextSplit>
                        <span className="tag_h1">&lt;align-items:left/&gt;</span> <br/>
                        <a href="Sanskar's_Resume.pdf" download><button class="btn btn-secondary bg-neon text-white"><i class="fas fa-download"></i> Download Resume</button></a>
                    </div>
                    <div className="right_side">
                        <span className="tag_h1 hidd">&lt;h1&gt;</span> <br/>
                        <TextSplit className="text_h1">CONTACT me</TextSplit>
                        <span className="tag_h1 hidd">&lt;h1/&gt;</span>

                        <TextSplit className='right_side_text' splitBy="words">Sanskar Srivastava</TextSplit>
                        <span className="tag_h1">&lt;details&gt;</span>
                        <TextSplit className='right_side_text' splitBy="words">Phone: +91-9140862568</TextSplit>
                        <TextSplit className='right_side_text' splitBy="words">Email: sanskar0703@gmail.com</TextSplit>
                        
                        <span className="tag_h1 hidd">&lt;h1/&gt;</span>
                        <TextSplit className='right_side_text' splitBy="words">I am available on social media mentioned below. I can help you with you doubts.</TextSplit>
                        <br/>
                        <span className="tag_h1 hidd">&lt;align-items:left/&gt;</span>
                        <a href="/contact"><button class="btn bg-neon text-white">Reach Out to Me</button></a>
                        <div className="social_buttons_contact">
                    <a href="https://github.com/sanskarsri" target='_blank'><i
                        className="fab fa-github"/></a>
                    <a href="https://www.instagram.com/its.sanskar.sri/" target='_blank'><i
                        className="fab fa-instagram"/></a>
                    <a href="https://wa.me/9140862568" target='_blank'><i
                        className="fab fa-whatsapp"/></a>
                    <a href="https://www.linkedin.com/in/sanskar-srivastava-0319b3194/" target='_blank'><i
                        className="fab fa-linkedin"/></a>
                    <a href="mailto:sanskar0703@gmail.com" target='_blank'><i
                        className="fa fa-envelope"/></a>
                    <a href="https://twitter.com/sanskar24873074" target='_blank'><i
                        className="fab fa-twitter"/></a>
                </div>
                    </div>
                </div>
                <span className="tags">&nbsp;&nbsp;&nbsp;&lt;/body&gt; <br/> &lt;/html&gt;</span>
            </div>
            </>
        )
    }
}

export default About;
