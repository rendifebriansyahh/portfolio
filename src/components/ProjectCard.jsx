
import React from 'react'
import { Link } from 'react-router-dom'
export default function ProjectCard({ project }) {
  return (
    <article className='project-card rounded-xl overflow-hidden border p-2 bg-white/60 dark:bg-black/50 backdrop-blur transition transition-transform duration-300 hover:scale-105'>
      <div className='aspect-[16/10] overflow-hidden'><img src={project.image} alt={project.title} className='w-full h-full object-cover transition-transform duration-300 ease-out' loading='lazy' /></div>
      <div className='p-3'>
        <h3 className='font-medium text-[#101012] dark:text-gray-100'>{project.title}</h3>
        <p className='text-xs opacity-75'>{project.desc}</p>
        <div className='mt-3 flex gap-2'><Link to={`/project/${project.id}`} className='px-3 py-1 rounded border hover-scale'>Open</Link><a href={project.image} target='_blank' rel='noreferrer' className='px-3 py-1 rounded border hover-scale'>View</a></div>
      </div>
    </article>
  )
}
