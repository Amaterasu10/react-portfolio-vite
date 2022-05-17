import TechStack from '../components/TechStack';
import blobWebm from "../assets/images/blob.webm";
import blobMp4 from "../assets/images/blob.mp4";
export default function About() {
  const blob = useRef(null);
  const tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 2 }});
  useEffect(()=> {
    
    gsap.fromTo(blob.current, {opacity: 0}, {opacity: 1, duration: 5});
    
  },[])
  return (
    <>
      <section className='min-h-screen h-fit flex items-center pt-5 bg-no-repeat bg-contain bg-right relative'>
        <video autoPlay loop muted playsInline className='absolute z-0 right-0'>
          <source src={blobWebm} type="video/webm"/>
          <source src={blobMp4} type="video/mp4"/>
        </video>
        <div className='absolute z-0 left-0 right-0 top-0 bottom-0 '></div>

        <section className="max-w-3xl h-fit p-5 sm:pl-24 z-[1]">
          <h2 className='pb-2 text-center sm:text-left text-4xl md:text-6xl primary-text'>
            About me
          </h2>
          <p 
            className='sm:text-xl mb-3 text-center sm:text-left pb-1 text-stone-600'
          >
            Hi, my name is <span className="primary-text">Hinrich</span>.<br/>
            I am currently a 3rd year undergrad studying at AMA Computer College  and an intern at <a className="primary-text underline" href="http://poblacion.ph/">Poblacion.ph</a> which is a startup eCommerce company.
          </p>

          <p 
            className='sm:text-xl mb-3 text-center sm:text-left pb-1 text-stone-600'
          >
            I started learning how to code when I was about to go to college. After my first year, I decided to take web development as my route. Since then, I have been learning its ecosystem.
          </p>
        </section>
      </section>

      <section className='min-h-screen h-fit grid place-content-center'>
        <TechStack />
      </section>
    </>
  )
}