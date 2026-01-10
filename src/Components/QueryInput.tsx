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
      {/* Label */}
      <label className="block text-sm font-Helvetica text-light-secondary dark:text-dark-secondary mb-3 text-center">
        What geopolitical topic would you like to analyze?
      </label>

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="relative">
        <div
          className={`
            flex items-center gap-3 bg-light-surface dark:bg-dark-surface
            border rounded-xl px-4 py-3
            transition-all duration-200
            ${
              isFocused
                ? "border-accent-navy dark:border-accent-blue ring-2 ring-accent-navy/10 dark:ring-accent-blue/10"
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
            className="flex-1 bg-transparent outline-none text-light-text dark:text-dark-text placeholder:text-light-muted dark:placeholder:text-dark-muted font-Helvetica"
          />

          <button
            type="submit"
            disabled={!query.trim()}
            className={`
              p-2 rounded-lg transition-all duration-150
              ${
                query.trim()
                  ? "bg-accent-navy dark:bg-accent-blue text-white hover:bg-accent-navy-light dark:hover:bg-accent-blue/90"
                  : "bg-light-border dark:bg-dark-border text-light-muted dark:text-dark-muted cursor-not-allowed"
              }
            `}
          >
            <IoArrowForward className="w-5 h-5" />
          </button>
        </div>
      </form>

      {/* Suggestions */}
      <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
        <span className="text-xs text-light-muted dark:text-dark-muted font-Helvetica">
          Try:
        </span>
        {suggestions.map((suggestion) => (
          <button
            key={suggestion}
            onClick={() => handleSuggestionClick(suggestion)}
            className="chip"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  )
}

export default QueryInput
