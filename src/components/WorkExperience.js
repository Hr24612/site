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
					<nav class='navbar navbar-expand-lg  navbar1 navbar-dark'>
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
						<div class='collapse navbar-collapse pt-3' id='navbarNav'>
							<ul class='navbar-nav'>
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
									<Link NavLink to='/workExperience'>
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

					<div class='row'>
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
									As a software developer, I'm helping build the company's
									internal financial and accounting tools in Angular.js and
									.NET. My daily routine at Manatt's includes working with the
									product owner to understand requirements, developing new
									features, fixing existing bugs, and performing code reviews.
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
									I started my internship with my first project to develop a
									malware in C# language that bypassed antivirus detection. The
									project's end goal was to be used to target Nelnet's servers
									and employees by penetration testers to bypass existing
									security controls. This would help uncover existing security
									vulnerabilities before a cyber attacker finds out.
								</p>
								<p style={{ fontSize: this.state.fontSize }}>
									My second project was to carry out web penetration testing for
									a company's internal financial tool. I was able to find
									critical vulnerabilities by using a web vulnerability scanner
									called Burp Suite. After a successful engagement, I worked
									with the rest of my team to develop a report that explained
									the vulnerabilities found and stated the likelihood and impact
									for each. In addition to that, my team and I performed quality
									and assurance of the codebase and contributed to DevSecOps
									initiatives through building and integration of units tests
									into build pipelines.
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
									As a security analyst, I was responsible for performing
									penetration testing of websites managed by different campus
									departments. I used Burp Suite, a web vulnerability scanner,
									to find vulnerabilities like SQL injection, remote code
									execution, and cross-site scripting. Before I left for my
									internship at Nelnet, I was able to scan more than 300
									websites and addressed critical findings in my scan reports.
									In addition to web penetration, I was responsible for
									providing code reviews and best practices to developers to
									help write secure code
								</p>
								<p style={{ fontSize: this.state.fontSize }}>
									This position was my entry into the field of application
									security. It not only taught me the core concepts of web
									security but also showed me how easy it is to break into a web
									application.
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
									At Spreetail, I worked on the Android application used by
									Spreetail's warehouse workers to track shipments. I worked
									with UX Engineers to create and add custom UI features to the
									app. This helped remove the dependency on third-party UI
									elements previously used by the app. One of the significant
									changes taking place was moving away from Java to Kotlin as
									the primary language of choice. I helped the team in this
									undertaking to accelerate the transition. Moreover, I also
									contributed to a few internal ongoing web IT projects in
									Node.js and React.js. This was my first internship during
									college, and it was a great learning experience.
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
									University. I became a Subject Matter Expert (SME) for the
									following platforms: Qualtrics, Zoom, Adobe, Box, VMware
									Horizon, Splunk, Canvas, Okta, and Confluence. I was the
									person in charge of providing support to customers in the
									areas I was an SME in.
								</p>
								<p style={{ fontSize: this.state.fontSize }}>
									After eight months into this role, I was promoted to the team
									lead position. As a team lead, I was responsible for
									overseeing 60 IT Solution Technicians and providing training
									to new hires. This was my first technical job, and my start in
									the field of information technology.
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
									course for all international students who arrive at Iowa State
									University. This course aims to teach students about US laws,
									cultural norms and introduce them to useful campus resources.
									I was responsible for leading three weekly classes, where I
									taught 60 students in total. I graded homework assignments and
									student presentations.
								</p>
							</VerticalTimelineElement>
						</VerticalTimeline>
					</div>
				</div>
			</div>
		);
	}
}
