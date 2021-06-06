import React, { Component } from 'react';
import '../App.css';
import Fade from 'react-reveal/Fade';

import NavBar from './Navbar';
export default class About extends Component {
	render() {
		return (
			<div className='About'>
				<NavBar />
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

					<div class='about-text p-3'>
						<Fade>
							<p>
								I am a Cyber Security Analyst{' '}
								<span role='img' aria-label=''>
									🔒
								</span>{' '}
								at{' '}
								<a
									href='https://nelnetinc.com/'
									target='_blank'
									rel='noopener noreferrer'
									className='links'
								>
									<i>Nelnet Inc.</i>
								</a>
								, where I am involved in application security and DevSecOps. I
								graduated from Iowa State University with a Bachelor's in
								Computer Engineering in Spring 2021.
							</p>
							<p>
								My passions include work, relationships, and travel. Work gives
								meaning to my life and keeps me going through the day.
								Relationships motivate me to work harder and do a little better
								every time. Travel gives me a different perspective as it
								challenges my beliefs and makes me appreciate people and our
								world even more.
							</p>
							<br />
							<p>
								<span role='img' aria-label=''>
									👇🏼
								</span>{' '}
								If you would like to connect with me, please follow the links
								below.
							</p>
							<div id='socialMedia' className='text-center  pt-3'>
								<div className='row text-center'>
									<form
										action='https://www.linkedin.com/in/amir-hamza96/'
										target='_blank'
									>
										<button className='btn fab fa-linkedin'></button>
									</form>
									<form action='https://github.com/Hr24612' target='_blank'>
										<button className='btn fab fa-github' id='github2'></button>
									</form>
									<form action='mailto:amir.col6@gmail.com' target='_blank'>
										<button className='btn fas fa-envelope'></button>
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
