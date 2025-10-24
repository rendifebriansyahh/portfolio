
import React, { useEffect, useRef } from 'react'
export default function Cursor(){
  const ref = useRef()
  useEffect(()=>{
    const el = ref.current
    function move(e){ el.style.left = e.clientX + 'px'; el.style.top = e.clientY + 'px' }
    function down(){ el.classList.add('large') }
    function up(){ el.classList.remove('large') }
    window.addEventListener('mousemove', move)
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup', up)
    return ()=>{ window.removeEventListener('mousemove', move); window.removeEventListener('mousedown', down); window.removeEventListener('mouseup', up) }
  },[])
  return <div ref={ref} className='custom-cursor' />
}
