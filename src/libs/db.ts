// npm
import Database from 'better-sqlite3'

interface InterestsType {
  email?: string
  phone?: string
  referer?: string
  ip: string
  language: string | null
  browser: string | null
}

const DEFAULT_DB = '../db-skoolie/foobar.db'
console.log('DEFAULT DB:', DEFAULT_DB)

/*
console.log("clientAddress", Astro.clientAddress)
console.log("accept-language", Astro.request.headers.get('accept-language'))
console.log("referer", Astro.request.headers.get('referer'))
console.log("user-agent", Astro.request.headers.get('user-agent'))
*/

function initDb() {
  const db = new Database(DEFAULT_DB, { verbose: console.log })
  db.pragma('journal_mode = WAL')

  db.exec(`
  create table if not exists interests (
    id integer primary key,
    email text unique,
    phone text unique,
    referer text,
    ip integer not null,
    date timestamp default current_timestamp,
    language text not null,
    browser text phone null,
    check ((email <> null) or (phone <> null)),
    check (email <> ''),
    check (phone <> ''),
    check (referer <> '')
  )
  `)

  const inserter = db.prepare(`
    insert into interests (
      email,
      phone,
      referer,
      ip,
      language,
      browser
    )
    values (
      @email,
      @phone,
      @referer,
      @ip,
      @language,
      @browser
    )
  `)

  // returns lastInsertRowid
  function insert(o: InterestsType): number | bigint {
    let { email, phone } = o
    if (!email && !phone) throw new Error("Required: email OR phone number.")
    if (phone) {
      phone = phone.replaceAll(/[^\d]/g, '').replace(/^1/, '')
      if (phone.length !== 10) throw new Error(`Expected phone number to have "10" digits, got "${phone.length}" instead.`)
    }
    o.phone = phone || undefined

    if (email) {
      let emailParts = email.split('@')
      emailParts[0] = emailParts[0].replaceAll(/\./g, '')
      email = emailParts.join('@')
    }
    o.email = email || undefined

    const { changes, lastInsertRowid } = inserter.run(o)
    if (changes !== 1) throw new Error(`Expected "changes === 1", got "${changes}" instead.`)
    return lastInsertRowid
  }

  return {
    db,
    insert,
    // insert: inserter.run.bind(inserter),
  }
}

const { SqliteError } = Database
export { initDb, SqliteError }
