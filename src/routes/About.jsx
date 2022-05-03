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
    <div className='p-9'>
      <section className="center-everything">
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

      <section className="center-everything">
        <h2 className="p-4">[Tech stack]</h2>
        <section className="w-fit max-w-lg bg-slate-200 p-5 shadow-inner rounded-lg flex justify-around flex-wrap">
          
          <div className='p-2 min-w-[89px]'>
            <SiHtml5 title='Html5' className='icon text-red-600'/> 
            <p  className='text-center'>Html</p>
          </div>

          <div className="p-2 min-w-[89px]">
          <SiCss3 title='CSS3' className='icon text-blue-600'/> 
            <p  className='text-center'>CSS</p>
          </div>

          <div className="p-2 min-w-[89px]">
          <SiSass title='Sass' className='icon text-pink-600'/> 
            <p  className='text-center'>Sass</p>
          </div>

          <div className="p-2 min-w-[89px]">
          <SiTailwindcss title='TailwindCSS' className='icon text-teal-500'/> 
            <p  className='text-center'>Tailwind</p>
          </div>

          <div className="p-2 min-w-[89px]">
            <div className='bg-black w-fit'>
              <SiJavascript title='JavaScript' className='icon text-yellow-500'/> 
            </div>
            <p  className='text-center'>JavaScript</p>
          </div>

          <section className='p-4 mt-5 w-full rounded-lg bg-slate-300' title='still learning'>
            <h3 className='text-center'>[currently learning]</h3>
            <div className='flex justify-around flex-wrap mt-2'>
              <div className="p-2 min-w-[89px]">
                <SiReact title='React.js' className='icon text-cyan-500'/> 
                <p  className='text-center'>React.js</p>
              </div>

              <div className="p-2 min-w-[89px]">
                <SiTypescript title='Typscript' className='icon text-sky-700'/>
                <p  className='text-center'>Typscript</p> 
              </div>
              
              <div className="p-2 min-w-[89px]">
                <SiVite title='Vite' className='icon text-violet-600'/>
                <p className='text-center'>Vite</p>
              </div>
            </div>
          </section>
        </section>
      </section>
    </div>
  )
}
