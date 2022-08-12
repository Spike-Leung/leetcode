import { useState, createContext, useEffect, useMemo } from "react"
import useLocalStorage from "use-local-storage"
import Nav from "@/components/Nav"
import Header from "@/components/Header"
import Details from "@/components/Details"
import Modal from "@/components/Modal"
import { ProblemItem } from "@/types"
import { breakpoints } from "@unocss/preset-uno/dist/theme"

export const AppContext = createContext({ theme: "light " })

function App() {
  const [problem, setProblem] = useState<ProblemItem>()
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(true)
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  )

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
  }

  useEffect(() => {
    const mediaQueryList = window.matchMedia(`(min-width: ${breakpoints.lg})`)
    const onChangeMinWidth = function(
      event: MediaQueryListEvent | MediaQueryList
    ) {
      setIsLargeScreen(event.matches)
    }

    onChangeMinWidth(mediaQueryList)
    mediaQueryList.addEventListener("change", onChangeMinWidth)

    return () => {
      mediaQueryList.removeEventListener("change", onChangeMinWidth)
    }
  }, [])

  return (
    <AppContext.Provider value={{ theme }}>
      <div className={`flex flex-col ${theme} h-full of-hidden`}>
        <Header toggleTheme={toggleTheme} />
        <div className="flex-1 h-full of-hidden grid lg:grid-cols-[35vw_1fr] p8 gap5">
          <Nav
            setProblem={(problem) => {
              setProblem(problem)
              setModalVisible(true)
            }}
          />
          {isLargeScreen ? (
            <Details problem={problem} />
          ) : (
            <Modal visible={modalVisible} setModalVisible={setModalVisible}>
              <Details problem={problem} />
            </Modal>
          )}
        </div>
      </div>
    </AppContext.Provider>
  )
}

export default App
