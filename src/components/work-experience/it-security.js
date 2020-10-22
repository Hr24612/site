import React, { Component } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import logo from '../logo/it.png';
import tools from '../logo/burp.png';

export default class ItSecurity extends Component {
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
								As a security analyst for my University, I was responsible for
								performing penetration testing of websites managed by different
								departments. The goal for my position was to expose security
								vulnerabilities in websites before cyber attackers exploit them.
								I used Burp Suite, a web vulnerability scanner, to find
								vulnerabilities like{' '}
								<span role='img' aria-label=''>
									💉
								</span>
								SQL injection, remote code execution, and cross-site scripting.
								During my ten months in this role, I was able to scan more than{' '}
								<span style={{ color: '#00de16' }}>300</span> websites and
								addressed critical findings in my scan reports. In addition to
								web penetration testing, I was responsible for providing code
								reviews and best practices for developers to help write secure
								code.
							</p>
							<p>
								While performing penetration testing, I was also responsible for
								building and maintaining a database of all the University's
								website domains. This database was then used to perform
								automated scans through Burp Suite every quarter of the year.
							</p>
							<p>
								This position was my entry into the field of application
								security. It taught me the core concepts of web security and
								showed me how easy it is to break into a web application.
							</p>

							<div className='text-center mt-5 mb-2'>
								<p className=''>Technologies used</p>
								<img src={tools} alt='' className='it-tools' />
							</div>
						</Fade>
					</div>
				</div>
			</div>
		);
	}
}
