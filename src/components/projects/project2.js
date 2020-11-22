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
							<p className='project-title'>Anonymous Discussion Post`</p>
							<p className='text-muted project-title2'>
								CS309: Software Development
							</p>
						</Fade>
					</div>

					<div className='about-text p-3'>
						<Fade>
							<p className='pt-5'>
								This project is a part of the CS309 class at Iowa State
								University. For this project, my team and I developed an
								anonymous discussion post for discussing controversial topics. I
								worked on the backend section of the web app written in a Java
								framework called SpringBoot. In contrast, other team members
								worked on the frontend, which was an Android application written
								in Java.
							</p>
							<p>
								This project was a good learning experience for me since it
								taught me the fundamentals of backend development. After the
								project, I was comfortable enough to stand up a web server on my
								own.
							</p>
							<p>
								Click{' '}
								<span role='img' aria-label=''>
									👉🏼
								</span>
								&nbsp;
								<a
									className='links1'
									href='https://github.com/Hr24612/AnonymousDiscussionPost'
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
