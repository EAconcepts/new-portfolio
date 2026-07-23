import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { site } from '../data/site'
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6'

const iconMap = {
  FaGithub: FaGithub,
  FaLinkedin: FaLinkedin,
  FaXTwitter: FaXTwitter,
}

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
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PROJECT_ID,
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
          <div className="section-sub">Let's discuss your project or team</div>
        </div>

        <form className="form" ref={form} onSubmit={onSubmit}>
          <input className="input" placeholder="Your name" name="user_name" required />
          <input className="input" type="email" placeholder="Email" name="user_email" required />
          <textarea className="textarea" placeholder="Message" name="message" required />
          <div className="cta-row">
            <button className="btn" type="submit" disabled={sending}>
              {sending ? 'Sending...' : 'Send Message'}
            </button>
            <div className="social-pills">
              {(site.socials || []).map(s => {
                const Icon = iconMap[s.icon]
                return (
                  <a
                    key={s.href}
                    className="social-pill"
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                  >
                    {Icon && <Icon className="social-pill-icon" />}
                    <span>{s.label}</span>
                  </a>
                )
              })}
            </div>
          </div>
          {sent && <div className="success-message">Your message has been sent!</div>}
          {error && <div className="error-message">Something went wrong. Please try again.</div>}
        </form>
      </div>
    </section>
  )
}
