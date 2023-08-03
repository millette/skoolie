// node
import fs from "node:fs/promises"

// npm
import Markdoc from '@markdoc/markdoc'
import GithubSlugger from 'github-slugger'
import { stripHtml } from "string-strip-html"
import transliterate from "@sindresorhus/transliterate"

// self
import { price } from "../src/libs/constants.js"

const source1 = await fs.readFile("src/content/pages/faq-fr.mdoc", "utf-8")
const source2 = await fs.readFile("src/content/pages/faq-en.mdoc", "utf-8")


function toJson(source) {
  const { children: c2 } = Markdoc.transform(Markdoc.parse(source), { variables: { price } })
  const slugger = new GithubSlugger()
  const re = /[’'/:-]/g
  const items = []
  let obj

  c2.forEach(({ name, children }, i) => {
    if (name === "h2") {
      if (obj) {
        obj.body = obj.body.join(" ")
        items.push(obj)
      }
      obj = {
        title: children[0],
        url: `#${slugger.slug(children[0])}`,
        body: [transliterate(children[0]).replace(re, " ")]
      }
    }
    if (name === 'p')
      obj.body.push(transliterate(stripHtml(Markdoc.renderers.html(children)).result).replace(re, " "))
    
    if (i === c2.length - 1) {
      obj.body = obj.body.join(" ")
      items.push(obj)
    }
  })

  return items
}

const items1 = toJson(source1)
const items2 = toJson(source2)

await fs.writeFile("search-index-fr.json", JSON.stringify(items1, null, 2))
await fs.writeFile("search-index-en.json", JSON.stringify(items2, null, 2))
