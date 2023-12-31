// export const price = "17,999$ CAD"
export const price = "(make an offer)"
export const prix = "(faites une offre)"
export const marketplace = "https://www.facebook.com/marketplace/item/3562740134044287"

export const phone = "514-394-7877"
const phoneString = {
  fr: "✆ Appel ou SMS",
  en: "✆ Call or SMS",
}

export const email = "bus@waglo.com"

export const phoneHref = (phone) => phone.replaceAll(/[^\d]/g, '').replace(/^1/, '')

const emailString = {
  fr: "📧 courriel",
  en: "📧 email",
}

const toHref = (str) => str.includes('@') ? `mailto:${str}` : `tel:${phoneHref(str)}`

export const phoneLink = (language) => `<a class="link" href=${toHref(phone)}>${phoneString[language]}</a> ${phone}`

export const emailLink = (language) => `<a class="link" href=${toHref(email)}>${emailString[language]}</a> ${email}`
