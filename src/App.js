import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Leadership from './components/Leadership';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Documents from './components/Documents';
import Skills from './components/Skills';
import AboutMe from './components/AboutMe';
import Manatts from './components/work-experience/manatts';
import Nelnet from './components/work-experience/nelnet';
import itSecurity from './components/work-experience/it-security';
import Spreetail from './components/work-experience/spreetail';
import itSolution from './components/work-experience/it-solution';
import IFYE from './components/work-experience/ifye';
function App() {
	return (
		<Fragment>
			<Router>
				<Switch>
					<Route exact path='/' component={LandingPage} />
					<Route exact path='/leadership' component={Leadership} />
					<Route exact path='/workexperience' component={WorkExperience} />
					<Route exact path='/workexperience/manatts' component={Manatts} />
					<Route exact path='/workexperience/nelnet' component={Nelnet} />
					<Route
						exact
						path='/workexperience/it-security'
						component={itSecurity}
					/>
					<Route exact path='/workexperience/spreetail' component={Spreetail} />
					<Route
						exact
						path='/workexperience/it-solution'
						component={itSolution}
					/>
					<Route exact path='/workexperience/ifye' component={IFYE} />
					<Route exact path='/projects' component={Projects} />
					<Route exact path='/documents' component={Documents} />
					<Route exact path='/skills' component={Skills} />
					<Route exact path='/about' component={AboutMe} />
				</Switch>
			</Router>
		</Fragment>
	);
}

export default App;
