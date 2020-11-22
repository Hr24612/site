import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'react-vertical-timeline-component/style.min.css';

export default class NavBar extends Component {
	render() {
		return (
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
		);
	}
}
