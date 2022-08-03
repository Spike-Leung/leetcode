// for import statement works: https://nodejs.org/api/packages.html#type
import { basename, dirname } from "path"
import org2Markdown from "org-to-markdown"
import fs from "fs-extra"
import fg from "fast-glob"

await fs.ensureDir("data")

fg.sync("../solutions/problems/**/README.org", {
  ignore: ["../solutions/**/interview"],
}).map(async (src) => {
  const name = basename(dirname(src))

  const org = await fs.readFile(src, { encoding: "utf8" })
  const md = await org2Markdown(org)

  fs.writeFile(`data/${name}.md`, md, { encoding: "utf8" })
})
