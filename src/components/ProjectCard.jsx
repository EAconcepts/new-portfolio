import { motion } from 'framer-motion'

export default function ProjectCard({ p }){
  return (
    <motion.article
      className="card"
      initial={{ opacity:0, y:6 }}
      whileInView={{ opacity:1, y:0 }}
      viewport={{ once:true, amount:.3 }}
      transition={{ duration:.35 }}
    >
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline'}}>
        <h3 style={{margin:'0 0 8px 0'}}>{p.title}</h3>
        <div className="badge">{(p.stack||[]).slice(0,1).join(', ')}</div>
      </div>
      <p style={{color:'var(--muted)', marginTop:0}}>{p.tagline}</p>
      <ul style={{paddingLeft: '18px', marginTop:'10px'}}>
        {(p.highlights||[]).map((h,i)=>(<li key={i}>{h}</li>))}
      </ul>
      <div className="link-row">
        {p?.links?.live && <a className="btn" href={p.links.live} target="_blank" rel="noreferrer">Live Demo</a>}
        {p?.links?.repo && <a className="btn ghost" href={p.links.repo} target="_blank" rel="noreferrer">Source</a>}
      </div>
    </motion.article>
  )
}
