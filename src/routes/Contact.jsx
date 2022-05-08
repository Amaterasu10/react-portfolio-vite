import React from 'react'

export default function Contact() {
  return (
    <div className="h-screen grid-center p-9">
      <div className='w-full max-w-md'>
        <form name="contact" method="POST" data-netlify="true" className='w-full border-2 grid-center'>
          <div className='bg-slate-100 w-full p-3 text-center'>
            Get in touch
          </div>
          <section className='w-full p-3'>
            <div>
              <div className='mt-5'>
                <label>Your Name<br/> <input className='border-2 p-2 w-full' type="text" name="name" /></label><br/>
              </div>
              <div className='mt-5'>
                <label>Your Email<br/> <input className='border-2 p-2 w-full' type="email" name="email" /></label>
              </div>
            </div>

            <p>
              <div className='mt-5'>
                <label>Message<br/> <textarea className='border-2 p-2 w-full' name="message"></textarea></label>
              </div>
            </p>
            <div className='p-2 w-full text-center'>
              <button className='button-link' type="submit">Send</button>
            </div>
          </section>
        </form>
      </div>
    </div>
  )
}