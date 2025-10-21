import { useState } from 'react'
import { site } from '../data/site'

export default function Contact(){
  const [values, setValues] = useState({ name:'', email:'', message:'' })
  const onChange = e => setValues(v => ({ ...v, [e.target.name]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    const mailto = `mailto:${site.email}?subject=Portfolio%20Message%20from%20${encodeURIComponent(values.name)}&body=${encodeURIComponent(values.message + '\n\nFrom: ' + values.email)}`
    window.location.href = mailto
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Contact</h2>
          <div className="section-sub">Let’s discuss your project or team</div>
        </div>

        <form className="form" onSubmit={onSubmit}>
          <input className="input" placeholder="Your name" name="name" value={values.name} onChange={onChange} required />
          <input className="input" type="email" placeholder="Email" name="email" value={values.email} onChange={onChange} required />
          <textarea className="textarea" placeholder="Message" name="message" value={values.message} onChange={onChange} required />
          <div className="cta-row">
            <button className="btn" type="submit">Send Message</button>
            <div className="pills">
              {(site.socials || []).map(s => (
                <a key={s.href} className="pill" href={s.href} target="_blank" rel="noreferrer">{s.label}</a>
              ))}
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
