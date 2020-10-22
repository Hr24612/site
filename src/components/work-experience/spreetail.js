import React, { Component } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import logo from '../logo/spreetail.png';
import tools from '../logo/collage3.png';

export default class Spreetail extends Component {
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
								<img src={logo} alt='' className='spreetail-logo' />
							</div>
							<p className='pt-5'>
								The Spreetail internship was my first professional work
								experience off-campus. Spreetail is an E-Commerce company based
								in Lincoln, Nebraska. At Spreetail, I worked on the Android
								application used by Spreetail's fulfillment center workers to
								track inventory. My daily routine included performing bug fixes,
								implementing new features, and participating in bi-weekly
								sprints. During my internship, I worked on several projects that
								brought substantial value to the team.
							</p>
							<p>
								My first project was to remove reliance on third part
								dependencies used by the app's user interface(UI). This was a
								complete overhaul of the app since foreign dependencies were
								used all over the place. To accomplish this task, I had to work
								closely with UX Engineering to develop and integrate custom UI
								elements into the app. This not only brought performance
								enhancements but also made the app self-reliant. My second
								project was to help the team rewrite the android source code
								from Java to Kotlin. Kotlin is an interesting language based on
								java that brings exciting features like type and null safety and
								data classes that cut back on redundant code.
							</p>
							<p>
								My experience at Spreetail was an eye-opener for me. This
								internship showed how teams build and manage enterprise-level
								applications. I learned a lot about system design elements and
								understood the purpose of different layers to a full-stack app.
							</p>

							<div className='text-center mt-5 mb-2'>
								<p className=''>Technologies used</p>
								<img src={tools} alt='' className='spreetail-tools' />
							</div>
						</Fade>
					</div>
				</div>
			</div>
		);
	}
}
