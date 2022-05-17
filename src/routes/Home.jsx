import { useEffect, useRef } from "react";
import resume from "../assets/files/resume.pdf";
import { gsap } from "gsap";

export default function Home() {
  const tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 2 }});

  useEffect(()=> {

  },[])

  return (
    <>
      <section 
        className="
        p-5 
        min-h-screen h-fit
        grid sm:flex place-items-center
        bg-[url('./assets/images/blob.svg')] bg-no-repeat bg-contain bg-right"
      >
        <div className="w-fit p-5 sm:pl-24">
          <h2 
            className="pb-2 text-center sm:text-left text-4xl md:text-6xl primary-text">
            Hi, I'm Hinrich
          </h2>

          <h2 
            className="text-center sm:text-left pb-1 text-3xl md:text-5xl secondary-text">
            Welcome to my portfolio
          </h2>

          <div className="w-fit mt-5 mx-auto sm:mx-0 flex flex-wrap flex-col sm:flex-row">
            <a href={resume} target="_blank"  className="button-link mx-auto sm:mr-5 mb-2 sm:mb-0 bg-amber-400 hover:bg-stone-900 hover:text-white">
              View my resume
            </a>
          </div>
        </div>
      </section>
    </>
  )
}