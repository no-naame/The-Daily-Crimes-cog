import QueryInput from "./QueryInput"

interface HeroProps {
  onQuerySubmit?: (query: string) => void
}

const Hero = ({ onQuerySubmit }: HeroProps) => {
  return (
    <section className="text-center py-16 md:py-24">
      {/* Masthead */}
      <div className="mb-8">
        <h1 className="font-OldLondon text-6xl md:text-8xl text-light-text dark:text-dark-text mb-4">
          Cognivue
        </h1>
        <p className="text-lg md:text-xl font-TimesNewRoman text-light-secondary dark:text-dark-secondary">
          Global Intelligence Briefing
        </p>
      </div>

      {/* Tagline */}
      <p className="text-base md:text-lg text-light-secondary dark:text-dark-secondary mb-12 max-w-xl mx-auto font-serif italic">
        "See the world through every lens, not just one"
      </p>

      {/* Query Input */}
      <QueryInput onSubmit={onQuerySubmit} />

      {/* Region Indicators */}
      <div className="flex items-center justify-center gap-6 mt-12 text-sm font-Helvetica text-light-muted dark:text-dark-muted">
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
