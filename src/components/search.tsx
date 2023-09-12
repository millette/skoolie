// npm
import transliterate from '@sindresorhus/transliterate'
import { onMount, createSignal } from "solid-js"

// self
import { search, default as init } from '@libs/tinysearch_engine.js'

const [nResults, setNResults] = createSignal(0)

export default function (props: any) {
  let demo: HTMLInputElement
  let ul: HTMLUListElement

  init(`/tinysearch_engine_${props.lang}.wasm`)

  function doSearch() {
    if (demo.value.length < 2) {
      setNResults(0)
      return
    }
    const results = search(transliterate(demo.value), 5)
    setNResults(results.length)
    if (ul) ul.innerHTML = ""
  
    let i
    for (i = 0; i < results.length; i++) {
      var li = document.createElement("li")
      let [title, url] = results[i]
      url = (props.lang === "fr" ? "/faq/" : "/en/faq/") + url
      let elemlink = document.createElement('a')
      elemlink.innerHTML = title
      elemlink.setAttribute('href', url)
      li.appendChild(elemlink)
      ul.appendChild(li)
    }
  }

  onMount(() => {
    demo?.addEventListener("keyup", doSearch)
  })

  return (!props.nav || !window.location.pathname.endsWith("/faq/")) && <div>
    <div class="form-control w-full max-w-xs">
      {!props.nav &&
      <label class="label" for="demo">
        <span class="label-text text-xl font-bold">{props.lang === "fr" ? "Chercher" : "Search"}?</span>
      </label>
      }
      <input type="text" id="demo" placeholder={props.nav ? (props.lang === "fr" ? "Chercher" : "Search") : ""} autofocus={!props.nav} ref={demo!} class="input input-bordered input-accent w-full max-w-xs" />
    </div>

    {nResults() && 
      <div class="card shadow-xl">
        <div class="card-body prose">
          <h2 class="card-title">{props.lang === "fr" ? "Résultats" : "Results"}:</h2>
          <ul ref={ul!}>
          </ul>
        </div>
      </div>
    }
  </div>  
}
