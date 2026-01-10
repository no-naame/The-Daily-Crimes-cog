import { useTheme } from "../contexts/ThemeContext"
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5"

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <IoSunnyOutline className="w-5 h-5" />
      ) : (
        <IoMoonOutline className="w-5 h-5" />
      )}
    </button>
  )
}

export default ThemeToggle
