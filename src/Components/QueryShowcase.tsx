import { IoTime, IoNewspaper, IoGlobe, IoCheckmarkCircle } from "react-icons/io5"

const QueryShowcase = () => {
  return (
    <section className="query-showcase my-6">
      {/* Header */}
      <div className="text-center mb-4">
        <span className="text-xs font-Helvetica uppercase tracking-widest text-cognivue-blue dark:text-cognivue-blue-light font-semibold">
          Latest Global Analysis
        </span>
      </div>

      {/* Query Display */}
      <div className="text-center mb-6">
        <h2 className="font-TimesNewRoman text-2xl md:text-4xl font-bold text-light-text dark:text-dark-text leading-tight">
          "How is Trump's tariff policy being covered globally?"
        </h2>
        <p className="text-sm text-light-muted dark:text-dark-muted mt-2 font-EditorialNew">
          Cross-regional narrative analysis across 4 geopolitical perspectives
        </p>
      </div>

      {/* Region Pills */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        <span className="px-3 py-1.5 bg-blue-600/10 dark:bg-blue-600/20 text-blue-600 dark:text-blue-400 rounded-full text-sm font-Helvetica flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-blue-600"></span>
          United States
        </span>
        <span className="px-3 py-1.5 bg-orange-500/10 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 rounded-full text-sm font-Helvetica flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          India
        </span>
        <span className="px-3 py-1.5 bg-red-600/10 dark:bg-red-600/20 text-red-600 dark:text-red-400 rounded-full text-sm font-Helvetica flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-red-600"></span>
          China
        </span>
        <span className="px-3 py-1.5 bg-red-700/10 dark:bg-red-700/20 text-red-700 dark:text-red-400 rounded-full text-sm font-Helvetica flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-red-700"></span>
          Russia
        </span>
      </div>

      {/* Stats Row */}
      <div className="flex flex-wrap justify-center gap-6 text-sm font-Helvetica border-t border-light-border/20 dark:border-dark-border/50 pt-4">
        <div className="flex items-center gap-2 text-light-muted dark:text-dark-muted">
          <IoTime className="text-cognivue-blue dark:text-cognivue-blue-light" />
          <span>
            Analysis completed in{" "}
            <strong className="text-light-text dark:text-dark-text">
              2m 47s
            </strong>
          </span>
        </div>
        <div className="flex items-center gap-2 text-light-muted dark:text-dark-muted">
          <IoNewspaper className="text-cognivue-teal dark:text-cognivue-teal-light" />
          <span>
            <strong className="text-light-text dark:text-dark-text">54</strong>{" "}
            sources analyzed
          </span>
        </div>
        <div className="flex items-center gap-2 text-light-muted dark:text-dark-muted">
          <IoGlobe className="text-cognivue-gold-dark" />
          <span>
            <strong className="text-light-text dark:text-dark-text">4</strong>{" "}
            regions covered
          </span>
        </div>
        <div className="flex items-center gap-2 text-light-muted dark:text-dark-muted">
          <IoCheckmarkCircle className="text-green-600 dark:text-green-500" />
          <span>
            <strong className="text-light-text dark:text-dark-text">95%</strong>{" "}
            extraction rate
          </span>
        </div>
      </div>
    </section>
  )
}

export default QueryShowcase
