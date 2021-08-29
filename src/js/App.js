import React from 'react';
import {Redirect, Route, Switch} from "react-router";
import {About, Contact, Header, Home, Skills, NotFound} from '../js/components';

import prefix from "./components/Config";
import Education from './components/Education';
import Works from './components/Works';

let App = () => (
	<div>
		{/* <Header/> */}
		{/*<Redirect from={""} to={prefix + ""}/>*/}
		{/*<Route path={prefix}>*/}
			<Switch>
				<Redirect from={prefix + "/index.html"} to={prefix + "/"}/>
				<Route exact path={prefix + "/"} component={Home}/>
				<Route exact path={prefix + "/about"} component={About}/>
				<Route exact path={prefix + "/education"} component={Education}/>
				<Route exact path={prefix + "/skills"} component={Skills}/>
				<Route path={prefix + "/works"} component={Works}/>
				<Route exact path={prefix + "/contact"} component={Contact}/>
				<Route path="*" component={NotFound}/>
			</Switch>
		{/*</Route>*/}
	</div>
)

export default App;
