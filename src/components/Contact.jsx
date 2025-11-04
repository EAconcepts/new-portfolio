import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { site } from '../data/site'

export default function Contact(){
  const form = useRef()
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSending(true)
    setError(false)
    setSent(false)

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID, // get this from emailjs.com
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // get this from emailjs.com
      form.current, // get this from emailjs.com
      import.meta.env.VITE_EMAILJS_PROJECT_ID, // get this from emailjs.com
    ).then(() => {
      setSent(true)
      setSending(false)
    }).catch(() => {
      setError(true)
      setSending(false)
    })
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Contact</h2>
          <div className="section-sub">Let’s discuss your project or team</div>
        </div>

        <form className="form" ref={form} onSubmit={onSubmit}>
          <input className="input" placeholder="Your name" name="user_name" required />
          <input className="input" type="email" placeholder="Email" name="user_email" required />
          <textarea className="textarea" placeholder="Message" name="message" required />
          <div className="cta-row">
            <button className="btn" type="submit" disabled={sending}>
              {sending ? 'Sending...' : 'Send Message'}
            </button>
            <div className="pills">
              {(site.socials || []).map(s => (
                <a key={s.href} className="pill" href={s.href} target="_blank" rel="noreferrer">{s.label}</a>
              ))}
            </div>
          </div>
          {sent && <div className="success-message">Your message has been sent!</div>}
          {error && <div className="error-message">Something went wrong. Please try again.</div>}
        </form>
      </div>
    </section>
  )
}
