interface RegionCardProps {
  region: "us" | "india" | "china" | "russia"
  flag: string
  name: string
  narrative: string
  framing: string
  claims: string[]
  sourceCount: number
  stateMediaCount: number
  independentCount: number
}

const regionColors = {
  us: "border-t-blue-600",
  india: "border-t-orange-500",
  china: "border-t-red-600",
  russia: "border-t-red-700",
}

const regionBgColors = {
  us: "bg-blue-600/5 dark:bg-blue-600/10",
  india: "bg-orange-500/5 dark:bg-orange-500/10",
  china: "bg-red-600/5 dark:bg-red-600/10",
  russia: "bg-red-700/5 dark:bg-red-700/10",
}

const RegionCard = ({
  region,
  flag,
  name,
  narrative,
  framing,
  claims,
  sourceCount,
  stateMediaCount,
  independentCount,
}: RegionCardProps) => {
  return (
    <div
      className={`region-card border-t-4 ${regionColors[region]} ${regionBgColors[region]} flex flex-col h-full`}
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-light-border/20 dark:border-dark-border/50">
        <span className="text-2xl">{flag}</span>
        <div>
          <h3 className="font-TimesNewRoman font-bold text-lg text-light-text dark:text-dark-text">
            {name}
          </h3>
          <span className="text-[10px] text-light-muted dark:text-dark-muted uppercase tracking-wider">
            Regional Perspective
          </span>
        </div>
      </div>

      {/* Narrative */}
      <div className="mb-3">
        <span className="text-[10px] font-Helvetica uppercase tracking-wider text-cognivue-blue dark:text-cognivue-blue-light font-semibold">
          Dominant Narrative
        </span>
        <p className="text-sm font-TimesNewRoman text-light-text dark:text-dark-text mt-1 leading-relaxed">
          {narrative}
        </p>
      </div>

      {/* Framing */}
      <div className="mb-3 p-2 bg-light-surface/50 dark:bg-dark-surface/30 border-l-2 border-cognivue-teal dark:border-cognivue-teal-light">
        <span className="text-[10px] font-Helvetica uppercase tracking-wider text-light-muted dark:text-dark-muted">
          Framing
        </span>
        <p className="text-xs font-EditorialNew italic text-light-text dark:text-dark-text">
          "{framing}"
        </p>
      </div>

      {/* Key Claims */}
      <div className="mb-3 flex-grow">
        <span className="text-[10px] font-Helvetica uppercase tracking-wider text-cognivue-blue dark:text-cognivue-blue-light font-semibold">
          Key Claims
        </span>
        <ul className="mt-1 space-y-1">
          {claims.map((claim, index) => (
            <li
              key={index}
              className="text-xs text-light-text dark:text-dark-text flex items-start gap-1.5"
            >
              <span className="text-cognivue-teal dark:text-cognivue-teal-light mt-0.5">
                •
              </span>
              <span>{claim}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Source Stats */}
      <div className="mt-auto pt-3 border-t border-light-border/20 dark:border-dark-border/50">
        <div className="flex justify-between text-[10px] font-Helvetica">
          <span className="text-light-muted dark:text-dark-muted">
            <strong className="text-light-text dark:text-dark-text">
              {sourceCount}
            </strong>{" "}
            sources
          </span>
          <div className="flex gap-2">
            <span className="text-amber-600 dark:text-amber-500">
              {stateMediaCount} state
            </span>
            <span className="text-green-600 dark:text-green-500">
              {independentCount} indep.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegionCard
