import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { BiLinkExternal } from "react-icons/bi";

export default function Project({title, thumbnail, description, labels, links }) {
  return (
    <article className='bg-slate-50 m-2 px-2 py-7 shadow-md flex flex-col xl:flex-row mt-5 rounded-md'>
      <img src={thumbnail} alt="Thumbnail" className='p-3 lg:max-w-lg h-fit mx-auto'/>
      
      <section>
        <h3 className='primary-text heading3'>{title}</h3>
        <p className='p-3 pt-1'>
          {description}
        </p>

        <section className='flex flex-wrap'>
          <section className='flex mt-2'>

            <a href={links.github} target="_blank">
              <div className='border-2 py-1 px-4 mx-2 flex items-center'>
                
                <span className='px-2'>Github</span>
                  <FaGithub fontSize={'1.3rem'}/>
              </div>
            </a>

            <a href={links.live} target="_blank">
              <div className='border-2 py-1 px-4 mx-2 flex items-center'>
                <span className='px-2'>Live</span>
                <BiLinkExternal fontSize={'1.3rem'}/>
              </div>
            </a>

          </section>

          <section className='w-auto mt-2'>
            <TechLabels labels={labels}/>
          </section>
        </section>
      </section>
      
    </article>
  )
}


const TechLabels = ({labels}) => {
  return (
    <ul className='flex flex-wrap'>
      {
        labels.map( (label, idx) => {
          return <li key={idx} className='border-2 py-1 px-4 mx-2'>{label}</li>
        })
      }
    </ul>
  )
}