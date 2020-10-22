import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Fade from 'react-reveal/Fade';
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default class WorkExperience extends Component {
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

	componentDidMount() {
		this.updateDimensions();
		window.addEventListener('resize', this.updateDimensions.bind(this));
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateDimensions.bind(this));
	}

	render() {
		return (
			<div className='WorkExperience'>
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
					<div className='workexperience row justify-content-center'>
						<Fade>
							<p className='work-title'>
								<span role='img' aria-label=''>
									💼
								</span>{' '}
								Work Experiece
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
								date="August'20 - present"
								iconStyle={{
									background: 'rgb(29, 89, 194)',
									color: '#fff',
									width: '20px',
									height: '20px',
									marginLeft: this.state.left,
									marginTop: this.state.margin,
								}}
							>
								<h5 className='vertical-timeline-element-title title'>
									Remote Software Developer Co-op
								</h5>

								<h6 className='vertical-timeline-element-subtitle title'>
									Manatt's Inc. &nbsp;&nbsp;&nbsp;&nbsp;{' '}
									<span role='img' aria-label=''>
										📍
									</span>{' '}
									Brooklyn, IA
								</h6>
								<p style={{ fontSize: this.state.fontSize }}>
									Manatt's, Inc. is a construction company based in Brooklyn,
									Iowa. As a software developer, I'm helping build the
									company's...{' '}
									<Link
										NavLink
										to='/workexperience/manatts'
										className='read-more'
									>
										read more
									</Link>
								</p>
							</VerticalTimelineElement>
							<VerticalTimelineElement
								className='vertical-timeline-element--work '
								contentStyle={{
									background: 'rgb(29, 89, 194)',
									color: '#fff',
								}}
								contentArrowStyle={{
									borderRight: '7px solid rgb(29, 89, 194)',
								}}
								date="May'20 - August'20"
								iconStyle={{
									background: 'rgb(29, 89, 194)',
									color: '#fff',
									width: '20px',
									height: '20px',
									marginLeft: this.state.left,
									marginTop: this.state.margin,
								}}
							>
								<h5 className='vertical-timeline-element-title title'>
									Remote Application Security Internship
								</h5>
								<h6 className='vertical-timeline-element-subtitle title'>
									Nelnet Inc. &nbsp;&nbsp;&nbsp;&nbsp;{' '}
									<span role='img' aria-label=''>
										📍
									</span>{' '}
									Lincoln, NE
								</h6>
								<p style={{ fontSize: this.state.fontSize }}>
									Nelnet is a financial services provider heaquartederd at
									Lincoln, Nebrasks. It specializes in, private and federal
									student loans...{' '}
									<Link
										NavLink
										to='/workexperience/nelnet'
										className='read-more'
									>
										read more
									</Link>
								</p>
							</VerticalTimelineElement>
							<VerticalTimelineElement
								className='vertical-timeline-element--work'
								date="August'19 - May'20"
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
								<h5 className='vertical-timeline-element-title title'>
									IT Security Analyst
								</h5>
								<h6 className='vertical-timeline-element-subtitle title'>
									Iowa State University &nbsp;&nbsp;&nbsp;&nbsp;{' '}
									<span role='img' aria-label=''>
										📍
									</span>{' '}
									Ames, IA
								</h6>
								<p style={{ fontSize: this.state.fontSize }}>
									As a security analyst for my University, I was responsible for
									performing penetration testing of websites managed by
									different...{' '}
									<Link
										NavLink
										to='/workexperience/it-security'
										className='read-more'
									>
										read more
									</Link>
								</p>
							</VerticalTimelineElement>
							<VerticalTimelineElement
								className='vertical-timeline-element--work'
								date="May'19 - August'19"
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
								<h5 className='vertical-timeline-element-title title'>
									IT Software Engineer Internship
								</h5>
								<h6 className='vertical-timeline-element-subtitle title'>
									Spreetail Inc. &nbsp;&nbsp;&nbsp;&nbsp;
									<span role='img' aria-label=''>
										📍
									</span>{' '}
									Lincoln, NE
								</h6>
								<p style={{ fontSize: this.state.fontSize }}>
									The Spreetail internship was my first professional work
									experience off-campus. Spreetail is an E-Commerce company
									based...{' '}
									<Link
										NavLink
										to='/workexperience/spreetail'
										className='read-more'
									>
										read mode
									</Link>
								</p>
							</VerticalTimelineElement>
							<VerticalTimelineElement
								className='vertical-timeline-element--education '
								date="December'17 - May'19"
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
								<h5 className='vertical-timeline-element-title title'>
									IT Solution Technician
								</h5>
								<h6 className='vertical-timeline-element-subtitle title'>
									Iowa State Univeristy &nbsp;&nbsp;&nbsp;&nbsp;
									<span role='img' aria-label=''>
										📍
									</span>{' '}
									Ames, IA
								</h6>
								<p style={{ fontSize: this.state.fontSize }}>
									As a Solution Technician, I was responsible for providing tech
									support to 36,000 students, faculty, and staff at Iowa State
									University. I...{' '}
									<Link
										NavLink
										to='/workexperience/it-solution'
										className='read-more'
									>
										read mode
									</Link>
								</p>
							</VerticalTimelineElement>
							<VerticalTimelineElement
								className='vertical-timeline-element--education'
								date="August'17 - December'17"
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
								<h5 className='vertical-timeline-element-title title'>
									First Year Orientation Leader
								</h5>
								<h6 className='vertical-timeline-element-subtitle title'>
									Iowa State University &nbsp;&nbsp;&nbsp;&nbsp;
									<span role='img' aria-label=''>
										📍
									</span>{' '}
									Ames, IA
								</h6>
								<p style={{ fontSize: this.state.fontSize }}>
									As a First-Year Orientation Leader, I was responsible for
									teaching University Studies 110 course. This is a mandatory
									course for all...{' '}
									<Link NavLink to='/workexperience/ifye' className='read-more'>
										read mode
									</Link>
								</p>
							</VerticalTimelineElement>
						</VerticalTimeline>
					</div>
				</div>
			</div>
		);
	}
}
