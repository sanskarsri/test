import React, {Component} from 'react';
import '../../css/works.css';
import PreloaderElement from '../containers/PreloaderElement';
import TextSplit from '../containers/TextAnimation';
import Header from './Header';
import WorkCard from './WorkCard';
import first, {second,third} from "../Data";


class Works extends Component {
	
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
			<div className="works_content">
                <span className="tags">&nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
                <div className="works_head">
                <span className="tags">&nbsp;&nbsp;&nbsp;&lt;h1&gt;</span>
                <TextSplit className="text_h1">Some of my Works</TextSplit>
                <span className="tags">&nbsp;&nbsp;&nbsp;&lt;h1/&gt;</span>
                </div>
            
                <div className="mt-5 row adjust">
                    <div className="col-12 col-md-6 col-lg-4 p-3">
                        {first.map((card) => <WorkCard 
                        name={card.name}
                        desc={card.desc}
                        link={card.link} 
                        btn={card.btn} 
                        img={card.img} 
                        />)}
                </div>
                <div className="col-12 col-md-6 col-lg-4 p-3">
                        {second.map((card) => <WorkCard 
                        name={card.name}
                        desc={card.desc}
                        link={card.link} 
                        btn={card.btn} 
                        img={card.img} 
                        />)}
                </div>
                <div className="col-12 col-md-6 col-lg-4 p-3">
                        {third.map((card) => <WorkCard 
                        name={card.name}
                        desc={card.desc}
                        link={card.link} 
                        btn={card.btn} 
                        img={card.img} 
                        />)}
                </div>
                </div>
			<span className="tags">&nbsp;&nbsp;&nbsp;&lt;body/&gt; <br/> &lt;html/&gt;</span>
		</div>
        </>
        )
    }


}

export default Works;