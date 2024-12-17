import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { BiLinkExternal } from "react-icons/bi";

export default function Project({title, thumbnail, description, labels, links }) {
  return (
    <article className='bg-slate-50 m-2 px-2 py-7 shadow-md flex flex-col xl:flex-row mt-5 rounded-md'>
      <img src={thumbnail} alt="Thumbnail" className='p-3 lg:max-w-lg h-fit mx-auto'/>
      
      <section>
        <h3 className='primary-text heading3'>{title}</h3>
        <p className='p-3 pt-1 text-lg'>
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
    html: {
      bg: 'bg-red-300', 
      hover: 'hover:bg-red-400'
    },
    css: {
      bg: 'bg-blue-300',
      hover: 'hover:bg-blue-400'
    },
    scss: {
      bg: 'bg-pink-300',
      hover: 'hover:bg-pink-400'
    },
    tailwind: {
      bg: 'bg-teal-300',
      hover: 'hover:bg-teal-400'
    },
    javascript: {
      bg: 'bg-yellow-300',
      hover: 'hover:bg-yellow-400'
    },
    react: {
      bg: 'bg-cyan-300',
      hover: 'hover:bg-cyan-400'
    },
    typescript: {
      bg: 'bg-sky-300',
      hover: 'hover:bg-sky-400'
    },
    vite: {
      bg: 'bg-indigo-300',
      hover: 'hover:bg-indigo-400'
    }
  }

  const defaultColor = {
    bg: 'bg-gray-300',
    hover: 'hover:bg-gray-400',
  };

  return (
  <ul className='flex flex-wrap'>{
    labels.map((label, idx) => {

      const normalizedLabel = label.toLowerCase();
      const { bg, hover } = colors[normalizedLabel] || defaultColor;

      return (
        <li
          key={idx}
          className={`cursor-default border-2 py-1 px-4 mx-2 ${bg} ${hover}`}
        >
          {label}
        </li>
      );

    })
  }</ul>
);
}