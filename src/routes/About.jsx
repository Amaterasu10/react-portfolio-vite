import TechStack from '../components/TechStack';
import blobWebm from "../assets/images/blob.webm";
import blobMp4 from "../assets/images/blob.mp4";
import { forwardRef } from 'react';

const About = forwardRef(
	function About(props, ref) {

		return (
			<article ref={ref}>
				<section className='min-h-screen h-fit flex items-center pt-5 relative'>
					{/* <video autoPlay loop muted playsInline className='max-h-full min-h-full absolute z-0 right-0 opacity-0 animate-[fadeIn_1.5s_1s_ease-in_forwards]'>
					<source src={blobWebm} type="video/webm"/>
					<source src={blobMp4} type="video/mp4"/>
					</video>
	
					{
						//cover for blob video so that it's not clickable
					}
					<div className='absolute inset-0'></div> */}
	
					<article 
						// className="
						// 	2xl:max-w-7xl 
						// 	h-fit 
						// 	p-5 
						// 	sm:pl-24 
						// 	z-[1] 
						// 	animate-[fadeInTop_1s_ease-in] 
						// 	sm:animate-[fadeInLeft_1s_ease-in]"
	
						className="
							mx-auto
							max-w-6xl
							2xl:max-w-7xl 
							h-fit 
							p-5 
							z-[1] 
							animate-[fadeInTop_0.5s_ease-in]"
						>
						{/* <h2 className='pb-2 text-center sm:text-left heading primary-text'> */}
						<h2 className='p-4 text-center heading primary-text'>
							About me
						</h2>
	
						{/* <span className='text mb-3 text-center sm:text-left pb-1'> */}
						<span className='text mb-3 pb-1 text-justify'>
							<p>
								Hi! my name is <span className="font-semibold italic">Hinrich</span>. I am an 
								aspiring <span className="font-semibold italic">front-end web developer</span>.
								I gained some practical experience through a 3-month internship 
								with <a className='underline font-semibold italic' href="http://poblacion.ph" target='_blank'>Poblacion.ph</a>, 
								a startup E-Commerce company. However, since I was a founding member, my presence was crucial to the company, and 
								I ended up extending my internship for an additional 7 months. After my internship, I decided to focus on my studies. 
								Now, I am looking for a company that would help me grow as a developer.
							</p>
						</span>
					</article>
				</section>
	
				<article 
					className='
						min-h-screen 
						h-fit grid 
						place-content-center'
					>
					<TechStack />
				</article>
			</article>
		)
	}
)
export default About;