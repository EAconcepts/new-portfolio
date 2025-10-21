import { site } from '../data/site'

export default function Footer(){
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container">
        © {year} {site.name || 'Your Name'} — Built with React
      </div>
    </footer>
  )
}
