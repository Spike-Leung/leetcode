import ReactMarkdown from "react-markdown"
import Markdown from "solution-parser/data/173-binary-search-tree-iterator.md?raw"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"

function App() {
  return (
    <ReactMarkdown
      className="p-20"
      children={Markdown}
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
  )
}

export default App
