import TechStack from '../components/TechStack';
export default function About() {
  return (
    <div className='p-5 pt-12'>
      <section className='min-h-screen h-fit flex items-center pt-5'>
        

        <section className="max-w-4xl h-fit p-5 sm:border-l-8 border-slate-900">
          <h2 className='text-4xl mb-3 sm:pl-2'>About me</h2>
          <p 
            className='sm:text-xl sm:pl-2 mb-3'
          >
            Hi, my name is <span className="secondary-text">Hinrich</span>.<br/>
            I am currently a 3rd year undergrad studying at AMA Computer College  and an intern at <a href="http://poblacion.ph/" className="secondary-text underline">Poblacion.ph</a> which is a startup eCommerce company.
          </p>

          <p 
            className='sm:text-xl sm:pl-2 mb-3'
          >
            I started learning how to code when I was about to go to college. After my first year, I decided to take web development as my route. Since then, I have been learning its ecosystem.
          </p>
        </section>
      </section>

      <TechStack />
      <section>
        
      </section>
    </div>
  )
}