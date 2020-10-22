import React, { Component } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import logo from '../logo/nelnet.png';
import tools from '../logo/collage2.png';

export default class Nelnet extends Component {
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
								<img src={logo} alt='' className='nelnet-logo' />
							</div>
							<p className='pt-5'>
								Nelnet is a financial services provider specializing in private
								and federal student loans, insurance services, and commercial
								loans. I started my internship in the summer of 2020 as an
								Application Security Intern. My first project was to develop
								malware that can be used in phishing campaigns and target
								Nelnet's data centers. By doing so, my team will be able to find
								critical vulnerabilities before an attacker does. I develop a
								<span role='img' aria-label=''>
									🦠
								</span>
								malware in C# language that bypassed antivirus detection by
								running in memory. This malware contained a shellcode that
								established a meterpreter reverse shell to a Metasploit listener
								running on Kali Linux.
							</p>
							<p>
								My second project was to carry out web penetration testing for a
								company's internal financial tool. This financial tool was used
								to provide federal loan funds to students. I was able to find
								critical vulnerabilities by using a web vulnerability scanner
								called Burp Suite. After a successful engagement, I worked with
								the rest of my team to develop a report that explained the
								vulnerabilities found and stated the likelihood and impact for
								each. In addition to that, my team and I performed the quality
								and assurance of the codebase and contributed to DevSecOps
								initiatives by building and integrating unit tests to build
								pipelines.
							</p>

							<p>
								My internship experience at Nelnet has been second to none. I
								was surrounded by people who were extremely talented and great
								to work with. The malware development was, by far, the most
								exciting aspect of my internship. There was a fair amount of
								research involved, but I delivered the final product in the
								given time. This showed how easy it is to develop something that
								bypasses security controls and why security awareness is
								critical to keeping yourself safe.
							</p>
							<div className='text-center mt-5 mb-2'>
								<p className=''>Technologies used</p>
								<img src={tools} alt='' className='nelnet-tools' />
							</div>
						</Fade>
					</div>
				</div>
			</div>
		);
	}
}
