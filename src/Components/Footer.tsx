import Slider from "./Slider"
import { IoGlobeSharp } from "react-icons/io5"

const Footer = () => {
  return (
    <div className="select-none">
      <Slider />

      {/* Main Footer */}
      <div className="py-6 border-t-2 border-light-border/20 dark:border-dark-border">
        {/* Top Row - Branding and Tagline */}
        <div className="text-center mb-4">
          <h3 className="font-OldLondon text-3xl text-light-text dark:text-dark-text">
            Cognivue
          </h3>
          <p className="text-xs font-EditorialNew text-light-muted dark:text-dark-muted italic">
            "Truth emerges from the intersection of perspectives, not the
            dominance of one."
          </p>
        </div>

        {/* Middle Row - Links */}
        <div className="flex flex-wrap justify-center gap-4 text-sm font-Helvetica mb-4">
          <a
            className="text-light-muted dark:text-dark-muted hover:text-cognivue-blue dark:hover:text-cognivue-blue-light transition-colors duration-300"
            href="#"
          >
            About
          </a>
          <span className="text-light-border/30 dark:text-dark-border">|</span>
          <a
            className="text-light-muted dark:text-dark-muted hover:text-cognivue-blue dark:hover:text-cognivue-blue-light transition-colors duration-300"
            href="#"
          >
            Methodology
          </a>
          <span className="text-light-border/30 dark:text-dark-border">|</span>
          <a
            className="text-light-muted dark:text-dark-muted hover:text-cognivue-blue dark:hover:text-cognivue-blue-light transition-colors duration-300"
            href="#"
          >
            API Access
          </a>
          <span className="text-light-border/30 dark:text-dark-border">|</span>
          <a
            className="text-light-muted dark:text-dark-muted hover:text-cognivue-blue dark:hover:text-cognivue-blue-light transition-colors duration-300"
            href="#"
          >
            Research
          </a>
          <span className="text-light-border/30 dark:text-dark-border">|</span>
          <a
            className="text-light-muted dark:text-dark-muted hover:text-cognivue-blue dark:hover:text-cognivue-blue-light transition-colors duration-300"
            href="#"
          >
            Contact
          </a>
        </div>

        {/* Bottom Row - Copyright and Data Info */}
        <div className="flex flex-wrap justify-between items-center px-6 text-xs font-Helvetica">
          <div className="flex items-center gap-2 text-light-muted dark:text-dark-muted">
            <IoGlobeSharp className="text-cognivue-blue dark:text-cognivue-blue-light" />
            <span>
              Sources from{" "}
              <strong className="text-light-text dark:text-dark-text">
                4 regions
              </strong>
              ,{" "}
              <strong className="text-light-text dark:text-dark-text">
                4 languages
              </strong>
            </span>
          </div>

          <div className="text-light-muted dark:text-dark-muted">
            Cognivue © {new Date().getFullYear()} | Multi-Regional Geopolitical
            Intelligence
          </div>

          <div className="flex gap-3">
            <a
              className="text-light-muted dark:text-dark-muted hover:text-cognivue-blue dark:hover:text-cognivue-blue-light transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com"
            >
              GitHub
            </a>
            <a
              className="text-light-muted dark:text-dark-muted hover:text-cognivue-blue dark:hover:text-cognivue-blue-light transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
