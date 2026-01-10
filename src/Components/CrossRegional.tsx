import { IoCheckmarkCircle, IoFlash, IoWarning } from "react-icons/io5"

const CrossRegional = () => {
  const consensusPoints = [
    "US imposed 50% tariffs on Chinese imports in January 2025",
    "China responded with retaliatory tariffs on US agricultural goods",
    "Trade volume between US and China declined 23% year-over-year",
    "Both sides have engaged in multiple rounds of negotiations",
  ]

  const divergencePoints = [
    {
      aspect: "Framing",
      us: "Economic defense",
      china: "Trade aggression",
      india: "Strategic opportunity",
      russia: "Hegemonic decline",
    },
    {
      aspect: "Villain",
      us: "China (unfair practices)",
      china: "US (protectionism)",
      india: "Neither (neutral)",
      russia: "US (hegemony)",
    },
    {
      aspect: "Impact Focus",
      us: "US jobs & inflation",
      china: "Tech resilience",
      india: "Manufacturing gains",
      russia: "Multipolar shift",
    },
  ]

  const biasMatrix = [
    { region: "US", bias: "Economic security framing", color: "blue-600" },
    { region: "India", bias: "Non-aligned opportunity", color: "orange-500" },
    { region: "China", bias: "Sovereignty & resilience", color: "red-600" },
    { region: "Russia", bias: "Multipolar narrative", color: "red-700" },
  ]

  return (
    <section className="my-8">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-6">
        <hr className="flex-grow divider-thick" />
        <h2 className="font-TimesNewRoman text-xl md:text-2xl font-bold text-light-text dark:text-dark-text whitespace-nowrap">
          Cross-Regional Intelligence
        </h2>
        <hr className="flex-grow divider-thick" />
      </div>

      {/* Two Column Layout - Consensus and Divergence */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Consensus Points */}
        <div className="analysis-box consensus-box">
          <div className="flex items-center gap-2 mb-4">
            <IoCheckmarkCircle className="text-green-600 text-xl" />
            <h3 className="font-TimesNewRoman font-bold text-lg text-light-text dark:text-dark-text">
              Consensus Points
            </h3>
            <span className="badge badge-teal ml-auto">High Confidence</span>
          </div>
          <p className="text-xs text-light-muted dark:text-dark-muted mb-3 font-EditorialNew italic">
            Facts all four regions agree upon
          </p>
          <ul className="space-y-2">
            {consensusPoints.map((point, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-sm text-light-text dark:text-dark-text"
              >
                <span className="text-green-600 mt-0.5 font-bold">✓</span>
                <span className="font-TimesNewRoman">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Divergence Points */}
        <div className="analysis-box divergence-box">
          <div className="flex items-center gap-2 mb-4">
            <IoFlash className="text-amber-500 text-xl" />
            <h3 className="font-TimesNewRoman font-bold text-lg text-light-text dark:text-dark-text">
              Divergence Points
            </h3>
            <span className="badge badge-blue ml-auto">Narrative Conflict</span>
          </div>
          <p className="text-xs text-light-muted dark:text-dark-muted mb-3 font-EditorialNew italic">
            Where regional narratives contradict
          </p>

          {/* Divergence Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-light-border/30 dark:border-dark-border">
                  <th className="text-left py-2 font-Helvetica text-light-muted dark:text-dark-muted">
                    Aspect
                  </th>
                  <th className="text-center py-2 text-blue-600">🇺🇸</th>
                  <th className="text-center py-2 text-red-600">🇨🇳</th>
                  <th className="text-center py-2 text-orange-500">🇮🇳</th>
                  <th className="text-center py-2 text-red-700">🇷🇺</th>
                </tr>
              </thead>
              <tbody>
                {divergencePoints.map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-light-border/10 dark:border-dark-border/30"
                  >
                    <td className="py-2 font-semibold text-light-text dark:text-dark-text">
                      {row.aspect}
                    </td>
                    <td className="py-2 text-center text-light-muted dark:text-dark-muted">
                      {row.us}
                    </td>
                    <td className="py-2 text-center text-light-muted dark:text-dark-muted">
                      {row.china}
                    </td>
                    <td className="py-2 text-center text-light-muted dark:text-dark-muted">
                      {row.india}
                    </td>
                    <td className="py-2 text-center text-light-muted dark:text-dark-muted">
                      {row.russia}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Bias Matrix */}
      <div className="analysis-box">
        <div className="flex items-center gap-2 mb-4">
          <IoWarning className="text-cognivue-gold-dark text-xl" />
          <h3 className="font-TimesNewRoman font-bold text-lg text-light-text dark:text-dark-text">
            Regional Bias Matrix
          </h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {biasMatrix.map((item) => (
            <div
              key={item.region}
              className={`p-3 border-l-4 border-l-${item.color} bg-${item.color}/5 dark:bg-${item.color}/10`}
            >
              <span className="text-xs font-Helvetica font-semibold text-light-text dark:text-dark-text uppercase">
                {item.region}
              </span>
              <p className="text-xs text-light-muted dark:text-dark-muted mt-1">
                {item.bias}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Key Finding */}
      <div className="mt-6 p-4 bg-cognivue-blue/5 dark:bg-cognivue-blue/10 border-l-4 border-l-cognivue-blue dark:border-l-cognivue-blue-light">
        <span className="text-xs font-Helvetica uppercase tracking-wider text-cognivue-blue dark:text-cognivue-blue-light font-semibold">
          Key Intelligence Finding
        </span>
        <p className="text-sm font-TimesNewRoman text-light-text dark:text-dark-text mt-2 leading-relaxed italic">
          "While US and Chinese media present diametrically opposed narratives,
          Indian and Russian coverage reveals a potential strategic opportunity
          narrative that Western analysts may be missing. The consensus on trade
          volume decline suggests measurable economic impact regardless of
          narrative framing."
        </p>
      </div>
    </section>
  )
}

export default CrossRegional
