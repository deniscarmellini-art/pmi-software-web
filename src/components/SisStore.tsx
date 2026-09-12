import { Link } from 'react-router-dom'

const sisStoreFlow = [
  ['Ricevimento', 'Registrazione del carico e dei pacchi in ingresso.'],
  ['QR', 'Identificazione univoca dei pacchi e stampa etichette.'],
  ['Classificazione', 'Registrazione dello stato e della qualità del materiale.'],
  ['Rettifica scarti', 'Aggiornamento degli scarti reali dopo la classificazione.'],
  ['Giacenza', 'Disponibilità reale aggiornata automaticamente.'],
  ['Scarico', 'Uscita del pacco tramite lettura QR.'],
  ['Pianificazione', 'Previsione di arrivi, consumi e disponibilità.'],
] as const

const sisStoreFeatures = [
  'Ricevimento merci',
  'Gestione pacchi',
  'QR e stampa etichette',
  'Classificazione',
  'Rettifica scarti',
  'Giacenze',
  'Storico',
  'Pianificazione',
  'KPI',
  'Anagrafiche e parametri',
]

export function SisStore() {
  return (
    <section className="sisstore-section" id="sisstore" aria-label="SisStore">
      <div className="container sisstore-shell">
        <div className="sisstore-hero">
          <div className="sisstore-hero-copy">
            <p className="eyebrow eyebrow-light">Software per materiali e magazzino</p>
            <h2>SisStore</h2>
            <p className="sisstore-subtitle">
              Gestione e tracciabilità dei materiali dalla ricezione alla disponibilità reale.
            </p>
            <p className="sisstore-lead">
              SisStore riunisce in un unico flusso le informazioni che oggi si disperdono tra fogli Excel,
              carta e registrazioni manuali, rendendo più chiaro il percorso di ogni materiale.
            </p>
          </div>
          <div className="sisstore-screen sisstore-screen-hero" aria-label="Placeholder schermata SisStore">
            <span className="sisstore-screen-bar"><i /><i /><i /></span>
            <strong>Anteprima software</strong>
            <small>Screenshot reale in arrivo</small>
          </div>
        </div>

        <div className="sisstore-grid sisstore-problem-grid">
          <div className="sisstore-heading">
            <p className="eyebrow eyebrow-light">Il problema</p>
            <h3>Quando la disponibilità va ricostruita.</h3>
          </div>
          <div className="sisstore-problem-list">
            <span className="sisstore-card sisstore-problem-card"><strong>Gestione tramite Excel e carta</strong></span>
            <span className="sisstore-card sisstore-problem-card"><strong>Registrazioni manuali</strong></span>
            <span className="sisstore-card sisstore-problem-card"><strong>Scarti da verificare</strong></span>
            <span className="sisstore-card sisstore-problem-card"><strong>Giacenze non aggiornate</strong></span>
            <span className="sisstore-card sisstore-problem-card">
              <strong>Nessuna visione immediata dei dati</strong>
              <small>Le informazioni esistono, ma non sono disponibili subito sotto forma di KPI, totali e indicatori.</small>
            </span>
          </div>
        </div>

        <div className="sisstore-grid sisstore-flow-grid">
          <div className="sisstore-heading">
            <p className="eyebrow eyebrow-light">Come funziona</p>
            <h3>Un flusso leggibile, dall'ingresso allo scarico.</h3>
          </div>
          <div className="sisstore-flow">
            {sisStoreFlow.map(([step, description], index) => (
              <div className="sisstore-card sisstore-flow-step" key={step}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <strong>{step}</strong>
                  <small>{description}</small>
                </div>
                {index < sisStoreFlow.length - 1 && <i aria-hidden="true">→</i>}
              </div>
            ))}
          </div>
        </div>

        <div className="sisstore-grid sisstore-features-grid">
          <div className="sisstore-heading">
            <p className="eyebrow eyebrow-light">Funzioni principali</p>
            <h3>Gli strumenti che tengono insieme il processo.</h3>
          </div>
          <ul className="sisstore-features">
            {sisStoreFeatures.map((feature) => <li key={feature}>{feature}</li>)}
          </ul>
        </div>

        <div className="sisstore-case">
          <div className="sisstore-case-copy">
            <p className="eyebrow eyebrow-light">Caso reale — Magazzino legname</p>
            <h3>Dal camion alla giacenza reale.</h3>
            <p>
              SisStore applicato al magazzino legname digitalizza il ricevimento della materia prima,
              l'identificazione dei pacchi, la classificazione, gli scarti e la disponibilità reale del materiale.
            </p>
            <div className="sisstore-before-after">
              <div>
                <small>PRIMA</small>
                <span>Registrazione manuale</span>
                <span>Calcoli separati</span>
                <span>Scarti da rettificare</span>
                <span>Giacenza da ricostruire</span>
              </div>
              <div>
                <small>CON SISSTORE</small>
                <span>QR pacco</span>
                <span>Classificazione</span>
                <span>Rettifica scarti</span>
                <span>Giacenza aggiornata</span>
                <span>Storico e pianificazione</span>
              </div>
            </div>
          </div>
          <div className="sisstore-screen sisstore-screen-case" aria-label="Placeholder schermata caso applicativo SisStore">
            <span className="sisstore-screen-bar"><i /><i /><i /></span>
            <div className="sisstore-placeholder-lines"><i /><i /><i /><i /></div>
            <small>Placeholder screenshot caso applicativo</small>
          </div>
        </div>

        <div className="sisstore-screens">
          <div className="sisstore-heading">
            <p className="eyebrow eyebrow-light">SisStore sul campo</p>
            <h3>Le viste che accompagnano il lavoro quotidiano.</h3>
          </div>
          <div className="sisstore-screen-grid">
            {['Ricevimento merci', 'Giacenze', 'Pianificazione'].map((label) => (
              <div className="sisstore-screen sisstore-screen-small" key={label} aria-label={`Placeholder screenshot ${label}`}>
                <span className="sisstore-screen-bar"><i /><i /><i /></span>
                <strong>{label}</strong>
                <small>Placeholder screenshot</small>
              </div>
            ))}
          </div>
        </div>

        <div className="sisstore-fit">
          <p className="eyebrow eyebrow-light">Per chi è adatto</p>
          <div>
            <p>SisStore è pensato per aziende che devono gestire materiali, lotti o pacchi attraverso più fasi operative e che oggi dipendono ancora da Excel, carta o registrazioni separate.</p>
            <ul className="sisstore-fit-points">
              <li>Materiali, lotti o pacchi da tracciare</li>
              <li>Più fasi operative prima della disponibilità</li>
              <li>Excel, carta o registrazioni separate da sostituire</li>
            </ul>
          </div>
        </div>

        <div className="sisstore-cta">
          <div>
            <p className="eyebrow eyebrow-light">Un processo, una direzione</p>
            <h3>Vuoi capire se SisStore può adattarsi al tuo processo?</h3>
            <p>Partiamo da come gestite oggi il materiale e valutiamo insieme cosa avrebbe senso digitalizzare.</p>
          </div>
          <div className="sisstore-cta-actions">
            <Link className="button" to="/#trova-soluzione">Trova la tua soluzione</Link>
            <Link className="button button-light" to="/#contatti">Parliamo del tuo processo</Link>
          </div>
        </div>
      </div>
    </section>
  )
}