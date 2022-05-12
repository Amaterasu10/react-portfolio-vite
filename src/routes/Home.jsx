import resume from "../assets/files/resume.pdf";
export default function Home() {
  return (
    <>
      <section className="p-5 min-h-screen h-fit flex items-center bg-[url('./assets/images/blob.svg')] bg-no-repeat bg-right">
        {/* <img src={blob} alt="" /> */}
        <div className="w-fit p-5 pl-24">
          <h2 
            className="pb-2 text-center sm:text-left text-lg sm:text-3xl md:text-6xl text-stone-900">
            Hi, I'm Hinrich
          </h2>

          <h2 
            className="text-center sm:text-left pb-1 sm:text-2xl md:text-5xl text-stone-700">
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