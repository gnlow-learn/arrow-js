import { r, html } from "https://esm.sh/@arrow-js/core@1.0.0-alpha.10"

const data = r({
    clicks: 0,
})

html`
    <button @click="${() => data.clicks++}">
        Fired ${() => data.clicks} arrows
    </button>
`(document.body)
