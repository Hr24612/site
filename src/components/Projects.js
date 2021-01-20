import React, { Component } from 'react';
import '../App.css';
import Fade from 'react-reveal/Fade';
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import NavBar from './Navbar';

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
				<NavBar />
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
									<a
										href='https://github.com/Hr24612/SeniorDesign'
										target='_blank'
										rel='noopener noreferrer'
									>
										<i className='fab fa-github' id='github'></i>
									</a>
								}
							>
								<h5 className='vertical-timeline-element-title title'>
									Warehouse Inventory Tracking Drone
								</h5>

								<h6 className='vertical-timeline-element-subtitle title'>
									CprE492: Capstone Project
								</h6>
								<p style={{ fontSize: this.state.fontSize }}>
									Warehousing contributes up to 30% of the cost of logistics in
									most developed economies. Billions of dollars of capital are
									locked up at a...{' '}
									<a href='/projects/project1' className='read-more'>
										read more
									</a>
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
									This project is a part of the CS309 class at Iowa State
									University. For this project, my team and I developed an
									anonymous discussion post...{' '}
									<a href='/projects/project2' className='read-more'>
										read more
									</a>
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
									powered price tag that uses E-Ink LCD to display prices. E-Ink
									displays contain charged...{' '}
									<a href='/projects/project3' className='read-more'>
										read more
									</a>
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
									Developed a workout app with a built-in music play and uses
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
									Developed an autonomous Roomba that runs on the Texas
									Instruments Launchpad platform.
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
