import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Leadership from './components/Leadership';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Documents from './components/Documents';
import Skills from './components/Skills';
import AboutMe from './components/AboutMe';
function App() {
	return (
		<Fragment>
			<Router>
				<Switch>
					<Route exact path='/' component={LandingPage} />
					<Route exact path='/Leadership' component={Leadership} />
					<Route exact path='/WorkExperience' component={WorkExperience} />
					<Route exact path='/Projects' component={Projects} />
					<Route exact path='/Documents' component={Documents} />
					<Route exact path='/Skills' component={Skills} />
					<Route exact path='/AboutMe' component={AboutMe} />
				</Switch>
			</Router>
		</Fragment>
	);
}

export default App;
