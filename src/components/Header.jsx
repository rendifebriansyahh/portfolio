
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import InteractiveProfile from './InteractiveProfile'
import AuroraButton from "../components/AuroraButton";

export default function Header({ isDark, setIsDark }){
  const [open,setOpen] = useState(false)
  function triggerThemeToggle(e){
    const overlay = document.getElementById('theme-overlay')
    if(overlay){
      const x = (e.clientX / window.innerWidth) * 100
      const y = (e.clientY / window.innerHeight) * 100
      overlay.style.setProperty('--x', `${x}%`)
      overlay.style.setProperty('--y', `${y}%`)
      overlay.classList.add('active')
      setTimeout(()=> setIsDark(!isDark), 80)
      setTimeout(()=> overlay.classList.remove('active'), 900)
    } else { setIsDark(!isDark) }
  }
  return (
    <header className='fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-6xl'>
      <div className='glass p-3 flex items-center justify-between rounded-2xl'>
        <div className='flex items-center gap-3'>
          <Link to='/' className='flex items-center gap-3'>
            <div className='w-11 h-11 rounded-full overflow-hidden border'><InteractiveProfile small/></div>
            <div className='leading-none'>
              <div className='text-sm opacity-70'>Rendi</div>
              <div className='font-semibold text-lg -mt-1 h1-gradient'>Febriansyah</div>
            </div>
          </Link>
          <div className='text-xs opacity-70 tracking-widest ml-2 hidden sm:block'>Graphic Designer</div>
          <nav className='hidden md:flex gap-4 ml-6'>
            <NavLink to='/' className={({isActive})=>isActive?'font-semibold':'hover:opacity-80'}>Home</NavLink>
            <NavLink to='/about' className={({isActive})=>isActive?'font-semibold':'hover:opacity-80'}>About</NavLink>
            <NavLink to='/portfolio' className={({isActive})=>isActive?'font-semibold':'hover:opacity-80'}>Portfolio</NavLink>
            <NavLink to='/contact' className={({isActive})=>isActive?'font-semibold':'hover:opacity-80'}>Contact</NavLink>
          </nav>
        </div>
        <div className='flex items-center gap-3'>
          <a href='/cv.pdf' download className='px-3 py-2 rounded-lg text-sm font-medium'><AuroraButton><span>Download CV</span></AuroraButton></a>
          <button aria-label='toggle theme' onClick={triggerThemeToggle} className='relative w-12 h-8 rounded-full p-1 bg-white/60 dark:bg-black/60 border hidden sm:inline'>
            <div className='absolute inset-0 flex items-center justify-between px-1'><div className='text-xs'>☀️</div><div className='text-xs'>🌙</div></div>
            <div className='absolute top-1 left-1 w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700 shadow' style={{transform: isDark? 'translateX(22px)':'translateX(0)', transition: 'transform .28s'}}/>
          </button>
          <div className='md:hidden'>
            <button onClick={()=> setOpen(o=>!o)} className='p-2 rounded-md glass'>☰</button>
            {open && (<div className='absolute right-4 mt-12 glass p-4 rounded-xl w-44'><NavLink to='/' onClick={()=>setOpen(false)} className='block py-2'>Home</NavLink><NavLink to='/about' onClick={()=>setOpen(false)} className='block py-2'>About</NavLink><NavLink to='/portfolio' onClick={()=>setOpen(false)} className='block py-2'>Portfolio</NavLink><NavLink to='/contact' onClick={()=>setOpen(false)} className='block py-2'>Contact</NavLink></div>)}
          </div>
        </div>
      </div>
    </header>
  )
}
