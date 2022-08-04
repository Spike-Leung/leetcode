import { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"

function Details(props) {
  const { problem } = props

  const [detail, setDetails] = useState({
    title: "",
    readme: "",
    code: "",
  })

  useEffect(() => {
    if (!problem) {
      return
    }

    Promise.all([problem.readme(), problem.code()]).then(([readme, code]) => {
      setDetails((prev) => {
        return {
          ...prev,
          readme: readme.default,
          code: code.default,
          title: problem.title,
        }
      })
    })
  }, [problem])

  return (
    <div>
      <div>{detail.title}</div>

      {detail.readme && (
        <details open>
          <summary>Readme</summary>
          <ReactMarkdown
            children={detail.readme}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "")
                return !inline && match ? (
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, "")}
                    language={match[1]}
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
          <summary>Code</summary>
          <SyntaxHighlighter
            children={detail.code}
            language={"typescript"}
            PreTag="div"
            {...props}
          />
        </details>
      )}
    </div>
  )
}

export default Details
