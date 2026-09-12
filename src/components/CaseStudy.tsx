const before = ['Registrazione manuale', 'Calcoli separati', 'Scarti da rettificare', 'Giacenza da ricostruire']
const after = ['QR pacco', 'Classificazione', 'Rettifica scarti', 'Giacenza aggiornata']

export function CaseStudy() {
  return (
    <section className="section case-study" id="caso-magazzino">
      <div className="container case-grid">
        <div>
          <p className="eyebrow eyebrow-light">Primo caso studio</p>
          <h2>Dal camion alla giacenza reale.</h2>
          <p className="case-lead">
            SisStore, applicato al magazzino legname, digitalizza il ricevimento della materia prima,
            l'identificazione dei pacchi, la classificazione, gli scarti e la disponibilità reale del materiale.
          </p>

          <div className="before-after">
            <div>
              <small>PRIMA</small>
              {before.map((item) => <span key={item}>{item}</span>)}
            </div>
            <div className="flow-arrow" aria-hidden="true">→</div>
            <div>
              <small>DOPO</small>
              {after.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>

          <a className="button button-light" href="#trova-soluzione">Vedi cosa possiamo fare</a>
        </div>

        <div className="case-card">
          <div className="case-card-head">
            <span>SisStore</span>
            <span className="status-pill">Demo</span>
          </div>
          <div className="case-metric">
            <small>Disponibilità reale</small>
            <strong>178,42 m³</strong>
            <span>Aggiornata da classificazione e rettifica</span>
          </div>
          <div className="case-bars">
            <div><span><b>23 mm</b><small>44,8 m³</small></span><i style={{ width: '46%' }} /></div>
            <div><span><b>34 mm</b><small>79,6 m³</small></span><i style={{ width: '78%' }} /></div>
            <div><span><b>44 mm</b><small>54,0 m³</small></span><i style={{ width: '59%' }} /></div>
          </div>
          <div className="case-note">I dati mostrati nella demo sono fittizi.</div>
        </div>
      </div>
    </section>
  )
}
