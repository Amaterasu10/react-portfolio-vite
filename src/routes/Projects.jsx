import React, { forwardRef } from 'react'

const Projects = forwardRef(
    function Projects(props, ref) {
        return (
            <article className='min-h-screen h-fit grid-center pt-12 p-5' ref={ref}>
                <h2 className='p-4 text-center heading primary-text'>Projects</h2>
            </article>
        )
    }
)

export default Projects