import { useState } from 'react'

const navItems = [
  { label: 'Soluzioni', href: '#soluzioni' },
  { label: 'Come lavoriamo', href: '#metodo' },
  { label: 'Caso studio', href: '#caso-magazzino' },
  { label: 'Trova la tua soluzione', href: '#trova-soluzione' },
  { label: 'Contatti', href: '#contatti' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a
          className="brand"
          href="#top"
          aria-label="Torna all'inizio"
          onClick={(event) => {
            event.preventDefault()
            window.history.replaceState(null, '', window.location.pathname + window.location.search)
            const topTarget = document.getElementById('top')
            if (topTarget) {
              topTarget.scrollIntoView({ behavior: 'instant', block: 'start' })
            }
            window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
            requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0, behavior: 'auto' }))
          }}
        >
          <span className="brand-mark">P</span>
          <span className="brand-copy">
            <strong>PMI Software</strong>
            <small>nome provvisorio</small>
          </span>
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label="Apri menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>

        <nav className={open ? 'main-nav is-open' : 'main-nav'} aria-label="Navigazione principale">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="button button-small" href="#contatti" onClick={() => setOpen(false)}>
            Parliamo del processo
          </a>
        </nav>
      </div>
    </header>
  )
}
