import React, { Component } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

export default class Project1 extends Component {
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
							<p className='project-title'>
								Warehouse Inventory Automation Project
							</p>
							<p className='text-muted project-title2'>
								CprE-492: Senior Design Project
							</p>
						</Fade>
					</div>

					<div className='about-text p-3'>
						<Fade>
							<p className='pt-5'>
								Warehousing contributes up to 30% of the cost of logistics in
								most developed economies. Billions of dollars of capital are
								locked up at a time, in high-volume-high-value inventory. Since
								the rise of the internet, eCommerce has exponentially increased
								in consumer demand, and efforts need to be made to keep up with
								this demand. Traditional warehouse workers are falling short and
								need technological integration to keep track of the high volume
								of inventory moving in and out of the warehouse.
							</p>
							<p>
								As a team leader, I am working with the rest of my team to
								design and build a warehouse inventory tracking solution using
								aerial drone technology. Our solution involves autonomous aerial
								drones scanning QR codes of pallet boxes. Each drone will be
								responsible for sending the scanned data for each box to a web
								server. Warehouse employees will operate this web server for
								inventory management.
							</p>
							<p>
								The COVID-19 pandemic prevented working in person, so the team
								decided to simulate our solution instead. An open-source
								software, Webots, is being used to construct a warehouse
								environment. This warehouse will contain a docking station where
								the shipment would arrive. Conver belts are places in each aisle
								to drop goods in the right place. Drones fly from their docking
								station to the newly stocked inventory to scan them. Each drone
								sends information to the web server as HTTP requests. The web
								server validates this data and saves it into the database. A
								frontend application operates alongside the webserver to show
								the data in the database to the warehouse employees. The
								frontend has features like search products by weight, name,
								location, etc. Advanced features include product analytics and a
								live map of the warehouse.
							</p>
							<p>
								As a team leader, I was involved with both the simulation and
								web app development. My responsibilities included tracking
								project progress with a Gantt chart, assigning tasks in a Kanban
								board, reviewing and approving merge requests in GitLab, and
								ensuring all deadlines are met.
							</p>
							<p>
								Click{' '}
								<span role='img' aria-label=''>
									👉🏼
								</span>
								&nbsp;
								<a
									className='links1'
									href='https://sddec20-10.sd.ece.iastate.edu/'
									target='_blank'
									rel='noopener noreferrer'
								>
									<i>Project Website</i>
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
