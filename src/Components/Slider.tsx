const Slider = () => {
  const headlines = [
    { region: "🇺🇸", text: "US Treasury Reports Record Trade Deficit" },
    { region: "🇨🇳", text: "Beijing Announces New Tech Self-Reliance Initiative" },
    { region: "🇮🇳", text: "India Signs New Trade Agreement with EU" },
    { region: "🇷🇺", text: "Moscow Expands BRICS Economic Cooperation" },
    { region: "🌐", text: "Global Markets React to Tariff Announcements" },
  ]

  return (
    <div className="marquee-container select-none">
      <div className="marquee flex items-center">
        <span className="text-cognivue-blue dark:text-cognivue-blue-light mr-4">
          LIVE INTELLIGENCE FEED
        </span>
        {headlines.map((headline, index) => (
          <span key={index} className="mx-4 flex items-center gap-2">
            <span className="text-4xl">{headline.region}</span>
            <a href="#" className="text-5xl">
              {headline.text}
            </a>
            {index < headlines.length - 1 && (
              <span className="text-light-border/30 dark:text-dark-border ml-4">
                •
              </span>
            )}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Slider
