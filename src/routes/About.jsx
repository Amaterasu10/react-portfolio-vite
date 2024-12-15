import TechStack from '../components/TechStack';
import blobWebm from "../assets/images/blob.webm";
import blobMp4 from "../assets/images/blob.mp4";
import { forwardRef } from 'react';

const About = forwardRef(
	function About(props, ref) {

		return (
			<article ref={ref}>
				{/* <section className='min-h-screen h-fit flex flex-col items-center pt-5 relative'> */}

        <section className='min-h-screen h-fit grid content-center'>
					{/* <video autoPlay loop muted playsInline className='max-h-full min-h-full absolute z-0 right-0 opacity-0 animate-[fadeIn_1.5s_1s_ease-in_forwards]'>
					<source src={blobWebm} type="video/webm"/>
					<source src={blobMp4} type="video/mp4"/>
					</video>
	
					{
						//cover for blob video so that it's not clickable
					}
					<div className='absolute inset-0'></div> */}
	
					<article className="about-me-container">
            
						<h2 className='heading2 text-center'>
							About me
						</h2>

						<span className='text mb-3 pb-1 text-justify'>
							<p>
              Hello! My name is Hinrich. I am a Computer Science student and a front-end developer with a keen interest in technologies like AI and coding. I have a total of 13 months of experience from my two previous internships. During these internships, I was exposed to tasks and projects that required the use of tools such as Confluence, Atlassian Jira, Google Analytics, and others.
							</p>
						</span>
					</article>

          <article className='pt-5'>
					<TechStack />
				</article>
				</section>
	

			</article>
		)
	}
)
export default About;