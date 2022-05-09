import TechStack from '../components/TechStack';
export default function About() {
  return (
    <div className='p-5'>
      <section className="center-everything">
        <h2 className="p-4">[About me]</h2>

        <section className="max-w-lg">
          <p className="text-center mb-5">
            Hi, my name is <span className="secondary-text">Hinrich</span>.<br/>
            I am currently a 3rd year undergrad studying at AMA Computer College  and an intern at <a href="http://poblacion.ph/" className="secondary-text underline">Poblacion.ph</a> which is a startup eCommerce company.
          </p>

          <p className="text-center mb-5">
            I started learning how to code when I was about to go to college. After my first year, I decided to take web development as my route. Since then, I have been learning its ecosystem.
          </p>
        </section>
      </section>

      <TechStack />
    </div>
  )
}