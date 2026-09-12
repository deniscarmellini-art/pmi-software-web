import { Link } from 'react-router-dom'

export function ProductHeader() {
  return (
    <header className="site-header product-header">
      <div className="container header-inner">
        <Link className="brand" to="/" aria-label="Torna alla Home">
          <span className="brand-mark">P</span>
          <span className="brand-copy">
            <strong>PMI Software</strong>
            <small>nome provvisorio</small>
          </span>
        </Link>
        <Link className="button button-small" to="/#soluzioni">← Torna alla Home</Link>
      </div>
    </header>
  )
}
