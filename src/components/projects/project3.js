import React, { Component } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

export default class Project3 extends Component {
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
					<div className='project text-center'>
						<Fade>
							<p className='project-title'>IoT Price Tag</p>
							<p className='text-muted project-title2'>
								CprE490: Independent Study
							</p>
						</Fade>
					</div>

					<div className='about-text p-3'>
						<Fade>
							<p className='pt-5'>
								I worked under Professor Akhilesh Tyagi to develop a low powered
								price tag that uses E-Ink LCD to display prices. E-Ink displays
								contain charged particles that rearrange themselves to mimic the
								shape of the image provided to the display. Positive particles
								are white and negative particles are black. After the
								rearrangement is done, the image displayed is in black and white
								color. This display's special aspect is that these charged
								particles don't emit light, so they don't consume energy when
								they are not being updated. In a realistic supermarket
								environment, prices are not changed multiple times a day. If the
								display is updated once a week, the price tag can last up to
								four years on a 2000 mAh battery. This LCD is updated via HTTP
								requests from a web app that takes an image, converts it into a
								bitmap image, resizes it to the LCD's size, and sends the
								image's byte array via an HTTP request to the price tag.
							</p>
							<p>
								This was my first research project while working under a
								professor. The amount of research was quite extensive because
								not many example projects were available online. The web app
								development made the project more lengthy, but by the end of the
								semester, I finished everything.
							</p>
							<p>
								Click{' '}
								<span role='img' aria-label=''>
									👉🏼
								</span>
								&nbsp;
								<a
									className='links1'
									href='https://en.wikipedia.org/wiki/Electronic_paper'
									target='_blank'
									rel='noopener noreferrer'
								>
									<i>Project Repository</i>
								</a>
								&nbsp;&nbsp; for more details on this project
							</p>
						</Fade>
					</div>
				</div>
			</div>
		);
	}
}
