import { problemIndex } from "solution-parser/data/index"

function Nav(props) {
  const { setProblem } = props

  const problems = problemIndex.slice(0)
  problems.sort((a, b) => {
    const serialA = +a.title.split("-")[0]
    const serialB = +b.title.split("-")[0]

    return serialA - serialB
  })

  return (
    <div className="flex flex-col of-hidden of-y-auto min-w-60 w-60 pt3">
      {problems.map(({ title }, index) => {
        return (
          <a
            className="hover-c-leetcode cursor-pointer px5 py1"
            title={title}
            key={title}
            onClick={() => setProblem(problems[index])}
          >
            <span className="text-ellipsis ws-nowrap w-full of-hidden inline-block">
              {title}
            </span>
          </a>
        )
      })}
    </div>
  )
}

export default Nav
