// import resume from "../assets/files/resume.pdf";
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import {Helmet} from "react-helmet";
import { forwardRef } from 'react';


const Home = forwardRef(
	function Home(props, ref) {

		return (
			<article ref={ref}>
				<Helmet>
					<title>John Hinrich | Home</title>
					<meta name="viewport" content="width=device-width, initial-scale=1.0" />
					<meta name="description" content="Hi, my name is Hinrich, and this is my front-end portfolio website"/>

					<meta name="keywords" content="HTML, CSS, JavaScript, john hinrich, hinrich, portfolio, john hinrich joseph g. galindo, front-end, frontend, developer, website, hinrich portfolio"/>

					<meta name="author" content="John Hinrich Joseph G. Galindo"/>
				</Helmet>

				<section 
					className="
						p-5 
						min-h-screen h-fit
						grid place-items-center bg-blob
					"
				>

				<h1 className='hidden'>Hi, my name is Hinrich, and this is my front-end portfolio website</h1>
				<div 
					className="
						w-fit 
						p-5 sm:pl-24 
						z-10 animate-[fadeInTop_1s_ease-in] 
						sm:animate-[fadeInLeft_1s_ease-in]
					"
				>
					<h2 className="lg:pb-2 text-center sm:text-left heading primary-text">
						Hi, I'm Hinrich
					</h2>

					<h2 className="text-center sm:text-left pb-1 heading2 pt-0 secondary-text font-poppins">
						Welcome to my portfolio
					</h2>

					<ul className="flex mt-5 mx-auto sm:mx-0 bg-stone-900 w-full p-1 rounded-md">
						<li className='px-2'>
							<a href="https://github.com/Amaterasu10" target="_blank" className='text-slate-200 hover:text-stone-400'>
							<FaGithub size={"2rem"} title="Github"/>
							</a>
						</li>
						
						<li className='px-2'>
							<a href="https://www.linkedin.com/in/john-hinrich-joseph-galindo-2149b0201/" target="_blank" className='text-slate-200 hover:text-stone-400'>
							<FaLinkedin size={"2rem"}/>
							</a>
						</li>
					</ul>
				</div>
				</section>
			</article>
		)
	}
)

export default Home;