import React, { forwardRef } from 'react'
import Project from '../components/Project'

const Projects = forwardRef(
    function Projects(props, ref) {
        return (
            <article className='min-h-screen h-fit grid-center pt-12 p-5' ref={ref}>
                <h2 className='p-4 text-center heading2 primary-text'>Projects</h2>
                <div className='tabs-container'>
                    <ul>
                        <li>Javascript</li>
                        <li>React</li>
                    </ul>
                    
                    <Project title={'title'} description={'description'} images={'images'} labels={'labels'} />
                </div>


            </article>
        )
    }
)

export default Projects