import React, { Component } from 'react';
import '../App.css';
import Fade from 'react-reveal/Fade';
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import NavBar from './Navbar';
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
				<NavBar />
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
								className='vertical-timeline-element--work '
								contentStyle={{
									background: 'rgb(29, 89, 194)',
									color: '#fff',
								}}
								contentArrowStyle={{
									borderRight: '7px solid rgb(29, 89, 194)',
								}}
								date="December'20 - Ongoing"
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
									Application Security Internship
								</h5>
								<h6 className='vertical-timeline-element-subtitle title'>
									<a
										href='https://www.nelnet.com/'
										target='_blank'
										rel='noopener noreferrer'
										className='links2'
									>
										Nelnet Inc.
									</a>{' '}
									&nbsp;&nbsp;&nbsp;&nbsp;{' '}
									<span role='img' aria-label=''>
										📍
									</span>{' '}
									Remote
								</h6>
								<p style={{ fontSize: this.state.fontSize }}>
								Carrying out web penetration testing of company’s internal tools 
								and providing quality and assurance to the codebase.
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
								date="August'20 - December'20"
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
									Software Developer Internship
								</h5>

								<h6 className='vertical-timeline-element-subtitle title'>
									<a
										href='https://www.manatts.com/'
										target='_blank'
										rel='noopener noreferrer'
										className='links2'
									>
										Manatt's Inc.
									</a>
									&nbsp;&nbsp;&nbsp;&nbsp;{' '}
									<span role='img' aria-label=''>
										📍
									</span>{' '}
									Remote
								</h6>
								<p style={{ fontSize: this.state.fontSize }}>
									Manatt's, Inc. is a construction company based in Brooklyn,
									Iowa. As a software developer, I'm helping build the
									company's...{' '}
									<a href='/workexperience/manatts' className='read-more'>
										read more
									</a>
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
									Application Security Internship
								</h5>
								<h6 className='vertical-timeline-element-subtitle title'>
									<a
										href='https://www.nelnet.com/'
										target='_blank'
										rel='noopener noreferrer'
										className='links2'
									>
										Nelnet Inc.
									</a>{' '}
									&nbsp;&nbsp;&nbsp;&nbsp;{' '}
									<span role='img' aria-label=''>
										📍
									</span>{' '}
									Remote
								</h6>
								<p style={{ fontSize: this.state.fontSize }}>
									Nelnet is a financial services provider heaquartederd at
									Lincoln, Nebrasks. It specializes in, private and federal
									student loans...{' '}
									<a
										NavLink
										href='/workexperience/nelnet'
										className='read-more'
									>
										read more
									</a>
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
									<a
										href='https://security.it.iastate.edu/'
										target='_blank'
										rel='noopener noreferrer'
										className='links2'
									>
										ISU - IT Services
									</a>{' '}
									&nbsp;&nbsp;&nbsp;&nbsp;{' '}
									<span role='img' aria-label=''>
										📍
									</span>{' '}
									Ames, IA
								</h6>
								<p style={{ fontSize: this.state.fontSize }}>
									As a security analyst for my University, I was responsible for
									performing penetration testing of websites managed by
									different...{' '}
									<a href='/workexperience/it-security' className='read-more'>
										read more
									</a>
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
									IT Software Developer Internship
								</h5>
								<h6 className='vertical-timeline-element-subtitle title'>
									<a
										href='https://www.wearespreetail.com/'
										target='_blank'
										rel='noopener noreferrer'
										className='links2'
									>
										Spreetail Inc.
									</a>{' '}
									&nbsp;&nbsp;&nbsp;&nbsp;
									<span role='img' aria-label=''>
										📍
									</span>{' '}
									Lincoln, NE
								</h6>
								<p style={{ fontSize: this.state.fontSize }}>
									The Spreetail internship was my first professional work
									experience off-campus. Spreetail is an E-Commerce company
									based...{' '}
									<a href='/workexperience/spreetail' className='read-more'>
										read mode
									</a>
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
									<a
										href='https://www.it.iastate.edu/'
										target='_blank'
										rel='noopener noreferrer'
										className='links2'
									>
										ISU - IT Services
									</a>{' '}
									&nbsp;&nbsp;&nbsp;&nbsp;
									<span role='img' aria-label=''>
										📍
									</span>{' '}
									Ames, IA
								</h6>
								<p style={{ fontSize: this.state.fontSize }}>
									As a Solution Technician, I was responsible for providing tech
									support to 36,000 students, faculty, and staff at Iowa State
									University. I...{' '}
									<a href='/workexperience/it-solution' className='read-more'>
										read mode
									</a>
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
									<a
										href='https://isso.dso.iastate.edu/'
										target='_blank'
										rel='noopener noreferrer'
										className='links2'
									>
										ISU - ISSO
									</a>{' '}
									&nbsp;&nbsp;&nbsp;&nbsp;
									<span role='img' aria-label=''>
										📍
									</span>{' '}
									Ames, IA
								</h6>
								<p style={{ fontSize: this.state.fontSize }}>
									As a First-Year Orientation Leader, I was responsible for
									teaching University Studies 110 course. This is a mandatory
									course for all...{' '}
									<a href='/workexperience/ifye' className='read-more'>
										read mode
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
