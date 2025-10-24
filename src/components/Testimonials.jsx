
import React,{useState} from 'react'
import { motion } from 'framer-motion'
const items=[{id:1,quote:"Rendi's design gave our brand a new soul.",author:"CEO, Local Studio"},{id:2,quote:"Highly responsive and great aesthetics.",author:"Founder, AppCo"}]
export default function Testimonials(){ const [i,setI]=useState(0); return (<div className='glass p-4 rounded-xl max-w-3xl mx-auto'><div className='flex items-center gap-4'><button onClick={()=>setI((i-1+items.length)%items.length)} className='p-2 rounded border'>‹</button><motion.blockquote key={items[i].id} initial={{opacity:0,x:20}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-20}} transition={{duration:0.36}} className='flex-1'><p className='italic'>" {items[i].quote} "</p><footer className='mt-2 text-sm opacity-70'>— {items[i].author}</footer></motion.blockquote><button onClick={()=>setI((i+1)%items.length)} className='p-2 rounded border'>›</button></div></div>) }
