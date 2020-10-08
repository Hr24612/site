import React from 'react';
import '../App.css';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

export const Skills = () => {
	return (
		<div className='Skills '>
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
			<div className=' container'>
				<Fade>
					<div className='skills text-center'>
						<p className='skill-title'>
							<span role='img' aria-label=''>
								🤹🏼‍♂️
							</span>{' '}
							Skills
						</p>
					</div>
				</Fade>

				<Fade>
					<div className='card-deck'>
						<div className='row'>
							<div class='card-container col-sm-12 col-md-6 col-lg-3'>
								<div class='card-flip'>
									<div class='front card text-center'>
										<div className='card-body'>
											<i className='fas fa-laptop-code'></i>
											<h6 className='card-title title2' id='heading1'>
												Frontend Development
											</h6>
										</div>
									</div>
									<div class='back card'>
										<ul className='mt-4'>
											<li>
												Web Frameworks: React.js, Angular.js, and Bootstrap,
											</li>
											<li>Mobile Framework: Android SDK</li>
											<li>Language: JavaScript, TypeScript, Java & Kotlin</li>
										</ul>
									</div>
								</div>
							</div>
							<div class='card-container col-sm-12 col-md-6 col-lg-3'>
								<div class='card-flip'>
									<div class='front card text-center'>
										<div className='card-body'>
											<i class='fas fa-server'></i>
											<h6 className='card-title title2' id='heading1'>
												Backend Development
											</h6>
										</div>
									</div>
									<div class='back card'>
										<ul className='mt-4'>
											<li>Frameworks: Node.js, .NET, and Spring Boot</li>
											<li>Languages: JavaScript, C#, and Java</li>
											<li>Clouds: AWS, Azure, and Netlify</li>
											<li>Certification: AWS Developer Associate</li>
										</ul>
									</div>
								</div>
							</div>
							<div class='card-container col-sm-12 col-md-6 col-lg-3'>
								<div class='card-flip'>
									<div class='front card text-center'>
										<div className='card-body'>
											<i class='fas fa-link'></i>
											<h6 className='card-title title2' id='heading1'>
												Blockchain Development
											</h6>
										</div>
									</div>
									<div class='back card'>
										<ul className='mt-4'>
											<li>Blockchain: Ethereum</li>
											<li>Language: Solidity</li>
											<li>
												Certification: Udacity Blockchain Developer Nano Degree
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div class='card-container col-sm-12 col-md-6 col-lg-3'>
								<div class='card-flip'>
									<div class='front card text-center'>
										<div className='card-body'>
											<i class='fas fa-user-shield'></i>

											<h6 className='card-title title2' id='heading1'>
												Application Security
											</h6>
										</div>
									</div>
									<div class='back card'>
										<ul className='mt-4'>
											<li>
												Tools: Burp Suite, OWASP Zap, Netcat, NMAP, and
												Metasploit
											</li>
											<li>Certification: CompTIA Security+</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Fade>
			</div>
		</div>
	);
};
export default Skills;
