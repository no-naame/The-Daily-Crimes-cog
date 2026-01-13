import { useState } from "react"
import { IoChevronDown, IoChevronUp, IoOpenOutline } from "react-icons/io5"

interface SourceCitationProps {
  number: number
  onClick?: () => void
}

const SourceCitation = ({ number, onClick }: SourceCitationProps) => {
  return (
    <sup
      onClick={onClick}
      className="source-citation"
      title={`Source ${number}`}
    >
      {number}
    </sup>
  )
}

export interface Source {
  id: number
  title: string
  outlet: string
  url?: string
  region: "us" | "india" | "china" | "russia"
  type: "independent" | "state"
}

interface SourcesListProps {
  sources: Source[]
}

const regionLabels = {
  us: "United States",
  india: "India",
  china: "China",
  russia: "Russia",
}

const regionFlags = {
  us: "🇺🇸",
  india: "🇮🇳",
  china: "🇨🇳",
  russia: "🇷🇺",
}

export const SourcesList = ({ sources }: SourcesListProps) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const independentCount = sources.filter(s => s.type === "independent").length
  const stateCount = sources.filter(s => s.type === "state").length

  const groupedSources = sources.reduce(
    (acc, source) => {
      if (!acc[source.region]) {
        acc[source.region] = []
      }
      acc[source.region].push(source)
      return acc
    },
    {} as Record<string, Source[]>
  )

  return (
    <section className="mt-12">
      {/* Collapsible Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between py-4 border-t-2 border-b border-light-divider dark:border-dark-divider group"
      >
        <div className="flex items-center gap-4">
          <h3 className="font-TimesNewRoman font-bold text-lg text-light-text dark:text-dark-text">
            Sources
          </h3>
          <div className="flex items-center gap-3 text-sm font-Helvetica">
            <span className="text-light-muted dark:text-dark-muted">
              {sources.length} total
            </span>
            <span className="text-light-border dark:text-dark-border">·</span>
            <span className="text-emerald-600 dark:text-emerald-400">
              {independentCount} independent
            </span>
            <span className="text-light-border dark:text-dark-border">·</span>
            <span className="text-amber-600 dark:text-amber-400">
              {stateCount} state media
            </span>
          </div>
        </div>
        <div className="text-light-muted dark:text-dark-muted group-hover:text-light-text dark:group-hover:text-dark-text transition-colors">
          {isExpanded ? (
            <IoChevronUp className="w-5 h-5" />
          ) : (
            <IoChevronDown className="w-5 h-5" />
          )}
        </div>
      </button>

      {/* Expandable Content */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-out ${
          isExpanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pt-6 pb-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {(Object.keys(regionLabels) as Array<keyof typeof regionLabels>).map((region) => {
            const regionSources = groupedSources[region] || []
            if (regionSources.length === 0) return null

            return (
              <div key={region}>
                {/* Region Header */}
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-light-border dark:border-dark-border">
                  <span className="text-lg">{regionFlags[region]}</span>
                  <h4 className="font-Helvetica font-semibold text-sm text-light-text dark:text-dark-text">
                    {regionLabels[region]}
                  </h4>
                  <span className="text-xs text-light-muted dark:text-dark-muted ml-auto">
                    {regionSources.length} sources
                  </span>
                </div>

                {/* Sources List */}
                <ul className="space-y-3">
                  {regionSources.map((source) => (
                    <li key={source.id} className="group">
                      <div className="flex items-start gap-3">
                        <span className="font-Helvetica font-bold text-xs text-light-muted dark:text-dark-muted w-5 flex-shrink-0 pt-0.5">
                          [{source.id}]
                        </span>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-light-text dark:text-dark-text leading-snug">
                            {source.title}
                          </p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs text-light-muted dark:text-dark-muted">
                              {source.outlet}
                            </span>
                            {source.type === "state" && (
                              <span className="text-[10px] font-Helvetica font-medium uppercase tracking-wider px-1.5 py-0.5 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 rounded">
                                State Media
                              </span>
                            )}
                          </div>
                        </div>
                        {source.url && (
                          <a
                            href={source.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <IoOpenOutline className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default SourceCitation
