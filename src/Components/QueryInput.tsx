import { useState } from "react"
import { IoSearch, IoArrowForward } from "react-icons/io5"

interface QueryInputProps {
  onSubmit?: (query: string) => void
}

const suggestions = [
  "Taiwan tensions",
  "BRICS expansion",
  "Climate policy",
  "Ukraine conflict",
]

const QueryInput = ({ onSubmit }: QueryInputProps) => {
  const [query, setQuery] = useState("")
  const [isFocused, setIsFocused] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim() && onSubmit) {
      onSubmit(query)
    }
  }

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion)
    if (onSubmit) {
      onSubmit(suggestion)
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Label - Main focus */}
      <label className="block text-xl md:text-2xl font-TimesNewRoman text-light-text dark:text-dark-text mb-6 text-center leading-relaxed">
        What geopolitical topic would you like to analyze?
      </label>

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="relative">
        <div
          className={`
            flex items-center gap-4 bg-light-surface dark:bg-dark-surface
            border-2 rounded-2xl px-5 py-4
            transition-all duration-200 shadow-sm
            ${
              isFocused
                ? "border-light-text dark:border-dark-text shadow-md"
                : "border-light-border dark:border-dark-border"
            }
          `}
        >
          <IoSearch className="w-5 h-5 text-light-muted dark:text-dark-muted flex-shrink-0" />

          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder='e.g., "US-China semiconductor restrictions"'
            className="flex-1 bg-transparent outline-none text-light-text dark:text-dark-text placeholder:text-light-muted dark:placeholder:text-dark-muted font-Helvetica text-base"
          />

          <button
            type="submit"
            disabled={!query.trim()}
            className={`
              p-2.5 rounded-xl transition-all duration-150
              ${
                query.trim()
                  ? "bg-light-text dark:bg-dark-text text-light-bg dark:text-dark-bg hover:opacity-80"
                  : "bg-light-border dark:bg-dark-border text-light-muted dark:text-dark-muted cursor-not-allowed"
              }
            `}
          >
            <IoArrowForward className="w-5 h-5" />
          </button>
        </div>
      </form>

      {/* Suggestions */}
      <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
        <span className="text-sm text-light-muted dark:text-dark-muted font-Helvetica">
          Try:
        </span>
        {suggestions.map((suggestion) => (
          <button
            key={suggestion}
            onClick={() => handleSuggestionClick(suggestion)}
            className="px-4 py-2 text-sm font-Helvetica text-light-secondary dark:text-dark-secondary border border-light-border dark:border-dark-border rounded-full hover:border-light-text dark:hover:border-dark-text hover:text-light-text dark:hover:text-dark-text transition-colors"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  )
}

export default QueryInput
