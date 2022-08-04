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
    <div className="flex flex-col of-auto min-w-60 w-60 p5">
      {problems.map(({ title }, index) => {
        return (
          <a
            className="of-hidden text-ellipsis hover-color-orange cursor-pointer ws-nowrap p1"
            title={title}
            key={title}
            onClick={() => setProblem(problems[index])}
          >
            {title}
          </a>
        )
      })}
    </div>
  )
}

export default Nav
