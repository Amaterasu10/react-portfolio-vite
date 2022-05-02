export default function Home() {
  return (
    <div>
      <section className="grid place-items-center h-screen px-10">
        <div className="grid place-items-center gap-y-5">
          <h2 className="text-center">
            Hi, my name is <span className="text-emerald-500">Hinrich</span> and welcome to my simple <span className="text-emerald-500">portfolio</span>
          </h2>
          <a href="../src/assets/files/resume.pdf" target="_blank"  className="bg-slate-100 hover:bg-slate-200 px-7 py-1 border-2 border-solid border-black">Resume</a>
        </div>
      </section>
    </div>
  )
}
