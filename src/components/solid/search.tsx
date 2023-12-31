// npm
import transliterate from '@sindresorhus/transliterate'
import { onMount, createSignal } from "solid-js"

// self
import { search, default as init } from '!libs/tinysearch_engine.js'

const [nResults, setNResults] = createSignal(0)

export default function (props: any) {
  let demo: HTMLInputElement
  let ul: HTMLUListElement

  if (typeof window !== 'undefined') init(`/tinysearch_engine_${props.lang}.wasm`)

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

  function closeSearch(ev: KeyboardEvent) {
    if (ev.code === "Escape") setNResults(0)
  }

  onMount(() => {
    demo?.addEventListener("keyup", doSearch)
    window.addEventListener("keyup", closeSearch)
  })

  function clearSearch() {
    setNResults(0)
  }

  return (!props.nav || !window.location.pathname.endsWith("/faq/")) && <>
    <div classList={{ "form-control": true, "mb-5": !props.nav }}>
      {!props.nav &&
      <label class="label" for="demo">
        <span class="label-text text-xl font-bold">{props.lang === "fr" ? "Chercher" : "Search"}?</span>
      </label>
      }
      <input type="text" id="demo" placeholder={props.nav ? (props.lang === "fr" ? "Chercher" : "Search") : ""} autofocus={!props.nav} ref={demo!} class="input input-bordered input-accent w-full max-w-xs" />
    </div>

    {(nResults() > 0) &&
      <div classList={{ "z-50": true, absolute: props.nav, "top-20": props.nav, card: true, "bg-accent": true, "text-accent-content": true, "shadow-xl": true }}>
        <div class="card-body prose">
          <button onClick={clearSearch} class="uppercase btn btn-sm btn-circle btn-ghost absolute right-2">✕</button>
          <h2 class="card-title">{props.lang === "fr" ? "Résultats" : "Results"}:</h2>
          <ul ref={ul!}>
          </ul>
        </div>
      </div>
    }
  </>
}
