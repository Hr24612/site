import React from 'react';
import '../App.css';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';
const LandingPage = () => {
	return (
		<div>
			<div id='landing'>
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
			<div className='contianer text-center'>
				<div className='main-text'>
					<Fade>
						<div className='landing-title'>
							<p>
								Hi, I'm Amir Hamza{' '}
								<span className='wave' role='img' aria-label=''>
									👋🏼
								</span>
							</p>
						</div>
					</Fade>
					<div className='interests'>
						<div className='row justify-content-md-center'>
							<div className='col col-lg-2'>
								<Fade delay={1000}>
									<div>
										<h5 className='landing-title-2'>
											Full Stack Developer{' '}
											<span className='laptop' role='img' aria-label=''>
												👨🏻‍💻
											</span>
										</h5>
									</div>
								</Fade>
							</div>
							<div className='col-md-auto'>
								<Fade delay={2200}>
									<div>
										<h5 className='landing-title-2'>
											Application Security Enthusiast{' '}
											<span className='shield' role='img' aria-label=''>
												🛡️
											</span>
										</h5>
									</div>
								</Fade>
							</div>
							<div className='col col-lg-2'>
								<Fade delay={3200}>
									<div>
										<h5 className='landing-title-2'>
											Blockchain Advocate{' '}
											<span className='bitcoin' role='img' aria-label=''>
												🔗
											</span>
										</h5>
									</div>
								</Fade>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
