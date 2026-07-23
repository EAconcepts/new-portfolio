import { motion } from "framer-motion";
import { site } from "../data/site";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import avatar from "/avatar.jpg";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="kicker">Open to new opportunities</div>
          <h1 className="h1">{site.role || "Full‑Stack Engineer"}</h1>
          <p className="sub">
            Full-Stack Engineer with 4+ years building scalable products
            end&#8209;to&#8209;end. I lead teams, architect backends, and ship
            polished UIs — from React &amp; Next.js on the front to NestJS,
            PostgreSQL &amp; Redis on the back.
          </p>

          {/* Stats bar */}
          <div className="stats-bar">
            {(site.stats || []).map((s) => (
              <div className="stat-item" key={s.label}>
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="pills">
            {(site.tech || []).slice(0, 15).map((t) => (
              <span className="pill" key={t}>
                {t}
              </span>
            ))}
          </div>
          <div className="cta-row">
            <a className="btn" href="#projects">
              View Projects <FaArrowRight style={{ marginLeft: 8 }} />
            </a>
            <a
              target="_blank"
              className="btn ghost"
              href="https://flowcv.com/resume/jcaak23ct9"
              download
            >
              <FaDownload style={{ marginRight: 8 }} /> Download Resume
            </a>
          </div>
        </motion.div>
        <motion.div
          className="avatar"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <img
            src={avatar}
            style={{ width: "100%", objectFit: "cover", objectPosition: "top" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
