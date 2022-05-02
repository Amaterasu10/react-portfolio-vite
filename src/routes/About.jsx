import { 
  SiHtml5, 
  SiCss3,
  SiSass, 
  SiTailwindcss, 
  SiJavascript, 
  SiReact, 
  SiTypescript, 
  SiVite 
} from 'react-icons/si';
export default function About() {
  return (
    <div>
      <section className="h-screen px-9 grid place-content-center place-items-center">
        <h2 className="p-4">[About me]</h2>

        <section className="max-w-lg">
          <p className="text-justify mb-5">
            Hi, my name is <span className="text-emerald-500">Hinrich</span>.<br/>
            I am currently a 3rd year undergrad studying at AMA Computer College  and an intern at <a href="http://poblacion.ph/" className="text-emerald-500 underline">Poblacion.ph</a> which is a startup Ecommerce company.
          </p>

          <p className="text-justify mb-5">
            I started learning how to code when I was about to go to college. After my first year, I decided to take web development as my route. Since then, I have been learning its ecosystem.
          </p>
        </section>
      </section>

      <section className="h-screen px-9 grid place-content-center place-items-center">
        <h2 className="p-4">[Tech stack]</h2>
        <section className="w-fit max-w-lg bg-slate-200 p-5 shadow-inner rounded-lg flex justify-around flex-wrap">
          
          <div className='p-2'>
            <SiHtml5 title='Html5' className='text-xl md:text-4xl text-red-600'/>
          </div>

          <div className="p-2">
          <SiCss3 title='CSS3' className='text-xl md:text-4xl text-blue-600'/> 
          </div>

          <div className="p-2">
          <SiSass title='Sass' className='text-xl md:text-4xl text-pink-600'/> 
          </div>

          <div className="p-2">
          <SiTailwindcss title='TailwindCss' className='text-xl md:text-4xl text-teal-500'/> 
          </div>

          <div className="p-2">
            <div className='bg-black'>
              <SiJavascript title='JavaScript' className='text-xl md:text-4xl text-yellow-500'/> 
            </div>
          </div>

          <section className=' mt-5 w-full rounded-lg bg-slate-300' title='still learning'>
            <h3 className='text-center'>currently learning</h3>
            <div className='flex justify-around flex-wrap '>
              <div className="p-2">
                <SiReact title='React.js' className='text-xl md:text-4xl text-cyan-500'/> 
              </div>

              <div className="p-2">
                <SiTypescript title='Typscript' className='text-xl md:text-4xl text-sky-700'/> 
              </div>
              
              <div className="p-2">
                <SiVite title='Vite' className='text-xl md:text-4xl text-violet-600'/>
              </div>
            </div>
          </section>
        </section>
      </section>
    </div>
  )
}
