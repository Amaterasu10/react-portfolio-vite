import React from 'react'

export default function Card({img, alt}) {
  return (
    <div className='w-fit p-2 cursor-pointer shadow-md hover:shadow-lg transition-shadow'>
        <img src={img} alt={alt} className='w-[15.62500rem]'/>
        <section>
            <p className='w-[15.62500rem]'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio voluptate vero doloribus porro quos aperiam omnis! Praesentium eum beatae minima?
            </p>
        </section>
    </div>
  )
}
