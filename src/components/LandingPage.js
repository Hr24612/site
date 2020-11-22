import React from 'react';
import '../App.css';
import { Fade } from 'react-reveal';
import NavBar from './Navbar';
const LandingPage = () => {
	return (
		<div id='landing'>
			<NavBar />
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
							<div className='col col-lg-3'>
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
							</div>
							<div className='col col-lg-3'>
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
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
