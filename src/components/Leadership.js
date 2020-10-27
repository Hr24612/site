import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
export default class Leadership extends Component {
	constructor() {
		super();
		this.state = {
			left: '10px',
			margin: '20px',
			fontSize: '16px',
		};
	}
	updateDimensions() {
		if (window.innerWidth < 1168) {
			this.setState({ left: '10px' });
			this.setState({ margin: '12px' });
		} else {
			this.setState({ left: '-10px' });
			this.setState({ margin: '20px' });
		}
	}

	/**
	 * Add event listener
	 */
	componentDidMount() {
		this.updateDimensions();
		window.addEventListener('resize', this.updateDimensions.bind(this));
	}

	/**
	 * Remove event listener
	 */
	componentWillUnmount() {
		window.removeEventListener('resize', this.updateDimensions.bind(this));
	}

	render() {
		return (
			<div className='Leadership'>
				<div className='nav'>
					<nav className='navbar navbar-expand-lg navbar1 navbar-dark'>
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
					<div className='workexperience row justify-content-center'>
						<Fade>
							<p className='leadership-title'>
								<span role='img' aria-label=''>
									🙋🏻‍♂️
								</span>{' '}
								Leadership
							</p>
						</Fade>
					</div>

					<div className='row'>
						<VerticalTimeline>
							<VerticalTimelineElement
								className='vertical-timeline-element--work'
								contentStyle={{
									background: 'rgb(29, 89, 194)',
									color: '#fff',
								}}
								contentArrowStyle={{
									borderRight: '7px solid  rgb(29, 89, 194)',
								}}
								date="August'17 - May'19"
								iconStyle={{
									background: 'rgb(29, 89, 194)',
									color: '#fff',
									width: '20px',
									height: '20px',
									marginLeft: this.state.left,
									marginTop: this.state.margin,
								}}
							>
								<div className='SpaceMining'>
									<div>
										<h5 className='title'>
											President -{' '}
											<a
												href='https://www.stuorg.iastate.edu/spacemining'
												target='_blank'
												rel='noopener noreferrer'
												className='links2'
											>
												Cardinal Space Mining Club
											</a>
										</h5>
									</div>
									<p style={{ fontSize: this.state.fontSize }}>
										Cardinal Space Mining is a student-run club that builds a
										mining robot to compete at NASA's annual Robotics Mining
										competition...{' '}
										<a href='/leadership/csm' className='read-more'>
											read more
										</a>
									</p>
								</div>
							</VerticalTimelineElement>
							<VerticalTimelineElement
								className='vertical-timeline-element--work'
								contentStyle={{
									background: 'rgb(29, 89, 194)',
									color: '#fff',
								}}
								contentArrowStyle={{
									borderRight: '7px solid rgb(29, 89, 1948)',
								}}
								date="August'17 - December'18"
								iconStyle={{
									background: 'rgb(29, 89, 194)',
									color: '#fff',
									width: '20px',
									height: '20px',
									marginLeft: this.state.left,
									marginTop: this.state.margin,
								}}
							>
								<h5 className='title'>
									President -{' '}
									<a
										href='http://www.ieee.stuorg.iastate.edu/'
										target='_blank'
										rel='noopener noreferrer'
										className='links2'
									>
										IEEE Stundet Branch
									</a>
								</h5>

								<p style={{ fontSize: this.state.fontSize }}>
									The Institute of Electrical and Electronics Engineers (IEEE)
									is a student-run club for the Electrical and Computer
									Engineering...{' '}
									<a href='/leadership/ieee' className='read-more'>
										read more
									</a>
								</p>
							</VerticalTimelineElement>
							<VerticalTimelineElement
								className='vertical-timeline-element--work'
								date='August-17 - December-17'
								contentStyle={{
									background: 'rgb(29, 89, 194)',
									color: '#fff',
								}}
								contentArrowStyle={{
									borderRight: '7px solid  rgb(29, 89, 194)',
								}}
								iconStyle={{
									background: 'rgb(29, 89, 194)',
									color: '#fff',
									width: '20px',
									height: '20px',
									marginLeft: this.state.left,
									marginTop: this.state.margin,
								}}
							>
								<h5 className='title'>
									Outreach Ambassador -{' '}
									<a
										href='https://isso.dso.iastate.edu/'
										target='_blank'
										rel='noopener noreferrer'
										className='links2'
									>
										International Students and Scholars Office
									</a>
								</h5>
								<p style={{ fontSize: this.state.fontSize }}>
									As an outreach ambassador for the international students and
									scholars office (ISSO), I was given the responsibility to
									reach...{' '}
									<a href='/leadership/outreach' className='read-more'>
										read more
									</a>
								</p>
							</VerticalTimelineElement>
							<VerticalTimelineElement
								className='vertical-timeline-element--work'
								date="August'17"
								contentStyle={{ background: 'rgb(29, 89, 194)', color: '#fff' }}
								contentArrowStyle={{
									borderRight: '7px solid  rgb(29, 89, 194)',
								}}
								iconStyle={{
									background: 'rgb(29, 89, 194)',
									color: '#fff',
									width: '20px',
									height: '20px',
									marginLeft: this.state.left,
									marginTop: this.state.margin,
								}}
							>
								<h5 className='title'>
									Team Leader -{' '}
									<a
										href='https://www.admissions.iastate.edu/destination/'
										target='_blank'
										rel='noopener noreferrer'
										className='links2'
									>
										Destination Iowa State
									</a>
								</h5>
								<p style={{ fontSize: this.state.fontSize }}>
									Destination Iowa State is a three-day orientation event that
									is organized for first-year students. Each team leader is
									assigned...{' '}
									<a href='/leadership/dis' className='read-more'>
										read more
									</a>
								</p>
							</VerticalTimelineElement>
						</VerticalTimeline>
					</div>
				</div>
			</div>
		);
	}
}
