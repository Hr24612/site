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
import Ifye from './components/work-experience/ifye';
import Csm from './components/leadership/csm';
import Dis from './components/leadership/dis';
import Ieee from './components/leadership/ieee';
import Outreach from './components/leadership/outreach';
import Project1 from './components/projects/project1';
import Project2 from './components/projects/project2';
import Project3 from './components/projects/project3';
import Project4 from './components/projects/project4';
import NotFound from './components/NotFound';
function App() {
	return (
		<Fragment>
			<Router>
				<Switch>
					<Route exact path='/' component={LandingPage} />
					<Route exact path='/leadership' component={Leadership} />
					<Route exact path='/leadership/csm' component={Csm} />
					<Route exact path='/leadership/dis' component={Dis} />
					<Route exact path='/leadership/ieee' component={Ieee} />
					<Route exact path='/leadership/outreach' component={Outreach} />

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
					<Route exact path='/workexperience/ifye' component={Ifye} />
					<Route exact path='/projects' component={Projects} />
					<Route exact path='/projects/project1' component={Project1} />
					<Route exact path='/projects/project2' component={Project2} />
					<Route exact path='/projects/project3' component={Project3} />
					<Route exact path='/projects/project4' component={Project4} />
					<Route exact path='/documents' component={Documents} />
					<Route exact path='/skills' component={Skills} />
					<Route exact path='/about' component={AboutMe} />
					<Route component={NotFound} />
				</Switch>
			</Router>
		</Fragment>
	);
}

export default App;
