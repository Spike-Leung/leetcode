import Search from "@/components/Search"

function Header(props) {
  const { toggleTheme } = props

  return (
    <div className="flex p5 b-b-1 b-gray-4 items-center b-op-40">
      <span className="font-bold c-leetcode">Leetcode Solutions</span>

      <span className="flex-1" />
      <button
        className="dark:i-carbon-moon i-carbon-sun ml4 text-xl cursor-pointer"
        onClick={toggleTheme}
      />
      <a
        className="i-carbon-logo-github ml4 text-2xl c-dark dark:c-white"
        href="https://github.com/Spike-Leung/leetcode"
        target="_blank"
        title="GitHub"
      />
    </div>
  )
}

export default Header
