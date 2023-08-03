// npm
import transliterate from '@sindresorhus/transliterate'
import { onMount, createSignal } from "solid-js"

// self
import { search, default as init } from '@components/tinysearch_engine.js'

const [nResults, setNResults] = createSignal(0)

export default function (props) {
  let demo: HTMLElement
  let ul: HTMLElement

  init(`/tinysearch_engine_${props.lang}.wasm`)

  function doSearch() {
    const results = search(transliterate(demo.value), 5)
    setNResults(results.length)
    ul.innerHTML = ""
  
    let i
    for (i = 0; i < results.length; i++) {
      var li = document.createElement("li")
      let [title, url] = results[i]
      let elemlink = document.createElement('a')
      elemlink.innerHTML = title
      elemlink.setAttribute('href', url)
      li.appendChild(elemlink)
      ul.appendChild(li)
    }
  }

  onMount(() => {
    demo.addEventListener("keyup", doSearch)
  })
    
  return <div>
    <label for="demo" class="text-xl font-bold">{props.lang === "fr" ? "Chercher" : "Search"}?{" "}</label>
    <input type="text" id="demo" ref={demo} />
    {nResults() && <h3>{props.lang === "fr" ? "Résultats" : "Results"}:</h3>}
    <ul ref={ul}>
    </ul>
  </div>
}
