const Footer = () => {
  return (
    <footer className="mt-16 pt-8 border-t border-light-border dark:border-dark-border">
      {/* Main Footer Content */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
        {/* Branding */}
        <div className="text-center md:text-left">
          <h3 className="font-OldLondon text-2xl text-light-text dark:text-dark-text mb-1">
            Cognivue
          </h3>
          <p className="text-sm text-light-muted dark:text-dark-muted italic font-serif">
            Truth through perspective diversity
          </p>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm font-Helvetica">
          <a href="#" className="link-subtle">
            About
          </a>
          <a href="#" className="link-subtle">
            Methodology
          </a>
          <a href="#" className="link-subtle">
            API
          </a>
          <a href="#" className="link-subtle">
            Research
          </a>
        </nav>

        {/* Region Indicators */}
        <div className="flex items-center gap-4 text-xs font-Helvetica text-light-muted dark:text-dark-muted">
          <span className="flex items-center gap-1.5">
            <span className="region-dot region-dot-us"></span>
            US
          </span>
          <span className="flex items-center gap-1.5">
            <span className="region-dot region-dot-india"></span>
            IN
          </span>
          <span className="flex items-center gap-1.5">
            <span className="region-dot region-dot-china"></span>
            CN
          </span>
          <span className="flex items-center gap-1.5">
            <span className="region-dot region-dot-russia"></span>
            RU
          </span>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-light-muted dark:text-dark-muted font-Helvetica pb-8">
        © {new Date().getFullYear()} Cognivue. Multi-regional geopolitical intelligence.
      </div>
    </footer>
  )
}

export default Footer
