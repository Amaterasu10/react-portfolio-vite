import resume from "../assets/files/resume.pdf"
export default function Home() {
  return (
    <>
      <section className="grid place-items-center h-screen px-10">
        <div className="grid place-items-center gap-y-5">
          <h2 className="text-center">
          <span className="text-xl font-bold">
            Hi, I'm <span className="secondary-text">Hinrich</span>
          </span>.<br/> 
          welcome to my simple <span className="secondary-text">portfolio</span>
          </h2>
          <a href={resume} target="_blank"  className="button-link">Resume</a>
        </div>
      </section>
    </>
  )
}
