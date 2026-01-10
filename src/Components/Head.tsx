const Head = () => {
  return (
    <div className="select-none">
      {/* Top decorative lines */}
      <div className="flex items-center">
        <div className="flex-grow space-y-0.5">
          <hr className="divider-thick" />
          <hr className="divider-thin" />
        </div>
        <span className="mx-4 text-5xl font-OldLondon text-cognivue-blue dark:text-cognivue-blue-light">
          Global
        </span>
        <div className="flex-grow space-y-0.5">
          <hr className="divider-thick" />
          <hr className="divider-thin" />
        </div>
      </div>

      {/* Main masthead */}
      <div className="flex flex-col gap-2 items-center py-4">
        <div className="text-8xl md:text-9xl font-semibold font-OldLondon text-light-text dark:text-dark-text tracking-wide">
          COGNIVUE
        </div>
        <div className="text-xl md:text-2xl font-EditorialNew text-light-muted dark:text-dark-muted tracking-widest uppercase">
          Intelligence Briefing
        </div>
        <div className="font-EditorialNew text-sm md:text-base italic text-light-text/80 dark:text-dark-text/80 mt-1">
          "See the world through every lens, not just one"
        </div>

        {/* Region indicators */}
        <div className="flex items-center gap-3 mt-3 font-Helvetica text-xs tracking-wider">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            <span className="text-light-muted dark:text-dark-muted">US</span>
          </span>
          <span className="text-light-border/30 dark:text-dark-border">|</span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-orange-500"></span>
            <span className="text-light-muted dark:text-dark-muted">INDIA</span>
          </span>
          <span className="text-light-border/30 dark:text-dark-border">|</span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-600"></span>
            <span className="text-light-muted dark:text-dark-muted">CHINA</span>
          </span>
          <span className="text-light-border/30 dark:text-dark-border">|</span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-700"></span>
            <span className="text-light-muted dark:text-dark-muted">RUSSIA</span>
          </span>
        </div>
      </div>

      {/* Bottom decorative lines */}
      <div className="flex flex-col space-y-0.5">
        <hr className="divider-thin" />
        <hr className="divider-thick" />
      </div>
    </div>
  )
}

export default Head
