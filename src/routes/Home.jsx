import resume from "../assets/files/resume.pdf"
export default function Home() {
  return (
    <>
      <section className="p-5 center-everything  items-center h-full">
        <div className="w-fit p-5">
          
          <h2 
            className="pb-2 text-center sm:text-left text-lg sm:text-3xl md:text-4xl">
            Hi, my name is <span className="secondary-text"> Hinrich</span>
          </h2>

          <h2 
            className="text-center sm:text-left pb-1 sm:text-2xl">
            Welcome to my simple <span className="secondary-text"> Portfolio</span>
          </h2>

          <div className="w-fit mt-5 mx-auto sm:mx-0 flex flex-wrap flex-col sm:flex-row">

          <a href={resume} target="_blank"  className="button-link mx-auto sm:mr-5 mb-2 sm:mb-0">
            View my resume
          </a>

          <a href={resume} download className="button-link mx-auto">
            Download my resume
          </a>
          </div>
        </div>
      </section>
    </>
  )
}