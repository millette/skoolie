// npm
import Database from 'better-sqlite3'

/*
console.log("clientAddress", Astro.clientAddress)
console.log("accept-language", Astro.request.headers.get('accept-language'))
console.log("referer", Astro.request.headers.get('referer'))
console.log("user-agent", Astro.request.headers.get('user-agent'))
*/

function initDb() {
  const db = new Database('../db-skoolie/foobar.db', { verbose: console.log })
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

  return {
    db,
    insert: inserter.run.bind(inserter),
  }
}

const { SqliteError } = Database
export { initDb, SqliteError }
