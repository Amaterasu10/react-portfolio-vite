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
              <div className='border-2 py-1 px-4 mx-2 flex items-center hover:bg-stone-900 hover:text-slate-200'>
                
                <span className='px-2'>Github</span>
                  <FaGithub fontSize={'1.3rem'}/>
              </div>
            </a>

            <a href={links.live} target="_blank">
              <div className='border-2 py-1 px-4 mx-2 flex items-center hover:bg-stone-900 hover:text-slate-200'>
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

  const colors = {
    html: 'bg-red-300',
    css: 'bg-blue-300',
    scss: 'bg-pink-300',
    tailwind: 'bg-teal-300',
    javascript: 'bg-yellow-300',
    react: 'bg-cyan-300',
    typescript: 'bg-sky-300',
    vite: 'bg-indigo-300'
  }

  return (
    <ul className='flex flex-wrap'>
      {
        labels.map( (label, idx) => {
          return <li key={idx} className={`cursor-default border-2 py-1 px-4 mx-2 ${colors[label.toLowerCase()]}`}>{label}</li>
        })
      }
    </ul>
  )
}