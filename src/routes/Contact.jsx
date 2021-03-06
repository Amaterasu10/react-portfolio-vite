import React from 'react'

export default function Contact() {
  return (
    <div className="min-h-screen h-fit grid-center pt-12 p-5">
      <div className='w-full max-w-md 2xl:max-w-screen-md mt-5'>
        <form 
        name="contact" 
        method="POST" 
        data-netlify="true" 
        className='w-full border-2 grid-center text'
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className='bg-slate-100 w-full p-3 text-center'>
            Get in touch
          </div>
          <section className='w-full p-3'>

            <div>
              <div className='mt-5 2xl:mt-10'>
                <label>Your Name<br/> <input className='border-2 p-2 2xl:p-4 w-full' type="text" name="name" /></label><br/>
              </div>
              <div className='mt-5 2xl:mt-10'>
                <label>Your Email<br/> <input className='border-2 p-2 2xl:p-4 w-full' type="email" name="email" /></label>
              </div>
            </div>

            <div className='mt-5 2xl:mt-10'>
              <label>Message<br/> <textarea className='border-2 p-2 2xl:p-4 w-full' name="message"></textarea></label>
            </div>

            <div className='p-2 w-full text-center'>
              <button className='button-link' type="submit">Send</button>
            </div>
            
          </section>
        </form>
      </div>
    </div>
  )
}
