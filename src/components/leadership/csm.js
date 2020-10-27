import React, { Component } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import logo from '../logo/rmclogo.png';
import rmcScore from '../documents/RMC_FINAL_SCORE.pdf';

export default class CSM extends Component {
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
								<img src={logo} alt='' className='csm-logo' />
							</div>
							<p className='pt-5'>
								Cardinal Space Mining is a student-run club that builds a mining
								robot to compete at{' '}
								<span role='img' aria-label=''>
									🚀
								</span>
								<a
									href='https://www.nasa.gov/offices/education/centers/kennedy/technology/nasarmc.html'
									target='_blank'
									rel='noopener noreferrer'
									className='links'
								>
									NASA's annual Robotics Mining Competition
								</a>
								. The competition's goal is to enable Universities across the US
								to develop innovative mining ideas that can then be implemented
								on actual NASA rovers that will be sent to Moon, Mars, and
								beyond.
							</p>
							<p>
								When I took over as the President, I was immediately presented
								with several challenges. We incurred budget cuts from our
								sponsors, and my team ended up operating on 60% of the previous
								year's budget. We had to completely rethink our spending
								strategy to make it through the competition. Moreover, since
								2009, the team has managed to stay in the top 5 at the
								competition. Unfortunately, in 2018 we stood 8th, so I had
								enormous pressure to get the team back in the top 5. This meant
								making sure the technical people don't get bothered by financial
								or administrative issues, so they deliver an improved version of
								last year's robot. In addition to that, managing people of
								different personalities, making sure NASA's deadlines were met,
								and maintaining a positive work culture were just a few of my
								worries. I was also involved with the project, technically. My
								responsibility was to implement the autonomous navigation of the
								robot. My team and I implemented partial autonomy by using a
								variety of sensors. Infrared and sonar sensors were used to
								perform obstacle detection. Transceiver chips were mounted
								around the arena and robot to triangulate its location. A laser
								gimble was placed on top of the robot for orientation
								adjustment. Lastly, bump sensors were used to change direction
								in case of a collision.
							</p>
							<p>
								The team stood{' '}
								<span style={{ color: '#00de16' }}>4th out of 46</span> teams at
								the competition,and I was very pleased with our standing.
								Though we didn't win the competition, it was still a great
								improvement from the previous year and, overall, a good standing
								at the competition despite the challenges we faced at the start.
							</p>
							<p>
								For final scores click{' '}
								<span role='img' aria-label=''>
									👉🏼
								</span>{' '}
								<a
									href={rmcScore}
									target='_blank'
									rel='noopener noreferrer'
									className='links'
								>
									<i>Official Score</i>
								</a>
							</p>
						</Fade>
					</div>
				</div>
			</div>
		);
	}
}
