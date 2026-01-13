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

      {/* Compact Masthead */}
      <div className="text-center mb-8">
        <div className="rule-thin mb-3"></div>

        {/* Brand line with date */}
        <div className="flex items-center justify-center gap-4 text-xs font-Helvetica uppercase tracking-[0.2em] text-light-muted dark:text-dark-muted">
          <span>{date}</span>
        </div>

        {/* Title - Smaller, not dominant */}
        <h1 className="font-OldLondon text-3xl md:text-4xl text-light-text dark:text-dark-text mt-2 tracking-wide">
          COGNIVUE
        </h1>

        {/* Subtitle */}
        <p className="font-Helvetica text-xs uppercase tracking-[0.15em] text-light-muted dark:text-dark-muted mt-1">
          Global Intelligence Briefing
        </p>

        <div className="rule-thin mt-3"></div>
      </div>

      {/* Query Input - THE MAIN FOCUS */}
      <div className="max-w-2xl mx-auto">
        <QueryInput onSubmit={onQuerySubmit} />
      </div>
    </section>
  )
}

export default Hero
