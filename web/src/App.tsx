import Nav from "./components/Nav"
import Header from "./components/Header"
import Details from "./components/Details"
import { useState } from "react"

function App() {
  const [problem, setProblem] = useState(null)
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Nav setProblem={setProblem} />
        <Details className="flex-1" problem={problem} />
      </div>
    </div>
  )
}

export default App
