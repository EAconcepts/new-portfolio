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
      <h3 style={{margin:'0 0 6px 0'}}>{p.title}</h3>
      <p style={{color:'var(--muted)', marginTop:0, marginBottom:10}}>{p.tagline}</p>

      {/* Full stack pills */}
      <div style={{display:'flex', flexWrap:'wrap', gap:6, marginBottom:12}}>
        {(p.stack||[]).map((s,i)=>(
          <span className="badge" key={i}>{s}</span>
        ))}
      </div>

      <ul style={{paddingLeft: '18px', margin:'0 0 12px 0'}}>
        {(p.highlights||[]).map((h,i)=>(<li key={i}>{h}</li>))}
      </ul>

      <div className="link-row">
        {p?.links?.live && <a className="btn" href={p.links.live} target="_blank" rel="noreferrer">Live Demo</a>}
        {p?.links?.repo ? (
          <a className="btn ghost" href={p.links.repo} target="_blank" rel="noreferrer">Source</a>
        ) : (
          <button className="btn ghost disabled" disabled style={{ opacity: 0.5, cursor: 'not-allowed' }}>Source (Private)</button>
        )}
      </div>
    </motion.article>
  )
}
