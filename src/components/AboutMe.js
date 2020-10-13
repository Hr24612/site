import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import flag from './logo/pak.png';
export default class About extends Component {
	render() {
		return (
			<div className='About'>
				<div className='nav'>
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
									<Link NavLink to='/workExperience'>
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
					<div className='workexperience row justify-content-center'>
						<Fade>
							<p className='work-title'>
								<span role='img' aria-label=''>
									😀
								</span>{' '}
								About
							</p>
						</Fade>
					</div>

					<div class=' p-3'>
						<Fade>
							<p>
								My name is Amir, and I am an international student from Pakistan{' '}
								<img src={flag} alt='' />. I am currently studying computer
								engineering at Iowa State University, and I plan to graduate
								<span role='img' aria-label=''>
									🎓
								</span>
								in May 2021. My passions include work, relationships, and
								travel. Work gives meaning to my life and keeps me going through
								the day. Relationships motivate me to work harder and do a
								little better every time. Travel gives me perspective as it
								challenges my beliefs and makes me appreciate people and our
								world even more.
							</p>
							<p>
								Work is a big part of my life, and I am very excited to begin my
								career soon. I can't wait to put my knowledge from my
								experiences to the real world. Impact matters to me the most,
								and that's what I am looking for in a new role. I am open to
								Full Stack and Application Security positions starting
								post-graduation.
							</p>
							<p>
								<span role='img' aria-label=''>
									👇🏼
								</span>{' '}
								If you would like to connect, please follow the links below.
							</p>
							<div id='socialMedia' className='text-center  pt-5'>
								<div className='row text-center'>
									<form
										action='https://www.linkedin.com/in/amir-hamza96/'
										target='_blank'
									>
										<button class='btn fab fa-linkedin'></button>
									</form>
									<form action='https://github.com/Hr24612' target='_blank'>
										<button class='btn fab fa-github' id='github2'></button>
									</form>
									<form action='mailto:amir.col6@gmail.com' target='_blank'>
										<button class='btn fas fa-envelope'></button>
									</form>
								</div>
							</div>
						</Fade>
					</div>
				</div>
			</div>
		);
	}
}
