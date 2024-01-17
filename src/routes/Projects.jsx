import React, { forwardRef } from 'react'
import Project from '../components/Project'
import { BsNutFill } from "react-icons/bs";

const Projects = forwardRef(
    function Projects(props, ref) {
        return (
            <article className='min-h-screen h-fit grid-center pt-12 p-5 content-center' ref={ref}>
               
              <h2 className='p-4 text-center heading2 primary-text'>Projects</h2>

              <div className='flex items-center'>
                <h2 className='heading3'>Work in progress </h2><BsNutFill  className='animate-spin' fontSize={"2rem"}/>
              </div>
            </article>
        )
    }
)

export default Projects