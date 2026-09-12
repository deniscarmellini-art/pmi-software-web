import { solutions } from '../data/solutions'
import { Link } from 'react-router-dom'

export function Solutions() {
  return (
    <section className="section section-soft solutions-section" id="soluzioni">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Dove interveniamo</p>
          <h2>Partiamo da un problema concreto.</h2>
          <p>
            Non proponiamo un gestionale enorme. Digitalizziamo il processo che oggi richiede troppo tempo,
            troppe registrazioni o troppe verifiche manuali.
          </p>
        </div>

        <div className="solutions-grid">
          {solutions.map((solution) => (
            <article className={`solution-card tone-${solution.tone}`} key={solution.title}>
              <div className="solution-topline">
                <span>{solution.eyebrow}</span>
                <span className="card-line" />
              </div>
              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
              <ul>
                {solution.features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
              <Link className="card-link" to={solution.href}>{solution.linkLabel} <span>→</span></Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
