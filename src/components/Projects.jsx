import { site } from '../data/site'
import ProjectCard from './ProjectCard'

export default function Projects(){
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <div className="section-sub">A few things I’ve shipped lately</div>
        </div>

        <div className="grid">
          {(site.projects || []).map((p, i) => (
            <ProjectCard key={i} p={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
