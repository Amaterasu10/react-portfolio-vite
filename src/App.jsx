import { useRef } from 'react';

import TopNav from './components/TopNav';
import Home from './routes/Home';
import Contact from './routes/Contact'
import About from './routes/About'
import Projects from './routes/Projects'
import { FaHome } from 'react-icons/fa';
import { GrProjects } from 'react-icons/gr';
import { BsFillPersonFill } from 'react-icons/bs';



import toast, { Toaster } from 'react-hot-toast';
function App() {

	const homeRef = useRef(null)
	const projectsRef = useRef(null)
	const aboutRef = useRef(null)
	const contactRef = useRef(null)

	const mainRef = useRef(null)

	return (
		<div className="App font-poppins relative bg-slate-100">
			<header className='fixed w-fit z-50'>
				<TopNav
					navs={[
						{
							text: 'Home',
							ref: homeRef,
							icon: <FaHome title='Home' className='nav-icon' size={"2rem"}/>	
						},
						{
							text: "Projects",
							ref: projectsRef,
							icon: <GrProjects className='nav-icon' size={"2rem"}/>
						},
						{
							text: 'About',
							ref: aboutRef,
							icon: <GrProjects className='nav-icon' size={"2rem"}/>

						},
						{
							text: 'Contact',
							ref: contactRef,
							icon: <GrProjects className='nav-icon' size={"2rem"}/>
						}
						
					]}
				/>
			</header>

			<Toaster
				position="bottom-left"
				reverseOrder={false}
			/>

			<main className='min-h-screen h-fit scroll-smooth' ref={ mainRef }>
				{/* <Outlet/> */}
				<Home ref={ homeRef } />
				
				<Projects ref={ projectsRef } />

				<About ref={ aboutRef } />

				<Contact 
					ref={ contactRef } 
					handleSubmit={ handleSubmit } 
				/>
				
			</main>
		</div>
	)

	function handleSubmit(event) {
		event.preventDefault();
		console.log('test')
		const myForm = event.target;
		const formData = new FormData(myForm);
		
		const email = formData.get('email')
		const name = formData.get('email')
		const message = formData.get('message')

		const someUndefined = (
			email === '' ||
			name === '' ||
			message === ''
		)
		
		if(email ==='') toast.error('no email was provided')

		fetch("", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: new URLSearchParams(formData).toString(),
		})
		.then(
			() => {
				return toast.success('message sent')
			}
		)
		.catch( 
			error => toast.error(error) 
		);
	};

}

export default App
