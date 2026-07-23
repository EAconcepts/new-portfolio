import { site } from "../data/site";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const iconMap = {
  FaGithub: FaGithub,
  FaLinkedin: FaLinkedin,
  FaXTwitter: FaXTwitter,
};

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {year} {site.name || ""}</span>
        <div className="footer-socials">
          {(site.socials || []).map((s) => {
            const Icon = iconMap[s.icon];
            return (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="social-icon-link"
                title={s.label}
              >
                {Icon && <Icon />}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
