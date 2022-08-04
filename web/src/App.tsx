import { useState, createContext } from "react"
import useLocalStorage from "use-local-storage"
import Nav from "@/components/Nav"
import Header from "@/components/Header"
import Details from "@/components/Details"
import { ProblemItem } from "@/types"

export const AppContext = createContext({ theme: "light " })

function App() {
  const [problem, setProblem] = useState<ProblemItem>()
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches

  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  )

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
  }

  return (
    <AppContext.Provider value={{ theme }}>
      <div className={`flex flex-col ${theme} h-full of-hidden`}>
        <Header toggleTheme={toggleTheme} />
        <div className="flex flex-1 h-full of-hidden">
          <Nav setProblem={setProblem} />
          <Details className="flex-1" problem={problem} />
        </div>
      </div>
    </AppContext.Provider>
  )
}

export default App
