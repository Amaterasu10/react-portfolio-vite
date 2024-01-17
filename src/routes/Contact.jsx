import React, { forwardRef, useState } from 'react'

const Contact = forwardRef(
	function Contact({
		handleSubmit,
		notifsGetter,
	}, ref) {
		
		return (
			<div className="min-h-screen h-fit grid-center pt-12 p-5" ref={ref}>
				
				<div className='w-full max-w-md 2xl:max-w-screen-md mt-5'>

        <h2 className='text-center heading2 primary-text'>Contact</h2>

					<h3 className='text-center'>email 
					me: <a 
							href="mailto:johnhinrichggalindo@gmail.com"
							className='underline'
						>
							johnhinrichggalindo@gmail.com
						</a>
					</h3>
					
					<hr className='m-2'/>

					<form 
						onSubmit={ handleSubmit }
						name="contact" 
						method="POST" 
						data-netlify="true" 
						className='w-full grid-center text'
					>
						<input type="hidden" name="form-name" value="contact" />
						
						<section className='w-full p-3'>

							<div>
								<div className='mt-5 2xl:mt-10'>
									<input 
									className='
										border-2 
										border-solid 
										border-black 
										p-2
										w-full
									' 
									placeholder='Name' 
									required 
									type="text" 
									name="name" 
									/>
									<br/>
								</div>

								<div className='mt-5'>
									<input 
										pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"

										className='
											border-2 
											border-solid 
											border-black 
											p-2
											w-full
										' 
										placeholder='E-mail'
										required type="email" 
										name="email"
									/>
								</div>
								
							</div>

							<div className='mt-5 2xl:mt-10'>
								<textarea
									className='border-2 border-solid border-black p-2 w-full'
									placeholder='Message'
									name="message"
									required
								></textarea>
							</div>
	
							<div className='p-2 w-full text-center'>
								<button className='button-link' type="submit">Send</button>
							</div>
							
						</section>
					</form>
				</div>
			</div>
		)

		function heightGetter(height) {
			console.log('test')
			setNotifHeights([
				...notifHeights,
				height
			])
		}
	}
			
) 

export default Contact;