
import React from 'react'
import { useParams, Link } from 'react-router-dom'
export default function ProjectDetail(){ const { id } = useParams(); return (<main className='min-h-screen p-10'><div className='glass p-6 rounded-2xl max-w-4xl mx-auto'><h2 className='text-2xl font-bold mb-2'>Project Detail #{id}</h2><p className='text-gray-700 dark:text-gray-300'>Detailed description and images for project {id}. Replace this content with your real case study and process notes.</p><Link to='/portfolio' className='inline-block mt-4 px-4 py-2 rounded border'>Back</Link></div></main>) }
