// for import statement works: https://nodejs.org/api/packages.html#type
import { basename, dirname } from "path"
import { genArrayFromRaw, genObjectFromRaw } from "knitwork"
import org2Markdown from "org-to-markdown"
import fs from "fs-extra"
import fg from "fast-glob"

await fs.ensureDir("data/problems")

const code = []

fg.sync("../solutions/problems/**/code.*", {
  ignore: [
    "../solutions/**/interview",
    "../solutions/**/playground",
    "../solutions/**/code.test.*",
  ],
}).map(async (src) => {
  const path = dirname(src)
  const name = basename(path)

  code.push(
    genObjectFromRaw({
      title: `"${name}"`,
      readme: `() => import("./problems/${name}.md?raw")`,
      code: `() => import("${src.slice(3)}?raw")`,
      path: `"${path.slice(3)}"`,
    })
  )

  const orgPath = `${dirname(src)}/README.org`
  const orgExist = await fs.pathExists(orgPath)
  let md = ""

  if (orgExist) {
    const org = await fs.readFile(orgPath, { encoding: "utf8" })
    md = await org2Markdown(org)
  }

  fs.writeFileSync(`data/problems/${name}.md`, md, { encoding: "utf8" })
})

fs.writeFileSync(
  `data/index.ts`,
  `import React from "react"

export const problemIndex = ${genArrayFromRaw(code)}
`,
  { encoding: "utf8" }
)
