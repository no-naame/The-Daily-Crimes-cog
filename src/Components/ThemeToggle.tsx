import { useTheme } from "../contexts/ThemeContext"
import { IoSunny, IoMoon } from "react-icons/io5"

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle flex items-center gap-2 font-Helvetica text-sm"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <>
          <IoSunny className="text-cognivue-gold-dark text-lg" />
          <span className="hidden sm:inline">Light</span>
        </>
      ) : (
        <>
          <IoMoon className="text-cognivue-blue-light text-lg" />
          <span className="hidden sm:inline">Dark</span>
        </>
      )}
    </button>
  )
}

export default ThemeToggle
