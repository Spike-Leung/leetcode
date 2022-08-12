import { useState, useMemo, useEffect, useRef, useCallback } from "react"
import Fuse from "fuse.js"
import { problemIndex } from "solution-parser/data/index"
import { ProblemItem } from "@/types"

interface NavProps {
  setProblem: (problem: ProblemItem) => void
}

const problems = problemIndex.slice(0)

problems.sort((a: ProblemItem, b: ProblemItem) => {
  const serialA = +a.title.split("-")[0]
  const serialB = +b.title.split("-")[0]

  return serialA - serialB
})

const problemsMap = problems.reduce(
  (acc: Record<string, ProblemItem>, curr) => {
    acc[curr.title] = curr

    return acc
  },
  {}
)

const fuse = new Fuse(problems, { keys: ["title"] })

function Nav(props: NavProps) {
  const { setProblem } = props
  const [query, setQuery] = useState("")
  const inputRef = useRef(null)
  const matchProblems: ProblemItem[] = useMemo(() => {
    if (query === "") {
      return problems
    }

    return fuse.search(query).map(({ item }) => item as ProblemItem)
  }, [problems, query])

  return (
    <div className="flex flex-col of-hidden">
      <div className="flex items-center mb3 justify-between b-2 b-color-gray b-op-20 b-rd relative">
        <input
          className="b-0 outline-none h-7 px3 flex-1 w-36"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="fuzzy search"
          value={query}
          ref={inputRef}
        />
        {query && (
          <button
            className="i-carbon-close cursor-pointer text-xl c-gray c-op-50 hover-c-op-100 absolute right-1"
            title="Clear"
            onClick={() => setQuery("")}
          />
        )}
      </div>

      <div className="of-hidden of-y-auto h-full">
        {matchProblems.map(({ title }) => {
          return (
            <a
              className="hover-c-leetcode cursor-pointer py1"
              title={title}
              key={title}
              onClick={() => setProblem(problemsMap[title])}
            >
              <span className="text-ellipsis ws-nowrap w-full of-hidden inline-block">
                {title}
              </span>
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default Nav
