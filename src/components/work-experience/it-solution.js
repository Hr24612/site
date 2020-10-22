import React, { Component } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import logo from '../logo/it.png';

export default class ITSolution extends Component {
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
								<img src={logo} alt='' className='it-logo' />
							</div>
							<p className='pt-5'>
								As a Solution Technician, I was responsible for providing tech
								support to <span style={{ color: '#00de16' }}>36,000</span>{' '}
								students, faculty, and staff at Iowa State University. I became
								a subject matter expert (SME) for the following platforms:
								Qualtrics, Zoom, Adobe, Box, VMware Horizon, Splunk, Canvas,
								Okta, and Confluence. I was the person in charge of providing
								support to customers in the areas I was an SME in. After eight
								months into this role, I was promoted to the team lead position.
								As a team lead, I was responsible for overseeing{' '}
								<span style={{ color: '#00de16' }}>60</span> IT Solution
								Technicians and providing new hires training. This was my first
								technical job and my start in the field of information
								technology.
							</p>
						</Fade>
					</div>
				</div>
			</div>
		);
	}
}
