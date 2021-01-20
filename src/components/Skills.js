import React from 'react';
import '../App.css';
import Fade from 'react-reveal/Fade';
import NavBar from './Navbar';
import UI from './logo/ui.png';
import Backend from './logo/backend.png';
import Security from './logo/security.png';

export const Skills = () => {
	return (
		<div className='Skills '>
			<NavBar />
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
							<div className='card-container col-sm-12 col-md-4 col-lg-4'>
								<div className='card-flip'>
									<div className='front card text-center'>
										<div className='card-body'>
											<img className='ui' src={UI} alt='' />
											<h6 className='card-title title2' id='heading1'>
												Frontend Development
											</h6>
										</div>
									</div>
									<div className='back card'>
										<ul className='mt-4'>
											<li>Language: JavaScript, TypeScript, Java & Kotlin</li>
											<li>
												Web Frameworks: React.js, Angular.js, and Bootstrap
											</li>
											<li>Mobile Framework: Android SDK</li>
										</ul>
									</div>
								</div>
							</div>
							<div className='card-container col-sm-12 col-md-4 col-lg-4'>
								<div className='card-flip'>
									<div className='front card text-center'>
										<div className='card-body'>
											<img src={Backend} alt='' className='backend' />
											<h6 className='card-title title2' id='heading1'>
												Backend Development
											</h6>
										</div>
									</div>
									<div className='back card'>
										<ul className='mt-4'>
											<li>Languages: JavaScript, C#, and Java</li>
											<li>Frameworks: Node.js, .NET, and Spring Boot</li>
											<li>Clouds: AWS, Azure, Heroku, Netlify and Balena</li>
										</ul>
									</div>
								</div>
							</div>
							<div className='card-container col-sm-12 col-md-4 col-lg-4'>
								<div className='card-flip'>
									<div className='front card text-center'>
										<div className='card-body'>
											<img src={Security} alt='' className='security' />
											<h6 className='card-title title2' id='heading1'>
												Application Security
											</h6>
										</div>
									</div>
									<div className='back card'>
										<ul className='mt-4'>
											<li>
												Tools: Burp Suite, OWASP Zap, Netcat, NMAP, and
												Metasploit
											</li>
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
