import React from 'react'

export default function Project({title, thumbnail, description }) {
  return (
    <article className='bg-slate-50 m-2 p-2 shadow-md flex flex-col lg:flex-row mt-5 rounded-md'>
      <img src={thumbnail} alt="Thumbnail" className='p-3'/>
      
      <section>
        <h3 className='primary-text heading3'>{title}</h3>
        <p className='p-3'>
          {description}
        </p>
      </section>
      
    </article>
  )
}
