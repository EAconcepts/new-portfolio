import { motion } from 'framer-motion'
import { site } from '../data/site'

export default function Experience(){
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Experience</h2>
          <div className="section-sub">Where I’ve worked and what I did</div>
        </div>

        <div className="grid">
          {(site.experience || []).map((e, i) => (
            <motion.div
              key={i}
              className="card"
              initial={{ opacity:0, y:6 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true, amount:.3 }}
              transition={{ duration:.35 }}
            >
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline'}}>
                <h3 style={{margin:'0 0 6px 0'}}>{e.org}</h3>
                <span className="badge">{e.period}</span>
              </div>
              <div style={{ color:'var(--muted)', marginBottom:8 }}>{e.role}</div>
              <ul style={{paddingLeft:18, marginTop:10}}>
                {(e.bullets || []).map((b, j)=>(<li key={j}>{b}</li>))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
