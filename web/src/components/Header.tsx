import Search from "@/components/Search"

function Header() {
  return (
    <div className="flex p5 b-b-1 b-gray-2 items-center">
      <span className="b-text">Leetcode Solutions</span>

      <span className="flex-1" />
      <Search />
      <button className="dark:i-carbon-moon i-carbon-sun ml4 text-xl" />
      <a
        className="i-carbon-logo-github ml4 text-2xl"
        href="https://github.com/Spike-Leung/leetcode"
        target="_blank"
        title="GitHub"
      />
    </div>
  )
}

export default Header
