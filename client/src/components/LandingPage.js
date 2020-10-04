import React from 'react';
import '../App.css';
import { Fade, Zoom } from 'react-reveal';
import { Link } from 'react-router-dom';
import Skills from './Skills.js';
import shield from './logo/shield.png';
import laptop from './logo/laptop.png';
import bitcoin from './logo/bitcoin.png';
import wave from './logo/waving.png';
const LandingPage = () => {
	return (
		<div>
			<div id='landing'>
				<nav class='navbar navbar-expand-lg  navbar1 navbar-dark'>
					<button
						class='navbar-toggler mt-2'
						type='button'
						data-toggle='collapse'
						data-target='#navbarNav'
						aria-controls='navbarNav'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span class='navbar-toggler-icon'></span>
					</button>
					<div class='collapse navbar-collapse pt-3' id='navbarNav'>
						<ul class='navbar-nav'>
							<div className='nav-item '>
								<Link NavLink to='/'>
									<button className='btn x'>Home</button>
								</Link>
							</div>
							<div className='nav-item'>
								<Link NavLink to='/WorkExperience'>
									<button className='btn x'>Work Experience</button>
								</Link>
							</div>
							<div className='nav-item'>
								<Link NavLink to='/Leadership'>
									<button className='btn x'>Leadership</button>
								</Link>
							</div>
							<div className='nav-item'>
								<Link NavLink to='/Projects'>
									<button className='btn x'>Projects</button>
								</Link>
							</div>
							<div className='nav-item'>
								<Link NavLink to='/Documents'>
									<button className='btn x'>Documents</button>
								</Link>
							</div>
							<div className='nav-item'>
								<Link NavLink to='/Skills'>
									<button className='btn x'>Skills</button>
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
								<b>
									Hi, I'm Amir Hamza <img className='wave' src={wave}></img>
								</b>
							</p>
						</div>
					</Fade>
					<div className='interests'>
						<div className='row justify-content-md-center'>
							<div className='col col-lg-2'>
								<Fade delay={1000}>
									<div className='landing-title-2'>
										<p>
											Full Stack Developer{' '}
											<img className='laptop' src={laptop} />
										</p>
									</div>
								</Fade>
							</div>
							<div className='col-md-auto'>
								<Fade delay={2200}>
									<div className='landing-title-2'>
										<p>
											Application Security Enthusiast{' '}
											<img className='shield' src={shield} />
										</p>
									</div>
								</Fade>
							</div>
							<div className='col col-lg-2'>
								<Fade delay={3500}>
									<div className='landing-title-2'>
										<p>
											Blockchain Advocate{' '}
											<img className='bitcoin' src={bitcoin} />
										</p>
									</div>
								</Fade>
							</div>
						</div>
					</div>
				</div>

				{/* <div id='socialMedia' className='text-center'>
								<div className='row text-center'>
									<form
										action='https://www.linkedin.com/in/amir-hamza-324495126'
										target='_blank'
										className='col-4'
									>
										<button class='btn fab fa-linkedin'></button>
									</form>
									<form
										action='https://github.com/Hr24612'
										target='_blank'
										className='col-4'
									>
										<button class='btn fab fa-github'></button>
									</form>
									<form
										action='mailto:amir.col6@gmail.com'
										target='_blank'
										className='col-4'
									>
										<button class='btn fas fa-envelope'></button>
									</form>
								</div>
							</div> */}
				{/* <a href='#Skills' class='scroll-down' address='true'></a>
			<div id='Skills'></div> */}
			</div>
		</div>
	);
};

export default LandingPage;
