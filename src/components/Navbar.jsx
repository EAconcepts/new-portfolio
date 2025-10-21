import { useEffect, useState } from 'react'
import { site } from '../data/site'

export default function Navbar(){
  const [active, setActive] = useState('home')

  useEffect(()=>{
    const onScroll = () => {
      const sections = ['home','projects','experience','contact']
      const offsets = sections.map(id => {
        const el = document.getElementById(id)
        return { id, top: el ? el.getBoundingClientRect().top : Infinity }
      })
      const current = offsets.find(o => o.top > 0) || offsets[offsets.length-1]
      setActive(current?.id || 'home')
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const to = (id) => (e)=>{
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav className="nav">
      <div className="container nav-inner">
        <div className="brand">{site.name || 'Your Name'}</div>
        <div className="nav-links">
          <a href="#home" onClick={to('home')} className={active==='home'?'active':''}>Home</a>
          <a href="#projects" onClick={to('projects')} className={active==='projects'?'active':''}>Projects</a>
          <a href="#experience" onClick={to('experience')} className={active==='experience'?'active':''}>Experience</a>
          <a href="#contact" onClick={to('contact')} className={active==='contact'?'active':''}>Contact</a>
        </div>
      </div>
    </nav>
  )
}
