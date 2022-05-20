import React from "react";
import { 
    SiHtml5, 
    SiCss3,
    SiSass, 
    SiTailwindcss, 
    SiJavascript, 
    SiReact, 
    SiTypescript,
} from 'react-icons/si';

const date = () => {
    const startedLearning = new Date(2020,5, 21);
    const currentDate = new Date();

    const difference = Math.abs(currentDate - startedLearning);
    const days = difference/(1000 * 3600 * 24)
    const years = ( (days/30) / 12 ).toFixed(1);
    
    return parseFloat(years);
}

import vite from '../favicon.svg'
export default function TechStack() {
  return (
    <>
        <h2 onClick={date} className="p-4 heading text-center">Tech Stack</h2>
        <section className="w-fit max-w-lg 2xl:max-w-screen-xl p-5 mx-auto flex justify-around flex-wrap">
            
            <div className='icon-container'>
                <SiHtml5 title='Html5' className='icon text-red-600' /> 
                <p className='text text-center'>Html</p>
            </div>

            <div className="icon-container">
                <SiCss3 title='CSS3' className='icon text-blue-600' /> 
                <p className='text text-center'>CSS</p>
            </div>

            <div className="icon-container">
                <SiSass title='Sass' className='icon text-pink-600' /> 
                <p className='text text-center'>Sass</p>
            </div>

            <div className="icon-container">
                <SiTailwindcss title='TailwindCSS' className='icon text-teal-500' /> 
                <p className='text text-center'>Tailwind</p>
            </div>

            <div className="icon-container">
                <div className='bg-black w-fit mx-auto'>
                    <SiJavascript title='JavaScript' className='icon text-yellow-500 mx-0' /> 
                </div>
                <p className='text text-center'>JavaScript</p>
            </div>

            <section className='p-4 mt-5 w-full'>
                <h3 className='heading2 text-center'>Learning</h3>
                <div className='flex justify-around flex-wrap mt-2'>
                    <div className="icon-container">
                        <SiReact title='React.js' className='icon text-cyan-500' /> 
                        <p className='text text-center'>React.js</p>
                    </div>

                    <div className="icon-container">
                        <SiTypescript title='Typscript' className='icon text-sky-700' />
                        <p className='text text-center'>Typscript</p> 
                    </div>
                    
                    <div className="icon-container">
                        <img src={vite} title='vite' className='icon max-w-[1.25rem] md:max-w-[2.25rem] 2xl:max-w-[6rem]' />
                        <p className='text text-center'>Vite</p>
                    </div>
                </div>
            </section>
        </section>
    </>
  )
}
  