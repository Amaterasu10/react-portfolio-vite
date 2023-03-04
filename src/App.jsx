import { useRef } from 'react';

import TopNav from './components/TopNav';
import Home from './routes/Home';
import Contact from './routes/Contact'
import About from './routes/About'
import Projects from './routes/Projects';

import toast, { Toaster } from 'react-hot-toast';
function App() {

	const homeRef = useRef(null)
	const aboutRef = useRef(null)
	const contactRef = useRef(null)

	const mainRef = useRef(null)

	return (
		<div className="App font-poppins relative">
			<header className='fixed w-full z-50'>
				<TopNav
					navs={[
						{
							text: 'Home',
							ref: homeRef	
						},
						{
							text: 'About',
							ref: aboutRef
						},
						{
							text: 'Contact',
							ref: contactRef
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
				
				<About ref={ aboutRef } />

				{/* <Projects/> */}

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
