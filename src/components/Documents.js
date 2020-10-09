import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import '../App.css';
import Recommendation1 from './documents/recommendation1.pdf';
import Recommendation2 from './documents/recommendation2.pdf';
import Recommendation3 from './documents/recommendation3.pdf';
import Recommendation4 from './documents/recommendation4.pdf';
import software from './documents/SoftwareResume2020.pdf';
import security from './documents/SecurityResume2020.pdf';

export const Documents = () => {
	return (
		<div className='Documents'>
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
			<div className='container text-center'>
				<div className='documents row justify-content-center'>
					<Fade>
						<p className='document-title'>
							<span role='img' aria-label=''>
								📋
							</span>{' '}
							Documents
						</p>
					</Fade>
				</div>
				<div className='content'>
					<div className='row justify-content-center'>
						<Fade>
							<div className='col-sm-2 col-md-2 col-lg-2 mb-3 mt-5'>
								<a
									href={software}
									target='_blank'
									rel='noopener noreferrer'
									style={{ color: 'inherit' }}
								>
									<span role='img' aria-label='' className='file'>
										{' '}
										📄
									</span>
								</a>

								<p className='mt-3'>Software Resume</p>
							</div>
							<div class='col-sm-auto'></div>
							<div className='col-sm-2 col-md-2 col-lg-2 mb-3 mt-5'>
								<a
									href={security}
									target='_blank'
									rel='noopener noreferrer'
									style={{ color: 'inherit' }}
								>
									<span role='img' aria-label='' className='file'>
										{' '}
										📄
									</span>
								</a>

								<p className='mt-3'>Security Resume</p>
							</div>
						</Fade>
					</div>

					<hr class='footer' />
					<div className='row '>
						<Fade>
							<div className='col-sm-3 col-md-3 col-lg-3 mb-3 mt-5'>
								<a
									href={Recommendation1}
									target='_blank'
									rel='noopener noreferrer'
									style={{ color: 'inherit' }}
								>
									<span role='img' aria-label='' className='file'>
										{' '}
										📄
									</span>
								</a>
								<p className='mt-3'>Recommendation 1</p>
							</div>
							<div class='col-sm-auto'></div>
							<div className='col-sm-3 col-md-3 col-lg-3 mb-3  mt-5'>
								<a
									href={Recommendation2}
									target='_blank'
									rel='noopener noreferrer'
									style={{ color: 'inherit' }}
								>
									<span role='img' aria-label='' className='file'>
										{' '}
										📄
									</span>
								</a>

								<p className='mt-3'>Recommendation 2</p>
							</div>
							<div className='col-sm-3 col-md-3 col-lg-3 mb-3  mt-5'>
								<a
									href={Recommendation3}
									target='_blank'
									rel='noopener noreferrer'
									style={{ color: 'inherit' }}
								>
									<span role='img' aria-label='' className='file'>
										{' '}
										📄
									</span>
								</a>
								<p className='mt-3'> Recommendation 3</p>
							</div>
							<div class='col-sm-auto'></div>
							<div className='col-sm-3 col-md-3 col-lg-3 mb-3 mt-5'>
								<a
									href={Recommendation4}
									target='_blank'
									rel='noopener noreferrer'
									style={{ color: 'inherit' }}
								>
									<span role='img' aria-label='' className='file'>
										{' '}
										📄
									</span>
								</a>

								<p className='mt-3'>Recommendation 4</p>
							</div>
						</Fade>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Documents;
