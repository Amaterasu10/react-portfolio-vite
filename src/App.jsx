import { useRef } from 'react';

import TopNav from './components/TopNav';
import Home from './sections/Home';
import Contact from './sections/Contact'
import About from './sections/About'
import Projects from './sections/Projects'
import { FaHome } from 'react-icons/fa';
import { GrProjects } from 'react-icons/gr';
import { IoMailOutline } from "react-icons/io5";
import { BsFillPersonFill } from 'react-icons/bs';



import toast, { Toaster } from 'react-hot-toast';
function App() {

	const homeRef = useRef(null)
	const projectsRef = useRef(null)
	const aboutRef = useRef(null)
	const contactRef = useRef(null)

	const mainRef = useRef(null)

	return (
		<div className="App relative bg-slate-100">
			<header className='fixed w-fit z-50'>
				<TopNav
					navs={[
						{
							text: 'Home',
							ref: homeRef,
							icon: <FaHome title='Home' className='nav-icon' size={"2rem"}/>	
						},
            {
							text: 'About',
							ref: aboutRef,
							icon: <BsFillPersonFill className='nav-icon' size={"2rem"}/>

						},
						{
							text: "Projects",
							ref: projectsRef,
							icon: <GrProjects className='nav-icon' size={"2rem"}/>
						},
						{
							text: 'Contact',
							ref: contactRef,
							icon: <IoMailOutline className='nav-icon' size={"2rem"}/>
						}
						
					]}
				/>
			</header>

			<Toaster
				position="top-center"
				reverseOrder={false}
			/>

			<main className='main-content' ref={ mainRef }>
				{/* <Outlet/> */}
				<Home ref={ homeRef } />
				
        <About ref={ aboutRef } />

				<Projects ref={ projectsRef } />

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
		
		fetch("/", { // Use "/" or your site URL
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => {
      toast.success('Message sent!');
      myForm.reset(); // Add this to clear the form after success
    })
    .catch((error) => {
      toast.error('Form submission failed');
      console.error(error);
    });
	};

}

export default App
