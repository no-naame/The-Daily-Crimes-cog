export interface RegionData {
  region: "us" | "india" | "china" | "russia"
  flag: string
  name: string
  narrative: string
  claims: string[]
  sourceCount: number
  stateMediaCount: number
  independentCount: number
}

interface RegionCardProps {
  data: RegionData
}

const regionClassMap = {
  us: "region-card-us",
  india: "region-card-india",
  china: "region-card-china",
  russia: "region-card-russia",
}

const RegionCard = ({ data }: RegionCardProps) => {
  return (
    <article className={`region-card ${regionClassMap[data.region]} flex flex-col h-full`}>
      {/* Header */}
      <div className="flex items-center gap-3 mb-4 pb-3 border-b border-light-border dark:border-dark-border">
        <span className="text-2xl">{data.flag}</span>
        <h3 className="font-TimesNewRoman font-semibold text-lg text-light-text dark:text-dark-text">
          {data.name}
        </h3>
      </div>

      {/* Narrative */}
      <div className="mb-5">
        <span className="text-xs font-Helvetica uppercase tracking-wider text-light-muted dark:text-dark-muted font-medium block mb-2">
          Dominant Narrative
        </span>
        <p className="text-sm text-light-text dark:text-dark-text leading-relaxed">
          {data.narrative}
        </p>
      </div>

      {/* Key Claims */}
      <div className="mb-5 flex-grow">
        <span className="text-xs font-Helvetica uppercase tracking-wider text-light-muted dark:text-dark-muted font-medium block mb-2">
          Key Claims
        </span>
        <ul className="space-y-2">
          {data.claims.map((claim, index) => (
            <li
              key={index}
              className="text-sm text-light-secondary dark:text-dark-secondary flex items-start gap-2"
            >
              <span className="text-accent-teal dark:text-accent-sage mt-0.5 flex-shrink-0">
                •
              </span>
              <span>{claim}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Source Stats */}
      <div className="pt-4 border-t border-light-border dark:border-dark-border mt-auto">
        <div className="flex items-center justify-between text-xs font-Helvetica">
          <span className="text-light-muted dark:text-dark-muted">
            <strong className="text-light-text dark:text-dark-text">
              {data.sourceCount}
            </strong>{" "}
            sources
          </span>
          <div className="flex gap-3">
            <span className="text-emerald-600 dark:text-emerald-400">
              {data.independentCount} independent
            </span>
            <span className="text-amber-600 dark:text-amber-400">
              {data.stateMediaCount} state
            </span>
          </div>
        </div>
      </div>
    </article>
  )
}

export default RegionCard
