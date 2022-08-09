import { useEffect, useState, useContext, useMemo } from "react"
import ReactMarkdown from "react-markdown"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism"
import { AppContext } from "@/App"
import { ProblemItem } from "@/types"

interface DetailsProps {
  problem?: ProblemItem
  className?: string
}

function Details(props: DetailsProps) {
  const { problem } = props

  if (!problem) {
    return null
  }

  const { theme } = useContext(AppContext)

  const [detail, setDetails] = useState({
    title: "",
    readme: "",
    code: "",
    path: "",
  })

  const codeStyle = useMemo(() => {
    return theme === "dark" ? oneDark : oneLight
  }, [theme])

  useEffect(() => {
    Promise.all([problem.readme(), problem.code()]).then(([readme, code]) => {
      setDetails((prev) => {
        return {
          ...prev,
          readme: readme.default,
          code: code.default,
          title: problem.title,
          path: problem.path,
        }
      })
    })
  }, [problem])

  return (
    <div className="p5 of-auto w-full">
      <div className="mb5 flex items-center bg-gray-5 p5 b-rd-3 bg-op-10">
        <span className="font-bold">{detail.title}</span>
        <a
          className="i-carbon-link ml3 cursor-pointer"
          title="Go to file in github"
          href={`https://github.com/Spike-Leung/leetcode/tree/trunk/${detail.path}`}
        />
      </div>

      {detail.readme && (
        <details open className="bg-gray-5 bg-op-10 p5 b-rd-3 mb-5">
          <summary className="cursor-pointer hover-c-leetcode select-none">
            Readme
          </summary>
          <ReactMarkdown
            children={detail.readme}
            components={{
              h1: "h3",
              h2: "h4",
              code({ node, inline, className, children }) {
                const match = /language-(\w+)/.exec(className || "")
                return !inline && match ? (
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, "")}
                    language={match[1]}
                    style={codeStyle}
                    PreTag="div"
                  />
                ) : (
                  <code className={className}>{children}</code>
                )
              },
            }}
          />
        </details>
      )}

      {detail.code && (
        <details open className="bg-gray-5 bg-op-10 p5 b-rd-3">
          <summary className="cursor-pointer hover-c-leetcode select-none">
            Code
          </summary>
          <SyntaxHighlighter
            children={detail.code}
            language={"typescript"}
            style={codeStyle}
            PreTag="div"
          />
        </details>
      )}
    </div>
  )
}

export default Details
