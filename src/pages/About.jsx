
import React from 'react'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
export default function About(){ return (<main className='min-h-screen p-10'><div className='glass p-6 rounded-2xl max-w-4xl mx-auto'><h2 className='text-2xl font-bold'>About — Rendi Febriansyah</h2><p className='mt-3 text-gray-700 dark:text-gray-300'>I’m a graphic designer specializing in brand identity, editorial layout, and UI assets. I enjoy creating calm, refined visuals with purposeful details.</p></div><div className='glass p-6 rounded-2xl mt-6 max-w-4xl mx-auto'><h3 className='font-semibold mb-3'>What I Do</h3><Services /></div><div className='space-y-4 mt-6 max-w-4xl mx-auto'><h3 className='text-xl font-semibold'>Testimonials</h3><Testimonials /></div></main>) }
