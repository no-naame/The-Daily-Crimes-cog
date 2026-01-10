import ThemeToggle from "./ThemeToggle"

const Header = () => {
  return (
    <header className="flex items-center justify-between py-4 mb-8">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <h1 className="font-OldLondon text-3xl md:text-4xl text-light-text dark:text-dark-text">
          Cognivue
        </h1>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        <ThemeToggle />
      </div>
    </header>
  )
}

export default Header
