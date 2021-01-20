import React, { Component } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import logo from '../logo/manatts.png';
import tools from '../logo/collage.png';

export default class Manatts extends Component {
	render() {
		return (
			<div className='About'>
				<div className='nav'>
					<nav className='navbar navbar-expand-lg  navbar1 navbar-dark'>
						<button
							className='navbar-toggler mt-2'
							type='button'
							data-toggle='collapse'
							data-target='#navbarNav'
							aria-controls='navbarNav'
							aria-expanded='false'
							aria-label='Toggle navigation'
						>
							<span className='navbar-toggler-icon'></span>
						</button>
						<div className='collapse navbar-collapse pt-3' id='navbarNav'>
							<ul className='navbar-nav'>
								<div className='nav-item '>
									<Link NavLink to='/'>
										<button className='btn x'>Home</button>
									</Link>
								</div>
								<div className='nav-item'>
									<Link NavLink to='/about'>
										<button className='btn x'>About</button>
									</Link>
								</div>
								<div className='nav-item'>
									<Link NavLink to='/skills'>
										<button className='btn x'>Skills</button>
									</Link>
								</div>
								<div className='nav-item'>
									<Link NavLink to='/workexperience'>
										<button className='btn x'>Work Experience</button>
									</Link>
								</div>
								<div className='nav-item'>
									<Link NavLink to='/leadership'>
										<button className='btn x'>Leadership</button>
									</Link>
								</div>
								<div className='nav-item'>
									<Link NavLink to='/projects'>
										<button className='btn x'>Projects</button>
									</Link>
								</div>
								<div className='nav-item'>
									<Link NavLink to='/documents'>
										<button className='btn x'>Documents</button>
									</Link>
								</div>
							</ul>
						</div>
					</nav>
				</div>
				<div className='container'>
					<div className='about-text p-3'>
						<Fade>
							<div className='text-center pt-5'>
								<img src={logo} alt='' className='manatts-logo' />
							</div>
							<p className='pt-5'>
								Manatt's, Inc. is a construction company based in{' '}
								<span role='img' aria-label=''>
									📍
								</span>
								Brooklyn, Iowa. As a software developer, I helped build the
								company's internal financial tool in Angular.js and .NET. This
								tool is a time tracking app used by thousands of Manatt's hourly
								construction employees and their managers to clock in time and
								generate pay stubs. Despite many time tracking apps available
								online, the company chose to develop its own because of its
								business operations. Contractors are frequently hired and laid
								off every season, so an app that seamlessly integrates with the
								Microsoft active directory would ease this process. The app is
								being used on tablets in remote areas where internet bandwidth
								can cause issues; hence, the app has to be robust and modular.
								Moreover, since the construction crew is always on the move, the
								app needs to have a straightforward user interface while the
								backend should handle most of the logic. My daily routine at
								Manatt's includes implementing new features, fixing existing
								bugs, performing code reviews, and participating in weekly
								sprints. Thus far, I've accomplished certain important
								milestones at my internship that I would like to shed light on.
							</p>
							<p>
								Due to stringent deadlines, the frontend was originally made to
								deliver the product as quickly as possible without keeping in
								mind the performance aspect. When the application was released
								to the employees, they encountered delays in load time and lag
								while navigating through the app. I was delegated the task to
								perform a fix for this issue. First, I implemented lazy loading
								for all components in the Angular app. By doing so, the app only
								rendered components after a click event. Second, Angular
								utilizes Zone.js to monkey-patch each asynchronous event, so
								Angular runs change detection over its component tree whenever
								any event occurs. I implemented the OnPush change detection
								strategy, which disables change detection to be run on a
								component and its children, so changes will only occur if the
								components detect user input. I also implemented pure pipes in
								for loops in HTML to only detect changes when the array is
								modified. Lastly, I implemented a cache service for a few HTTP
								GET requests that occurred multiple times on change detection.
								After these changes, the site saw a{' '}
								<span style={{ color: '#00de16' }}>60%</span> reduction in load
								times.
							</p>
							<p>
								I also worked on implementing behavioral-driven tests, called{' '}
								<a href='https://www.cypress.io/'> Cypress</a>, on our Angular
								app and CI provider. This enabled us to include the scenarios
								created by our product owner into the tests hence, making our
								team more inclusive and collaborative.
							</p>
							<p>
								For the last three weeks of my internship, I helped integrate an
								IoT application on Balena Cloud, a container-based platform for
								deploying IoT applications. This removed the need to update code
								for every single IoT device manually.
							</p>
							<div className='text-center mt-5 mb-2'>
								<p className=''>Technologies used</p>
								<img src={tools} alt='' className='manatts-tools' />
							</div>
						</Fade>
					</div>
				</div>
			</div>
		);
	}
}
