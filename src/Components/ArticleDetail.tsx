import { IoArrowBack } from "react-icons/io5"
import RegionCard, { RegionData } from "./Region/RegionCard"
import { SourcesList, Source } from "./SourceCitation"

interface ArticleDetailProps {
  query: string
  date: string
  sourceCount: number
  onBack: () => void
}

// Sample sources data
const sampleSources: Source[] = [
  { id: 1, title: "Trump Administration Announces New Tariff Package", outlet: "The Wall Street Journal", region: "us", type: "independent" },
  { id: 2, title: "Trade War Escalates as US Targets Chinese Tech", outlet: "The New York Times", region: "us", type: "independent" },
  { id: 3, title: "Economic Impact of Tariffs on American Consumers", outlet: "Bloomberg", region: "us", type: "independent" },
  { id: 4, title: "India Explores Supply Chain Opportunities", outlet: "The Economic Times", region: "india", type: "independent" },
  { id: 5, title: "Make in India Gains Momentum Amid Trade War", outlet: "Hindustan Times", region: "india", type: "independent" },
  { id: 6, title: "Non-Aligned Stance Benefits Indian Economy", outlet: "The Hindu", region: "india", type: "independent" },
  { id: 7, title: "US Trade Aggression Violates International Law", outlet: "Global Times", region: "china", type: "state" },
  { id: 8, title: "China's Technological Self-Reliance Accelerates", outlet: "Xinhua News", region: "china", type: "state" },
  { id: 9, title: "American Consumers Bear Tariff Costs", outlet: "CGTN", region: "china", type: "state" },
  { id: 10, title: "Trade War Signals Western Decline", outlet: "RT", region: "russia", type: "state" },
  { id: 11, title: "De-Dollarization Accelerates Amid US-China Tensions", outlet: "TASS", region: "russia", type: "state" },
  { id: 12, title: "BRICS Nations United Against Trade Warfare", outlet: "Sputnik", region: "russia", type: "state" },
]

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
        className="flex items-center gap-2 text-sm font-Helvetica text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text transition-colors mb-8"
      >
        <IoArrowBack className="w-4 h-4" />
        Back to Briefings
      </button>

      {/* Header */}
      <header className="mb-12">
        <div className="border-t-2 border-b border-light-divider dark:border-dark-divider py-6">
          <span className="uppercase tracking-[0.2em] text-xs font-Helvetica font-medium text-light-muted dark:text-dark-muted">
            Intelligence Briefing
          </span>

          <h1 className="font-TimesNewRoman font-bold text-3xl md:text-4xl text-light-text dark:text-dark-text mt-3 leading-tight">
            {query}
          </h1>

          <div className="flex items-center gap-3 mt-4 text-sm font-Helvetica text-light-muted dark:text-dark-muted">
            <span>{date}</span>
            <span>·</span>
            <span>{sourceCount} sources</span>
            <span>·</span>
            <span>4 regions</span>
          </div>
        </div>
      </header>

      {/* Executive Summary */}
      <section className="mb-12 max-w-3xl">
        <h2 className="text-xs font-Helvetica font-semibold uppercase tracking-wider text-light-muted dark:text-dark-muted mb-4">
          Executive Summary
        </h2>
        <p className="text-light-text dark:text-dark-text text-lg leading-relaxed">
          Analysis reveals significant narrative divergence between Western and Eastern media coverage.
          While US and Chinese media present opposing narratives, Indian and Russian coverage suggests
          emerging strategic opportunities that Western analysts may be overlooking. All sources confirm
          the basic facts but interpret implications differently based on regional interests.
        </p>
      </section>

      {/* Key Finding */}
      <section className="mb-12 max-w-3xl">
        <div className="border-l-4 border-light-text dark:border-dark-text pl-6 py-2">
          <span className="text-xs font-Helvetica font-semibold uppercase tracking-wider text-light-muted dark:text-dark-muted block mb-2">
            Key Intelligence Finding
          </span>
          <p className="font-TimesNewRoman italic text-xl text-light-text dark:text-dark-text leading-relaxed">
            "While US and Chinese media present diametrically opposed narratives, Indian and Russian
            coverage reveals a potential strategic realignment that Western analysts may be missing."
          </p>
        </div>
      </section>

      {/* Regional Perspectives */}
      <section className="mb-12">
        <div className="border-t-2 border-light-divider dark:border-dark-divider pt-6 mb-8">
          <h2 className="text-xs font-Helvetica font-semibold uppercase tracking-[0.2em] text-light-text dark:text-dark-text">
            Regional Perspectives
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sampleRegions.map((region) => (
            <RegionCard key={region.region} data={region} />
          ))}
        </div>
      </section>

      {/* Cross-Regional Analysis */}
      <section className="mb-12">
        <div className="border-t-2 border-light-divider dark:border-dark-divider pt-6 mb-8">
          <h2 className="text-xs font-Helvetica font-semibold uppercase tracking-[0.2em] text-light-text dark:text-dark-text">
            Cross-Regional Analysis
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Consensus */}
          <div className="bg-emerald-50 dark:bg-emerald-950/20 rounded-sm p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center">
                <span className="text-emerald-600 dark:text-emerald-400 text-sm font-bold">C</span>
              </div>
              <div>
                <h3 className="font-TimesNewRoman font-bold text-lg text-light-text dark:text-dark-text">
                  Consensus Points
                </h3>
                <p className="text-xs font-Helvetica text-light-muted dark:text-dark-muted">
                  Facts all four regions agree upon
                </p>
              </div>
            </div>
            <ul className="space-y-3">
              {consensusPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold">{index + 1}</span>
                  </span>
                  <span className="text-light-text dark:text-dark-text text-sm leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Divergence */}
          <div className="bg-amber-50 dark:bg-amber-950/20 rounded-sm p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center">
                <span className="text-amber-600 dark:text-amber-400 text-sm font-bold">D</span>
              </div>
              <div>
                <h3 className="font-TimesNewRoman font-bold text-lg text-light-text dark:text-dark-text">
                  Divergence Points
                </h3>
                <p className="text-xs font-Helvetica text-light-muted dark:text-dark-muted">
                  Where regional narratives contradict
                </p>
              </div>
            </div>
            <ul className="space-y-3">
              {divergencePoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-amber-600 dark:text-amber-400 text-xs font-bold">{index + 1}</span>
                  </span>
                  <span className="text-light-text dark:text-dark-text text-sm leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Sources Section */}
      <SourcesList sources={sampleSources} />
    </div>
  )
}

export default ArticleDetail
