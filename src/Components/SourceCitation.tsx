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

export const SourcesList = ({ sources }: SourcesListProps) => {
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
    <section className="sources-section">
      <h3 className="sources-section-title">Sources</h3>

      {Object.entries(groupedSources).map(([region, regionSources]) => (
        <div key={region} className="sources-region">
          <h4 className="sources-region-title">
            {regionLabels[region as keyof typeof regionLabels]}
          </h4>
          <div className="sources-list">
            {regionSources.map((source) => (
              <div key={source.id} className="source-item">
                <span className="source-item-number">[{source.id}]</span>
                <span>
                  {source.title}
                  <span className="text-light-muted dark:text-dark-muted ml-1">
                    — {source.outlet}
                    {source.type === "state" && (
                      <span className="ml-1 text-amber-600 dark:text-amber-400">(State Media)</span>
                    )}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

export default SourceCitation
