import React from 'react';
import Fade from 'react-reveal/Fade';
import '../App.css';
import NavBar from './Navbar';
import Recommendation1 from './documents/recommendation1.pdf';
import Recommendation2 from './documents/recommendation2.pdf';
import Recommendation3 from './documents/recommendation3.pdf';
import Recommendation4 from './documents/recommendation4.pdf';
import Resume from './documents/AmirHamza-Resume-2021.pdf';
import CoverLetter from './documents/AmirHamza-CoverLetter-2021.pdf';
import PDF from './logo/pdf.png';
export const Documents = () => {
	return (
		<div className='Documents'>
			<NavBar />
			<div className='container text-center'>
				<div className='documents row justify-content-center'>
					<Fade>
						<p className='document-title'>
							<span role='img' aria-label=''>
								📋
							</span>{' '}
							Documents
						</p>
					</Fade>
				</div>
				<div className='content'>
					<div className='row justify-content-center'>
						<Fade>
							<div className='col-sm-2 col-md-2 col-lg-2 mb-3 mt-5'>
								<a
									href={Resume}
									target='_blank'
									rel='noopener noreferrer'
									style={{ color: 'inherit' }}
								>
									<img src={PDF} alt='' className='pdf' />
								</a>

								<p className='mt-3'>Resume</p>
							</div>
							<div className='col-sm-auto'></div>
							<div className='col-sm-2 col-md-2 col-lg-2 mb-3 mt-5'>
								<a
									href={CoverLetter}
									target='_blank'
									rel='noopener noreferrer'
									style={{ color: 'inherit' }}
								>
									<img src={PDF} alt='' className='pdf' />
								</a>

								<p className='mt-3'>Cover Letter</p>
							</div>
						</Fade>
					</div>

					<hr class='footer' />
					<div className='row '>
						<Fade>
							<div className='col-sm-3 col-md-3 col-lg-3 mb-3 mt-5'>
								<a
									href={Recommendation1}
									target='_blank'
									rel='noopener noreferrer'
									style={{ color: 'inherit' }}
								>
									<img src={PDF} alt='' className='pdf' />
								</a>
								<p className='mt-3'>Recommendation 1</p>
							</div>
							<div class='col-sm-auto'></div>
							<div className='col-sm-3 col-md-3 col-lg-3 mb-3  mt-5'>
								<a
									href={Recommendation2}
									target='_blank'
									rel='noopener noreferrer'
									style={{ color: 'inherit' }}
								>
									<img src={PDF} alt='' className='pdf' />
								</a>

								<p className='mt-3'>Recommendation 2</p>
							</div>
							<div className='col-sm-3 col-md-3 col-lg-3 mb-3  mt-5'>
								<a
									href={Recommendation3}
									target='_blank'
									rel='noopener noreferrer'
									style={{ color: 'inherit' }}
								>
									<img src={PDF} alt='' className='pdf' />
								</a>
								<p className='mt-3'> Recommendation 3</p>
							</div>
							<div class='col-sm-auto'></div>
							<div className='col-sm-3 col-md-3 col-lg-3 mb-3 mt-5'>
								<a
									href={Recommendation4}
									target='_blank'
									rel='noopener noreferrer'
									style={{ color: 'inherit' }}
								>
									<img src={PDF} alt='' className='pdf' />
								</a>

								<p className='mt-3'>Recommendation 4</p>
							</div>
						</Fade>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Documents;
