import React, { Component } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import logo from '../logo/ieee.png';

export default class IEEE extends Component {
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
								<img src={logo} alt='' className='ieee-logo' />
							</div>
							<p className='pt-5'>
								The Institute of Electrical and Electronics Engineers (IEEE) is
								a student-run club for the Electrical and Computer Engineering
								department at Iowa State University. As the President, my team
								and I did several activities to help the students with their
								careers. We arranged recruiting seminars for more than 20
								companies in a semester. This was an excellent opportunity for
								students to connect with recruiters and gain insight into their
								culture and hiring process. These seminars were the club's most
								significant selling point, and we ended up having more than{' '}
								<span style={{ color: '#00de16' }}>400</span> members at one
								point. We also funded student projects to help them learn
								practical knowledge without them worrying about finances. In
								addition to that, I also served on the Student Advisory
								Committee, which the Department Chair led. This committee's goal
								was to share students' concerns and discuss ways to help better
								the undergraduate program.
							</p>
							<p>
								I had a great time leading this club. I met some amazing people
								with whom I became really good friends. I not only got a chance
								to better my leadership skills but also give back to my
								department.
							</p>
						</Fade>
					</div>
				</div>
			</div>
		);
	}
}
