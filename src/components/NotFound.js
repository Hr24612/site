import React, { Component } from 'react';
import '../App.css';
import Fade from 'react-reveal/Fade';
import NavBar from './Navbar';

export default class Project1 extends Component {
	render() {
		return (
			<div className='NotFound'>
				<NavBar />
				<div className='container text-center'>
					<div className='NotFound-Text'>
						<Fade>
							<p style={{ fontSize: '100px' }}>
								4
								<span className='spinning-emoji' role='img' aria-label=''>
									😵
								</span>
								4
							</p>
							<p style={{ fontSize: '25px' }}>Page Not Found</p>
						</Fade>
					</div>
				</div>
			</div>
		);
	}
}
