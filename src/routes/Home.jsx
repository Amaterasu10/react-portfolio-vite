// import resume from "../assets/files/resume.pdf";
import { FaGithub, FaLinkedin } from 'react-icons/fa'
export default function Home() {

  return (
    <>
      <section 
        className="
        p-5 
        min-h-screen h-fit
        grid sm:flex place-items-center relative"
      >
        <div className='bg-blob'></div>
        <div className="w-fit p-5 sm:pl-24 z-10 animate-[fadeInLeft_1s_ease-in]">
          <h2 
            className="pb-2 text-center sm:text-left heading primary-text">
            Hi, I'm Hinrich
          </h2>

          <h2 
            className="text-center sm:text-left pb-1 heading2 secondary-text">
            Welcome to my portfolio
          </h2>

          <ul className="flex mt-5 mx-auto w-fit sm:mx-0">
            {/* <a href={resume} target="_blank"  className="button-link mx-auto sm:mr-5 mb-2 sm:mb-0 bg-amber-400 hover:bg-stone-900 hover:text-white">
              View my resume
            </a> */}
            <li className='px-2'>
              <a href="https://github.com/Amaterasu10" target="_blank" className='text secondary-text hover:text-stone-900'>
                <FaGithub size={"2rem"} title="Github"/>
              </a>
            </li>
            <li className='px-2'>
              <a href="https://www.linkedin.com/in/john-hinrich-joseph-galindo-2149b0201/" target="_blank" className='text secondary-text hover:text-stone-900'>
                <FaLinkedin size={"2rem"} title="Linkedin"/>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}