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

// Color accents per region - subtle top border
const regionAccents = {
  us: "border-t-[#1E3A5F]",
  india: "border-t-[#D97706]",
  china: "border-t-[#DC2626]",
  russia: "border-t-[#7C3AED]",
}

const RegionCard = ({ data }: RegionCardProps) => {
  const statePercentage = Math.round((data.stateMediaCount / data.sourceCount) * 100)

  return (
    <article className={`bg-light-surface dark:bg-dark-surface rounded-sm border-t-4 ${regionAccents[data.region]}`}>
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{data.flag}</span>
            <h3 className="font-TimesNewRoman font-bold text-xl text-light-text dark:text-dark-text">
              {data.name}
            </h3>
          </div>
          <div className="text-right">
            <span className="text-2xl font-TimesNewRoman font-bold text-light-text dark:text-dark-text">
              {data.sourceCount}
            </span>
            <span className="text-xs font-Helvetica text-light-muted dark:text-dark-muted block">
              sources
            </span>
          </div>
        </div>

        {/* Narrative */}
        <div className="mb-5">
          <p className="text-light-text dark:text-dark-text text-base leading-relaxed">
            {data.narrative}
          </p>
        </div>

        {/* Source composition bar */}
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-Helvetica text-light-muted dark:text-dark-muted">Source composition</span>
          </div>
          <div className="h-1.5 bg-light-border dark:bg-dark-border rounded-full overflow-hidden flex">
            <div
              className="h-full bg-emerald-500"
              style={{ width: `${100 - statePercentage}%` }}
            />
            <div
              className="h-full bg-amber-500"
              style={{ width: `${statePercentage}%` }}
            />
          </div>
          <div className="flex justify-between mt-2 text-xs font-Helvetica">
            <span className="text-emerald-600 dark:text-emerald-400">
              {data.independentCount} independent
            </span>
            <span className="text-amber-600 dark:text-amber-400">
              {data.stateMediaCount} state media
            </span>
          </div>
        </div>

        {/* Key Claims */}
        <div className="border-t border-light-border dark:border-dark-border pt-4">
          <h4 className="text-xs font-Helvetica font-semibold uppercase tracking-wider text-light-muted dark:text-dark-muted mb-3">
            Key Claims
          </h4>
          <ul className="space-y-2">
            {data.claims.map((claim, index) => (
              <li
                key={index}
                className="text-sm text-light-secondary dark:text-dark-secondary leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-light-muted dark:before:bg-dark-muted"
              >
                {claim}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}

export default RegionCard
