import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import ieee from './logo/ieee.jpg';
import rmcScore from './documents/RMC_FINAL_SCORE.pdf';
import rmcLogo from './logo/rmclogo.png';
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
			imageWidth: '200px',
			fontSize: '16px',
		};
	}
	updateDimensions() {
		if (window.innerWidth < 768) {
			this.setState({ imageWidth: '150px' });
		}
		if (window.innerWidth < 1168) {
			this.setState({ left: '10px' });
			this.setState({ margin: '12px' });
		} else {
			this.setState({ left: '10px' });
			this.setState({ margin: '10px' });
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
					<nav class='navbar navbar-expand-lg navbar1 navbar-dark'>
						<button
							class='navbar-toggler mt-2'
							type='button'
							data-toggle='collapse'
							data-target='#navbarNav'
							aria-controls='navbarNav'
							aria-expanded='false'
							aria-label='Toggle navigation'
						>
							<span class='navbar-toggler-icon'></span>
						</button>
						<div class='collapse navbar-collapse  pt-3' id='navbarNav'>
							<ul class='navbar-nav'>
								<div className='nav-item '>
									<Link NavLink to='/'>
										<button className='btn x'>Home</button>
									</Link>
								</div>
								<div className='nav-item'>
									<Link NavLink to='/WorkExperience'>
										<button className='btn x'>Work Experience</button>
									</Link>
								</div>
								<div className='nav-item'>
									<Link NavLink to='/Leadership'>
										<button className='btn x'>Leadership</button>
									</Link>
								</div>
								<div className='nav-item'>
									<Link NavLink to='/Projects'>
										<button className='btn x'>Projects</button>
									</Link>
								</div>
								<div className='nav-item'>
									<Link NavLink to='/Documents'>
										<button className='btn x'>Documents</button>
									</Link>
								</div>
								<div className='nav-item'>
									<Link NavLink to='/Skills'>
										<button className='btn x'>Skills</button>
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

					<div class='row'>
						<VerticalTimeline layout={'1-column'}>
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
												href='https://www.stuorg.iastate.edu/site/spacemining'
												target='_blank'
												rel='noopener noreferrer'
												className='links'
											>
												Cardinal Space Mining Club
											</a>
										</h5>
									</div>
									<p style={{ fontSize: this.state.fontSize }}>
										Cardinal Space Mining is a student-run club that builds a
										mining robot to compete at{' '}
										<span role='img' aria-label=''>
											🚀
										</span>
										<a
											href='https://www.nasa.gov/offices/education/centers/kennedy/technology/nasarmc.html'
											target='_blank'
											rel='noopener noreferrer'
											className='links'
										>
											NASA's annual Robotics Mining Competition
										</a>
										. The competition's goal is to enable Universities across
										the US to develop innovative mining ideas that can then be
										implemented on actual NASA rovers that will be sent to Moon,
										Mars, and beyond.
									</p>
									<img
										className='TextWrap'
										src={rmcLogo}
										style={{ width: this.state.imageWidth }}
										alt=''
									/>
									<p style={{ fontSize: this.state.fontSize }}>
										When I took over as the President, I was immediately
										presented with several challenges. We incurred budget cuts
										from our sponsors, and my team ended up operating on 60% of
										the previous year's budget. We had to completely rethink our
										spending strategy to make it through the competition.
										Managing people of different personalities and mindsets,
										making sure everyone is feeling included, and completing
										tasks on time were just a few of my worries. Since 2009, the
										team has managed to stay in the top 5 at the competition.
										Unfortunately, in 2018 we stood 8th, so I had enormous
										pressure on me to get the team back in the top 5. This meant
										making sure the technical people don't get bothered by
										financial or administrative issues, so they deliver an
										improved version of last year's robot. I was also involved
										with the team on the techincal side. My main role was to
										implement autonomous navigation of the robot. My team and I
										implemented partial autonomy by using a verity of sensors.
									</p>
									<p style={{ fontSize: this.state.fontSize }}>
										The team stood 4th out of 46 teams at the competition, and I
										was on cloud nine when I received the news. Though we didn't
										win the competition, it was still a great improvement from
										the previous year and overall a good standing at the
										competition.
									</p>
									<p style={{ fontSize: this.state.fontSize }}>
										For final scores click{' '}
										<span role='img' aria-label=''>
											👉🏼
										</span>{' '}
										<a
											href={rmcScore}
											target='_blank'
											rel='noopener noreferrer'
											className='links'
										>
											<i>Official Score</i>
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
								date="August'17 - December'19"
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
										className='links'
									>
										Institute of Electrical and Electronics Engineers (IEEE)
									</a>
								</h5>

								<p style={{ fontSize: this.state.fontSize }}>
									IEEE is a student-run club for the Electrical and Computer
									Engineering department at Iowa State University. As the
									President, my team and I did several activities to help the
									students with their careers. We arranged recruiting seminars
									for more than 20 companies in a semester.{' '}
									<img
										className='TextWrap'
										src={ieee}
										alt=''
										style={{
											boxShadow:
												'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
											borderRadius: '5px',
											width: this.state.imageWidth,
										}}
									/>
									This was an excellent opportunity for students to connect with
									recruiters and gain insight into their culture and hiring
									process. This was the club's biggest selling point, and we
									ended up having more than 400 members at one point. I also the
									tradition of funding student ⚙️projects. This was a great way
									to help students learn practically without worrying about
									finances. In addition to that, I also served on the Student
									Advisory Committee, which the Department Chair led. The goal
									for this committee was to share students' concerns and discuss
									ways to help better the undergraduate program. I had a great
									time leading this club. I met some amazing people who I am
									still in contact with and got a chance to better my leadership
									skills.
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
										className='links'
									>
										Destination Iowa State
									</a>
								</h5>
								<p style={{ fontSize: this.state.fontSize }}>
									Destination Iowa State is a three-day orientation event that
									is organized for first-year students. Each team leader is
									assigned a group of students and is responsible for leading
									the group through different campus orientation events. As a
									team leader, I toured my group around campus, helped them move
									in{' '}
									<span role='img' aria-label=''>
										🏚️
									</span>
									, and directed them to campus resources for future academic
									success.
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
										className='links'
									>
										International Students and Scholars Office
									</a>
								</h5>
								<p style={{ fontSize: this.state.fontSize }}>
									As an outreach ambassador, I was given the responsibility to
									reach out to incoming international students to help them with
									their arrival in the USA, register for classes, and direct
									them to campus resources for academic success.
								</p>
							</VerticalTimelineElement>
						</VerticalTimeline>
					</div>
				</div>
			</div>
		);
	}
}
