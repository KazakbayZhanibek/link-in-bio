import React from 'react'
import { page } from './config'
import { publicLink } from './links'

function Arrow() {
  return <svg className="arrow" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" /></svg>
}

export default function App() {
  const website = publicLink(page.website.url)
  const github = publicLink(page.github.url)
  const contacts = [page.contact.telegram, page.contact.email].flatMap(contact => {
    const href = publicLink(contact.url)
    return href ? [{ ...contact, href }] : []
  })
  const websiteContent = <>
    <span className="link-heading">{page.website.title}</span>
    {website ? <Arrow /> : <span className="pending">{page.website.pendingLabel}</span>}
    <span className="link-description">{page.website.description}</span>
  </>

  return <React.Fragment>
    <a className="skip-link" href="#links">{page.skipLabel}</a>
    <main className="poster">
      <header className="introduction">
        <h1>{page.name}</h1>
        <p>{page.introduction}</p>
        <p className="intro-story">{page.about}</p>
        <span className="location">{page.location}</span>
      </header>
      <nav id="links" tabIndex={-1} aria-label={page.navigationLabel}>
        {website
          ? <a className="website link-surface" href={website}>{websiteContent}</a>
          : <section className="website is-pending" aria-label={`${page.website.title}: ${page.website.pendingLabel}`}>{websiteContent}</section>}
        <section className="contact" aria-labelledby="contact-title">
          <h2 id="contact-title">{page.contact.title}</h2>
          <p>{page.contact.description}</p>
          {contacts.length > 0 ? <div className="contact-links">
            {contacts.map(contact => <a key={contact.title} href={contact.href} className="contact-link">
              <span className="contact-name">{contact.title}</span>
              <Arrow />
              <span className="contact-address">{contact.description}</span>
            </a>)}
          </div> : <p className="contact-pending">{page.contact.pendingLabel}</p>}
        </section>
        {github && <a className="github link-surface" href={github}>
          <span className="link-heading" translate="no">{page.github.title}</span>
          <Arrow />
          <span className="link-description">{page.github.description}</span>
        </a>}
      </nav>
      <footer>
        <p>{page.footer}</p>
      </footer>
    </main>
  </React.Fragment>
}
