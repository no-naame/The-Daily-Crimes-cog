import RegionCard from "./Region/RegionCard"

// Sample data showcasing Cognivue's analysis capabilities
const sampleAnalysis = {
  us: {
    region: "us" as const,
    flag: "🇺🇸",
    name: "United States",
    narrative:
      "Coverage emphasizes economic security and protection of American jobs. Tariffs framed as necessary response to unfair trade practices and intellectual property theft.",
    framing: "Defensive measure to protect national economic interests",
    claims: [
      "Tariffs will bring manufacturing jobs back to America",
      "China has engaged in systematic IP theft for decades",
      "Trade deficit with China unsustainable for US economy",
      "Retaliatory tariffs show China's unwillingness to negotiate fairly",
    ],
    sourceCount: 15,
    stateMediaCount: 2,
    independentCount: 13,
  },
  india: {
    region: "india" as const,
    flag: "🇮🇳",
    name: "India",
    narrative:
      "Indian media presents a balanced view while highlighting potential opportunities for Indian manufacturing as companies seek alternatives to China.",
    framing: "Strategic opportunity amid US-China tensions",
    claims: [
      "India could benefit from supply chain diversification",
      "Make in India initiative gains relevance",
      "Both US and China seek stronger ties with India",
      "Non-aligned position gives India diplomatic leverage",
    ],
    sourceCount: 14,
    stateMediaCount: 4,
    independentCount: 10,
  },
  china: {
    region: "china" as const,
    flag: "🇨🇳",
    name: "China",
    narrative:
      "State media portrays tariffs as Western aggression and an attempt to contain China's rise. Emphasizes technological self-reliance and domestic market strength.",
    framing: "Unilateral trade aggression by declining Western power",
    claims: [
      "US tariffs violate WTO rules and international trade norms",
      "China's economy resilient enough to withstand pressure",
      "American consumers will bear the cost of tariffs",
      "Technology decoupling will accelerate China's innovation",
    ],
    sourceCount: 12,
    stateMediaCount: 9,
    independentCount: 3,
  },
  russia: {
    region: "russia" as const,
    flag: "🇷🇺",
    name: "Russia",
    narrative:
      "Russian coverage frames the trade war as evidence of Western hegemony's decline and the emergence of a multipolar world order.",
    framing: "Symptom of US hegemonic decline and multipolar emergence",
    claims: [
      "Trade war accelerates de-dollarization globally",
      "US losing influence as China rises",
      "BRICS nations benefit from Western infighting",
      "Sanctions-based approach shows US diplomatic weakness",
    ],
    sourceCount: 13,
    stateMediaCount: 8,
    independentCount: 5,
  },
}

const RegionalBriefings = () => {
  return (
    <section className="my-8">
      {/* Section Header */}
      <div className="text-center mb-6">
        <h2 className="font-TimesNewRoman text-2xl md:text-3xl font-bold text-light-text dark:text-dark-text">
          Regional Perspectives
        </h2>
        <p className="text-sm text-light-muted dark:text-dark-muted font-EditorialNew mt-1">
          How four major regions cover the same geopolitical event
        </p>
      </div>

      {/* Decorative line */}
      <div className="flex items-center gap-4 mb-6">
        <hr className="flex-grow divider-thin" />
        <span className="text-xs font-Helvetica text-light-muted dark:text-dark-muted uppercase tracking-widest">
          Intelligence Analysis
        </span>
        <hr className="flex-grow divider-thin" />
      </div>

      {/* 4-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <RegionCard {...sampleAnalysis.us} />
        <RegionCard {...sampleAnalysis.india} />
        <RegionCard {...sampleAnalysis.china} />
        <RegionCard {...sampleAnalysis.russia} />
      </div>

      {/* Bottom stats bar */}
      <div className="mt-6 p-3 bg-light-surface/30 dark:bg-dark-surface/30 border border-light-border/20 dark:border-dark-border/50 flex flex-wrap justify-center gap-6 text-xs font-Helvetica">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cognivue-blue"></span>
          <span className="text-light-muted dark:text-dark-muted">
            <strong className="text-light-text dark:text-dark-text">54</strong>{" "}
            total sources analyzed
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cognivue-teal"></span>
          <span className="text-light-muted dark:text-dark-muted">
            <strong className="text-light-text dark:text-dark-text">4</strong>{" "}
            languages processed
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cognivue-gold-dark"></span>
          <span className="text-light-muted dark:text-dark-muted">
            <strong className="text-light-text dark:text-dark-text">95%</strong>{" "}
            extraction success
          </span>
        </div>
      </div>
    </section>
  )
}

export default RegionalBriefings
