// import resume from "../assets/files/resume.pdf";

export default function Home() {

  return (
    <>
      <section 
        className="
        p-5 
        min-h-screen h-fit
        grid sm:flex place-items-center bg-blob"
      >
        <div className="w-fit p-5 sm:pl-24 z-10 animate-[fadeInLeft_1s_ease-in]">
          <h2 
            className="pb-2 text-center sm:text-left heading primary-text">
            Hi, I'm Hinrich
          </h2>

          <h2 
            className="text-center sm:text-left pb-1 heading2 secondary-text">
            Welcome to my portfolio
          </h2>

          <div className="w-fit mt-5 mx-auto sm:mx-0 flex flex-wrap flex-col sm:flex-row">
            {/* <a href={resume} target="_blank"  className="button-link mx-auto sm:mr-5 mb-2 sm:mb-0 bg-amber-400 hover:bg-stone-900 hover:text-white">
              View my resume
            </a> */}
          </div>
        </div>
      </section>
    </>
  )
}