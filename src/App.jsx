import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App(){
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container"><hr className="sep" /></div>
      <Projects />
      <div className="container"><hr className="sep" /></div>
      <Experience />
      <div className="container"><hr className="sep" /></div>
      <Contact />
      <Footer />
    </>
  )
}
