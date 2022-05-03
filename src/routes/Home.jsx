import resume from "../assets/files/resume.pdf"
export default function Home() {
  return (
    <div>
      <section className="grid place-items-center h-screen px-10">
        <div className="grid place-items-center gap-y-5">
          <h2 className="text-center">
            Hi, my name is <span className="text-emerald-500">Hinrich</span> and welcome to my simple <span className="text-emerald-500">portfolio</span>
          </h2>
          <a href={resume} target="_blank"  className="button-link">Resume</a>
        </div>
      </section>
    </div>
  )
}
