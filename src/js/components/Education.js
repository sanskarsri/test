import React, {Component} from 'react';
import '../../css/education.css';
import PreloaderElement from '../containers/PreloaderElement';
import TextSplit from '../containers/TextAnimation';
import Header from './Header';

class Education extends Component {
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
            <div className="education_content">
                <span className="tags">&nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
                <div className="education_main">
                    <div className="left_side">
                        <span className="tag_h1">&lt;h1&gt;</span> <br/>
                        <TextSplit className="text_h1">EDUCATION</TextSplit>
                        <br />
                        <span className="tag_h1">&lt;h1/&gt;</span> <br/>

                        <span className="tag_h1">&lt;align-items:left&gt;</span> <br/>
                            <TextSplit splitBy="words" className="text-neon">Madan Mohan Malaviya University of Technology </TextSplit>
                            <p className='left_side_text mb-3'>
                            &nbsp; <span className="highlight">Graduation </span>&#9655; May 2023 &#9655; Gorakhpur.
                            <br/>&nbsp; B.Tech. in Computer Science & Engineering with aggregate CGPA of 7.5 
                            </p>
                            <TextSplit splitBy="words" className="text-neon">Rani Laxmi Bai Memorial School. </TextSplit>
                            <p className='left_side_text mb-3'>
                            &nbsp; <span className="highlight">Intermediate </span>&#9655; March 2019 &#9655; sec-14 Indira Nagar, Lucknow.
                            <br/>&nbsp; With an aggregate percentage of 95% .
                            </p>
                            <TextSplit splitBy="words" className="text-neon">Rani Laxmi Bai Memorial School. </TextSplit>
                            <p className='left_side_text mb-3'>
                            &nbsp; <span className="highlight">Secondary school </span>&#9655; March 2017 &#9655; sec-14 Indira Nagar, Lucknow.
                            <br/>&nbsp; With an aggregate CGPA of 10 .
                            </p>
                        <span className="tag_h1">&lt;align-items:left/&gt;</span> <br/>
                    </div>
                    <div className="right_side">
                        <span className="tag_h1 hidd">&lt;h1&gt;</span> <br/>
                        <TextSplit className="text_h1">ROLES OF</TextSplit><TextSplit className="text_h1">    RESPONSIBILTY</TextSplit>
                        <span className="tag_h1 hidd">&lt;h1/&gt;</span> <br />

                        <span className="tag_h1 hidd">&lt;align-items:left/&gt;</span>
                        
                        <TextSplit splitBy="words" className="text-neon">IEEE - Student Branch MMMUT</TextSplit>
                            <p className='right_side_text mb-3'> &nbsp; <span className="highlight">Executive Member </span>&#9655; April 2020 &#9655; Present.</p>
                            <TextSplit splitBy="words" className="text-neon">Robotics Club, MMMUT</TextSplit>
                            <p className='right_side_text mb-3'> &nbsp; <span className="highlight">Web Development Lead </span>&#9655; May 2020 &#9655; Present.</p>
                            <TextSplit splitBy="words" className="text-neon">Developers Student Club, MMMUT</TextSplit>
                            <p className='right_side_text mb-3'> &nbsp; <span className="highlight">Executive Member </span>&#9655; August 2020 &#9655; August 2021.</p>
                            <TextSplit splitBy="words" className="text-neon">ROBOMANIA'21</TextSplit>
                            <p className='right_side_text mb-3'> &nbsp; <span className="highlight">Online </span>&#9655; July 2021 &#9655; Conducted the annual robotics fest of MMMUT, Gorakhpur.</p>
                        
                        <span className="tag_h1 hidd">&lt;align-items:left/&gt;</span> <br/>
                    </div>
                </div>
                <span className="tags">&nbsp;&nbsp;&nbsp;&lt;/body&gt; <br/> &lt;/html&gt;</span>
            </div>
            </>
        )
    }
}

export default Education;
