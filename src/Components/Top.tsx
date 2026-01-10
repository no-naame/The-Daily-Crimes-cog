import { useState, useEffect } from "react"
import { IoGlobeSharp } from "react-icons/io5"
import ThemeToggle from "./ThemeToggle"

const Top = () => {
  const [times, setTimes] = useState({
    us: "",
    india: "",
    china: "",
    russia: "",
  })

  const date = new Date()
  const day = date.getDay()
  const month = date.getMonth()
  const todayDate = date.getDate()
  const year = date.getFullYear()

  const dayArr = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]
  const monthArr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date()
      setTimes({
        us: now.toLocaleTimeString("en-US", {
          timeZone: "America/New_York",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }),
        india: now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }),
        china: now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Shanghai",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }),
        russia: now.toLocaleTimeString("en-US", {
          timeZone: "Europe/Moscow",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }),
      })
    }

    updateTimes()
    const interval = setInterval(updateTimes, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="select-none text-light-text dark:text-dark-text font-Helvetica text-xs flex flex-row justify-between items-center pb-2">
      {/* Left - Edition info */}
      <div className="flex flex-col items-start gap-1">
        <div className="flex items-center gap-2">
          <span className="badge badge-blue font-semibold">
            INTELLIGENCE EDITION
          </span>
          <span className="text-light-muted dark:text-dark-muted">
            Vol. I, No. 001
          </span>
        </div>
        <div className="flex items-center gap-1 text-light-muted dark:text-dark-muted hover:text-cognivue-blue dark:hover:text-cognivue-blue-light cursor-pointer transition-colors">
          <IoGlobeSharp className="text-sm" />
          <span>cognivue.ai</span>
        </div>
      </div>

      {/* Center - Global time zones */}
      <div className="hidden md:flex items-center gap-4 font-mono text-xs">
        <div className="flex flex-col items-center">
          <span className="text-blue-600 font-semibold">{times.us}</span>
          <span className="text-[10px] text-light-muted dark:text-dark-muted">
            NYC
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-orange-500 font-semibold">{times.india}</span>
          <span className="text-[10px] text-light-muted dark:text-dark-muted">
            DEL
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-red-600 font-semibold">{times.china}</span>
          <span className="text-[10px] text-light-muted dark:text-dark-muted">
            BEI
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-red-700 font-semibold">{times.russia}</span>
          <span className="text-[10px] text-light-muted dark:text-dark-muted">
            MOW
          </span>
        </div>
      </div>

      {/* Right - Date and theme toggle */}
      <div className="flex flex-col items-end gap-1">
        <div className="flex items-center gap-3">
          <span className="text-light-muted dark:text-dark-muted font-semibold">
            {dayArr[day]}, {monthArr[month]} {todayDate}, {year}
          </span>
          <ThemeToggle />
        </div>
        <span className="text-[10px] text-light-muted dark:text-dark-muted tracking-wider">
          MULTI-REGIONAL GEOPOLITICAL ANALYSIS
        </span>
      </div>
    </div>
  )
}

export default Top
