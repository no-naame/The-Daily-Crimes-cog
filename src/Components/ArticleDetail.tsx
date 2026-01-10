import { IoArrowBack, IoTime, IoNewspaper, IoCheckmarkCircle } from "react-icons/io5"
import RegionCard, { RegionData } from "./Region/RegionCard"

interface ArticleDetailProps {
  query: string
  date: string
  sourceCount: number
  onBack: () => void
}

// Sample data - in real app this would come from API
const sampleRegions: RegionData[] = [
  {
    region: "us",
    flag: "🇺🇸",
    name: "United States",
    narrative:
      "Coverage emphasizes economic security and protection of American jobs. Tariffs framed as necessary response to unfair trade practices.",
    claims: [
      "Tariffs will bring manufacturing jobs back",
      "China has engaged in systematic IP theft",
      "Trade deficit with China is unsustainable",
    ],
    sourceCount: 15,
    stateMediaCount: 2,
    independentCount: 13,
  },
  {
    region: "india",
    flag: "🇮🇳",
    name: "India",
    narrative:
      "Balanced coverage highlighting potential opportunities for Indian manufacturing as companies seek alternatives to China.",
    claims: [
      "India could benefit from supply chain shifts",
      "Make in India gains new relevance",
      "Non-aligned position provides leverage",
    ],
    sourceCount: 14,
    stateMediaCount: 4,
    independentCount: 10,
  },
  {
    region: "china",
    flag: "🇨🇳",
    name: "China",
    narrative:
      "State media portrays tariffs as Western aggression and an attempt to contain China's rise. Emphasizes technological self-reliance.",
    claims: [
      "US tariffs violate WTO rules",
      "China's economy can withstand pressure",
      "American consumers will pay the cost",
    ],
    sourceCount: 12,
    stateMediaCount: 9,
    independentCount: 3,
  },
  {
    region: "russia",
    flag: "🇷🇺",
    name: "Russia",
    narrative:
      "Coverage frames the trade war as evidence of Western hegemony's decline and the emergence of a multipolar world order.",
    claims: [
      "Trade war accelerates de-dollarization",
      "US losing influence as China rises",
      "BRICS nations benefit from this conflict",
    ],
    sourceCount: 13,
    stateMediaCount: 8,
    independentCount: 5,
  },
]

const consensusPoints = [
  "Tariffs of 50% were imposed on Chinese imports",
  "China responded with retaliatory measures",
  "Trade volume between both nations declined significantly",
]

const divergencePoints = [
  "US frames as 'economic defense' vs China frames as 'trade aggression'",
  "India sees opportunity while Russia sees Western decline",
  "Different narratives on who bears the economic cost",
]

const ArticleDetail = ({ query, date, sourceCount, onBack }: ArticleDetailProps) => {
  return (
    <div className="animate-fade-in">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="btn btn-ghost mb-8 -ml-2"
      >
        <IoArrowBack className="w-4 h-4" />
        Back to Briefings
      </button>

      {/* Header */}
      <header className="mb-12 text-center">
        <span className="section-header inline-block mb-4">Intelligence Briefing</span>

        <h1 className="text-2xl md:text-4xl font-TimesNewRoman font-bold text-light-text dark:text-dark-text mb-4 max-w-3xl mx-auto leading-tight">
          "{query}"
        </h1>

        {/* Meta */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-Helvetica text-light-muted dark:text-dark-muted">
          <span className="flex items-center gap-1.5">
            <IoTime className="w-4 h-4" />
            {date}
          </span>
          <span className="flex items-center gap-1.5">
            <IoNewspaper className="w-4 h-4" />
            {sourceCount} sources analyzed
          </span>
          <span className="flex items-center gap-1.5">
            <IoCheckmarkCircle className="w-4 h-4 text-emerald-500" />
            95% extraction rate
          </span>
        </div>
      </header>

      {/* Divider */}
      <div className="divider-ornament">
        <span>•</span>
      </div>

      {/* Executive Summary */}
      <section className="mb-12 max-w-3xl mx-auto">
        <h2 className="section-header">Executive Summary</h2>
        <p className="text-light-text dark:text-dark-text leading-relaxed">
          Analysis reveals significant narrative divergence between Western and Eastern media coverage.
          While US and Chinese media present opposing narratives, Indian and Russian coverage suggests
          emerging strategic opportunities that Western analysts may be overlooking. All sources confirm
          the basic facts but interpret implications differently based on regional interests.
        </p>
      </section>

      {/* Divider */}
      <div className="divider-ornament">
        <span>•</span>
      </div>

      {/* Regional Perspectives */}
      <section className="mb-12">
        <h2 className="section-header text-center mb-8">Regional Perspectives</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sampleRegions.map((region) => (
            <RegionCard key={region.region} data={region} />
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="divider-ornament">
        <span>•</span>
      </div>

      {/* Cross-Regional Analysis */}
      <section className="mb-12">
        <h2 className="section-header text-center mb-8">Cross-Regional Analysis</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Consensus */}
          <div className="analysis-box analysis-box-consensus">
            <h3 className="font-TimesNewRoman font-semibold text-lg text-light-text dark:text-dark-text mb-4 flex items-center gap-2">
              <IoCheckmarkCircle className="text-emerald-500" />
              Consensus Points
            </h3>
            <p className="text-xs text-light-muted dark:text-dark-muted mb-3 font-Helvetica">
              Facts all four regions agree upon
            </p>
            <ul className="space-y-2">
              {consensusPoints.map((point, index) => (
                <li key={index} className="text-sm text-light-text dark:text-dark-text flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">✓</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Divergence */}
          <div className="analysis-box analysis-box-divergence">
            <h3 className="font-TimesNewRoman font-semibold text-lg text-light-text dark:text-dark-text mb-4 flex items-center gap-2">
              <span className="text-amber-500">⚡</span>
              Divergence Points
            </h3>
            <p className="text-xs text-light-muted dark:text-dark-muted mb-3 font-Helvetica">
              Where regional narratives contradict
            </p>
            <ul className="space-y-2">
              {divergencePoints.map((point, index) => (
                <li key={index} className="text-sm text-light-text dark:text-dark-text flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5">→</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Key Finding */}
      <section className="mb-12 max-w-3xl mx-auto">
        <div className="card bg-accent-navy/5 dark:bg-accent-blue/10 border-l-4 border-l-accent-navy dark:border-l-accent-blue">
          <span className="text-xs font-Helvetica uppercase tracking-wider text-accent-navy dark:text-accent-blue font-semibold block mb-2">
            Key Intelligence Finding
          </span>
          <p className="text-light-text dark:text-dark-text leading-relaxed italic">
            "While US and Chinese media present diametrically opposed narratives, Indian and Russian
            coverage reveals a potential strategic realignment that Western analysts may be missing.
            The consensus on trade volume decline suggests measurable economic impact regardless of
            narrative framing."
          </p>
        </div>
      </section>
    </div>
  )
}

export default ArticleDetail
