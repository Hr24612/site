import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Fade from 'react-reveal/Fade';
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
export default class Projects extends Component {
	constructor() {
		super();
		this.state = {
			left: '',
			margin: '',
			fontSize: '16px',
		};
	}
	updateDimensions() {
		if (window.innerWidth < 1168) {
			this.setState({ left: '6px' });
			this.setState({ margin: '12px' });
		} else {
			this.setState({ left: '-14px' });
			this.setState({ margin: '20px' });
		}
	}

	componentDidMount() {
		this.updateDimensions();
		window.addEventListener('resize', this.updateDimensions.bind(this));
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateDimensions.bind(this));
	}

	render() {
		return (
			<div className='Project'>
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
					<div className='project row justify-content-center'>
						<Fade>
							<p className='project-title'>
								<span role='img' aria-label=''>
									🛠️
								</span>{' '}
								Projects
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
								iconStyle={{
									background: 'white',
									color: 'black',
									width: '28px',
									height: '28px',
									marginLeft: this.state.left,
									marginTop: this.state.margin,
								}}
								icon={
									///a href='' target='_blank'>
									<i className='fab fa-github' id='github'></i>
									//</a>
								}
							>
								<h5 className='vertical-timeline-element-title title'>
									Warehouse Inventory Tracking Drone
								</h5>

								<h6 className='vertical-timeline-element-subtitle title'>
									CprE492: Capstone Project
								</h6>
								<p style={{ fontSize: this.state.fontSize }}>
									I am the team leader for my capstone project team. My team and
									I are building a quadcopter that scans QR codes of pallets
									placed in a warehouse. This drone will be to record inventory
									for a warehouse quickly and safely.
								</p>
								<p style={{ fontSize: this.state.fontSize }}>
									Click{' '}
									<span role='img' aria-label=''>
										👉🏼
									</span>
									&nbsp;
									<a
										className='links2'
										href='https://sddec20-10.sd.ece.iastate.edu/'
										target='_blank'
										rel='noopener noreferrer'
									>
										<i>Project Website</i>
									</a>
									&nbsp;&nbsp; for more details on this project
								</p>
							</VerticalTimelineElement>
							<VerticalTimelineElement
								className='vertical-timeline-element--work'
								contentStyle={{
									background: 'rgb(29, 89, 194)',
									color: '#fff',
								}}
								contentArrowStyle={{
									borderRight: '7px solid rgb(29, 89, 194)',
								}}
								iconStyle={{
									background: 'white',
									color: 'black',
									width: '28px',
									height: '28px',
									marginLeft: this.state.left,
									marginTop: this.state.margin,
								}}
								icon={
									<a
										href='https://github.com/Hr24612/PrivateBlockchain'
										target='_blank'
										rel='noopener noreferrer'
									>
										<i className='fab fa-github' id='github'></i>
									</a>
								}
							>
								<h5 className='vertical-timeline-element-title title'>
									Private Blockchain
								</h5>
								<h6 className='vertical-timeline-element-subtitle title'>
									Blockchain Certification
								</h6>
								<p style={{ fontSize: this.state.fontSize }}>
									Built a private blockchain in Node.js for my Blockchain
									Developer Certification. The blockchain acts as a database
									that stores information as a hash and tracks ownership for
									each data entry.
								</p>
							</VerticalTimelineElement>
							<VerticalTimelineElement
								className='vertical-timeline-element--work'
								contentStyle={{ background: 'rgb(29, 89, 194)', color: '#fff' }}
								contentArrowStyle={{
									borderRight: '7px solid  rgb(29, 89, 194)',
								}}
								iconStyle={{
									background: 'white',
									color: 'black',
									width: '28px',
									height: '28px',
									marginLeft: this.state.left,
									marginTop: this.state.margin,
								}}
								icon={
									<a
										href='https://github.com/Hr24612/AnonymousDiscussionPost'
										target='_blank'
										rel='noopener noreferrer'
									>
										<i className='fab fa-github' id='github'></i>
									</a>
								}
							>
								<h5 className='vertical-timeline-element-title title'>
									Anonymous Discussion Post
								</h5>
								<h6 className='vertical-timeline-element-subtitle title'>
									CS309: Software Development
								</h6>
								<p style={{ fontSize: this.state.fontSize }}>
									This project is an anonymous discussion post for discussing
									controversial topics. I was awarded the best backend developer
									in class.
								</p>
							</VerticalTimelineElement>
							<VerticalTimelineElement
								className='vertical-timeline-element--work'
								contentStyle={{
									background: 'rgb(29, 89, 194)',
									color: '#fff',
								}}
								contentArrowStyle={{
									borderRight: '7px solid  rgb(29, 89, 194)',
								}}
								iconStyle={{
									background: 'white',
									color: 'black',
									width: '28px',
									height: '28px',
									marginLeft: this.state.left,
									marginTop: this.state.margin,
								}}
								icon={
									<a
										href='https://github.com/Hr24612/IoTPriceTag'
										target='_blank'
										rel='noopener noreferrer'
									>
										<i className='fab fa-github' id='github'></i>
									</a>
								}
							>
								<h5 className='vertical-timeline-element-title title'>
									IoT Price Tag
								</h5>
								<h6 className='vertical-timeline-element-subtitle title'>
									CprE490: Independent Study
								</h6>
								<p style={{ fontSize: this.state.fontSize }}>
									I worked under Professor Akhilesh Tyagi to develop a low
									powered price tag that uses E-Ink LCD to display prices. This
									price tag could last up to four years if updated once a week
									on a 2000mAh battery.
								</p>
								<p style={{ fontSize: this.state.fontSize }}>
									Click{' '}
									<span role='img' aria-label=''>
										👉🏼
									</span>
									&nbsp;
									<a
										className='links2'
										href='https://en.wikipedia.org/wiki/Electronic_paper'
										target='_blank'
										rel='noopener noreferrer'
									>
										<i>E-Ink Wiki</i>
									</a>
									&nbsp;&nbsp; to learn more about E-Ink Technology
								</p>
							</VerticalTimelineElement>
							<VerticalTimelineElement
								className='vertical-timeline-element--education'
								contentStyle={{ background: 'rgb(29, 89, 194)', color: '#fff' }}
								contentArrowStyle={{
									borderRight: '7px solid  rgb(29, 89, 194)',
								}}
								iconStyle={{
									background: 'white',
									color: 'black',
									width: '28px',
									height: '28px',
									marginLeft: this.state.left,
									marginTop: this.state.margin,
								}}
								icon={
									<a
										href='https://github.com/Hr24612/CPRE388Labs/tree/master/FinalProject'
										target='_blank'
										rel='noopener noreferrer'
									>
										<i className='fab fa-github' id='github'></i>
									</a>
								}
							>
								<h5 className='vertical-timeline-element-title title'>
									Workout App
								</h5>
								<h6 className='vertical-timeline-element-subtitle title'>
									CprE388: Android Development
								</h6>
								<p style={{ fontSize: this.state.fontSize }}>
									Developer a workout app with a built-in music play and uses
									voice recognition to switch between workouts without
									physically using the app.
								</p>
							</VerticalTimelineElement>
							<VerticalTimelineElement
								className='vertical-timeline-element--education'
								contentStyle={{
									background: 'rgb(29, 89, 194)',
									color: '#fff',
								}}
								contentArrowStyle={{
									borderRight: '7px solid  rgb(29, 89, 194)',
								}}
								iconStyle={{
									background: 'white',
									color: 'black',
									width: '28px',
									height: '28px',
									marginLeft: this.state.left,
									marginTop: this.state.margin,
								}}
								icon={
									<a
										href='https://github.com/Hr24612/CPRE288Labs'
										target='_blank'
										rel='noopener noreferrer'
									>
										<i className='fab fa-github' id='github'></i>
									</a>
								}
							>
								<h5 className='vertical-timeline-element-title title'>
									Autonomous Roomba
								</h5>
								<h6 className='vertical-timeline-element-subtitle title'>
									CprE288: Embedded Systems
								</h6>
								<p style={{ fontSize: this.state.fontSize }}>
									Developed a aotonomous roomba that run on Texas Instruments
									Launchpad platform.
								</p>
								<p style={{ fontSize: this.state.fontSize }}>
									Click{' '}
									<span role='img' aria-label=''>
										👉🏼
									</span>
									<i>
										<a
											href='https://www.youtube.com/watch?v=K8z7e1BPxvA'
											target='_blank'
											rel='noopener noreferrer'
											className='links2'
										>
											Video
										</a>
									</i>{' '}
									&nbsp;for a live demo
								</p>
							</VerticalTimelineElement>
						</VerticalTimeline>
					</div>
				</div>
			</div>
		);
	}
}
