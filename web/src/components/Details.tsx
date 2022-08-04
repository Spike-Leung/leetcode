import { useEffect, useState, useContext, useMemo } from "react"
import ReactMarkdown from "react-markdown"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism"
import { AppContext } from "@/App"

function Details(props) {
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
    <div className="pt5 px1">
      <div className="mb3 flex items-center">
        <span className="font-bold">{detail.title}</span>
        <a
          className="i-carbon-link ml3 cursor-pointer"
          title="Go to file in github"
          href={`https://github.com/Spike-Leung/leetcode/tree/trunk/${detail.path}`}
        />
      </div>

      {detail.readme && (
        <details open>
          <summary className="cursor-pointer hover-c-leetcode select-none">Readme</summary>
          <ReactMarkdown
            children={detail.readme}
            components={{
              h1: 'h3',
              h2: 'h4',
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "")
                return !inline && match ? (
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, "")}
                    language={match[1]}
                    style={codeStyle}
                    PreTag="div"
                    {...props}
                  />
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
              },
            }}
          />
        </details>
      )}

      {detail.code && (
        <details open>
          <summary className="cursor-pointer hover-c-leetcode select-none">Code</summary>
          <SyntaxHighlighter
            children={detail.code}
            language={"typescript"}
            style={codeStyle}
            PreTag="div"
            {...props}
          />
        </details>
      )}
    </div>
  )
}

export default Details
