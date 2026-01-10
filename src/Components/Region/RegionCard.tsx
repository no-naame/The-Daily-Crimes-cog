export interface RegionData {
  region: "us" | "india" | "china" | "russia"
  flag: string
  name: string
  narrative: string
  claims: string[]
  sourceCount: number
  stateMediaCount: number
  independentCount: number
  sources?: { id: number; title: string; outlet: string }[]
}

interface RegionCardProps {
  data: RegionData
}

const RegionCard = ({ data }: RegionCardProps) => {
  return (
    <article className="region-column">
      {/* Header - Newspaper column header */}
      <div className="region-column-header">
        <span className="region-column-flag">{data.flag}</span>
        <span className="region-column-name">{data.name}</span>
      </div>

      {/* Dateline */}
      <div className="region-column-dateline">
        Dominant Narrative
      </div>

      {/* Narrative - Lead paragraph */}
      <p className="region-column-narrative">
        {data.narrative}
      </p>

      {/* Key Claims Section */}
      <div className="region-column-section">
        <div className="region-column-section-title">Key Claims</div>
        {data.claims.map((claim, index) => (
          <div key={index} className="region-column-claim">
            <span>{claim}</span>
          </div>
        ))}
      </div>

      {/* Source Stats */}
      <div className="region-column-sources">
        <span>
          <strong>{data.sourceCount}</strong> sources
        </span>
        <span>
          {data.independentCount} independent · {data.stateMediaCount} state
        </span>
      </div>
    </article>
  )
}

export default RegionCard
