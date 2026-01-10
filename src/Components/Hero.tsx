import QueryInput from "./QueryInput"

interface HeroProps {
  onQuerySubmit?: (query: string) => void
}

const Hero = ({ onQuerySubmit }: HeroProps) => {
  return (
    <section className="masthead">
      {/* Top rule */}
      <div className="rule-double mb-6"></div>

      {/* Masthead title - using COGNIVUE in caps to avoid v/b issue */}
      <h1 className="masthead-title">COGNIVUE</h1>

      {/* Subtitle */}
      <p className="masthead-subtitle">Global Intelligence Briefing</p>

      {/* Tagline */}
      <p className="masthead-tagline">
        "See the world through every lens, not just one"
      </p>

      {/* Bottom rule */}
      <div className="rule-double mt-6 mb-8"></div>

      {/* Query Input */}
      <div className="max-w-2xl mx-auto">
        <QueryInput onSubmit={onQuerySubmit} />
      </div>

      {/* Region Indicators */}
      <div className="flex items-center justify-center gap-8 mt-10 text-sm font-Helvetica text-light-secondary dark:text-dark-secondary">
        <span className="flex items-center gap-2">
          <span className="region-dot region-dot-us"></span>
          United States
        </span>
        <span className="flex items-center gap-2">
          <span className="region-dot region-dot-india"></span>
          India
        </span>
        <span className="flex items-center gap-2">
          <span className="region-dot region-dot-china"></span>
          China
        </span>
        <span className="flex items-center gap-2">
          <span className="region-dot region-dot-russia"></span>
          Russia
        </span>
      </div>
    </section>
  )
}

export default Hero
