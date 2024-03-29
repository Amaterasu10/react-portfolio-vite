import React, { forwardRef } from 'react'
import Project from '../components/Project'
import { BsNutFill } from "react-icons/bs";

const Projects = forwardRef(
    function Projects(props, ref) {
        return (
            <article className='min-h-screen h-fit grid-center pt-12 p-5 content-center center-container' ref={ref}>
               
              <h2 className='p-4 text-center heading2 primary-text'>Projects</h2>

              <div className='flex items-center'>
                <h2 className='heading3'>Work in progress </h2><BsNutFill  className='animate-spin' fontSize={"2rem"}/>
              </div>

              <div className='w-full md:w-[75%]'>
                <Project 
                title='General Images' 
                thumbnail={'https://placehold.co/300x200'} 
                description={`The very first complete website that I created. I learned all the basic's of web development from this website, from Html, CSS, SCSS, Javascript, API integration, Lazy loading, modular JS, and many more.`}
                />
                <Project 
                title='CSV parser and sorter' 
                thumbnail={'https://placehold.co/300x200'}
                description={`This website is capable of sorting up to 100K lines of CSV. I created this to provide an automated(through parsing) CSV sorter while removing the need to input any complicated commands, contrary to some existing solutions.`}
                />
              </div>
              
            </article>
        )
    }
)

export default Projects