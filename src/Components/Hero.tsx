import { useState, useEffect } from "react"
import QueryInput from "./QueryInput"

interface HeroProps {
  onQuerySubmit?: (query: string) => void
}

// Get formatted time for a timezone
const getTimeForTimezone = (timezone: string) => {
  return new Date().toLocaleTimeString("en-US", {
    timeZone: timezone,
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  })
}

// Get formatted date
const getFormattedDate = () => {
  return new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

const Hero = ({ onQuerySubmit }: HeroProps) => {
  const [times, setTimes] = useState({
    washington: getTimeForTimezone("America/New_York"),
    newDelhi: getTimeForTimezone("Asia/Kolkata"),
    beijing: getTimeForTimezone("Asia/Shanghai"),
    moscow: getTimeForTimezone("Europe/Moscow"),
  })
  const [date, setDate] = useState(getFormattedDate())

  // Update times every minute
  useEffect(() => {
    const interval = setInterval(() => {
      setTimes({
        washington: getTimeForTimezone("America/New_York"),
        newDelhi: getTimeForTimezone("Asia/Kolkata"),
        beijing: getTimeForTimezone("Asia/Shanghai"),
        moscow: getTimeForTimezone("Europe/Moscow"),
      })
      setDate(getFormattedDate())
    }, 60000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="pt-8 pb-16">
      {/* Top Info Bar - Times across regions */}
      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-Helvetica text-light-muted dark:text-dark-muted mb-6">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-region-us"></span>
          Washington {times.washington}
        </span>
        <span className="text-light-border dark:text-dark-border">|</span>
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-region-india"></span>
          New Delhi {times.newDelhi}
        </span>
        <span className="text-light-border dark:text-dark-border">|</span>
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-region-china"></span>
          Beijing {times.beijing}
        </span>
        <span className="text-light-border dark:text-dark-border">|</span>
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-region-russia"></span>
          Moscow {times.moscow}
        </span>
      </div>

      {/* Main Masthead */}
      <div className="text-center">
        {/* Top Rule */}
        <div className="rule-double mb-4"></div>

        {/* Date Line */}
        <p className="text-xs font-Helvetica uppercase tracking-[0.3em] text-light-secondary dark:text-dark-secondary mb-4">
          {date}
        </p>

        {/* Main Title */}
        <h1 className="font-OldLondon text-6xl md:text-8xl lg:text-9xl text-light-text dark:text-dark-text leading-none tracking-wide">
          COGNIVUE
        </h1>

        {/* Subtitle */}
        <p className="font-TimesNewRoman text-lg md:text-xl text-light-secondary dark:text-dark-secondary mt-3 italic">
          Global Intelligence Briefing
        </p>

        {/* Tagline */}
        <p className="text-xs font-Helvetica uppercase tracking-[0.2em] text-light-muted dark:text-dark-muted mt-2">
          See the world through every lens, not just one
        </p>

        {/* Bottom Rule */}
        <div className="rule-double mt-4 mb-12"></div>
      </div>

      {/* Query Input - Clean and spacious */}
      <div className="max-w-xl mx-auto">
        <p className="text-center text-sm font-Helvetica text-light-secondary dark:text-dark-secondary mb-4">
          What geopolitical topic would you like to analyze?
        </p>
        <QueryInput onSubmit={onQuerySubmit} />
      </div>
    </section>
  )
}

export default Hero
