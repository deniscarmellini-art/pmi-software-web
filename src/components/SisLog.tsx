import { Link } from 'react-router-dom'

const sisLogFlow = [
  ['Commessa', 'Ordine, cliente, riferimento e pannelli previsti.'],
  ['Preparazione', 'Verifica del materiale pronto e di quello ancora mancante.'],
  ['Etichettatura', 'SisLog genera e stampa le etichette identificative dei pannelli e dei pacchi.'],
  ['Magazzino', 'Gli elementi pronti vengono scansionati e risultano disponibili in giacenza.'],
  ['Pianificazione', 'Organizzazione delle spedizioni nelle giornate, evitando sovraccarichi.'],
  ['Assegnazione mezzo', 'Verifica disponibilità e assegnazione del bilico aziendale o del trasportatore.'],
  ['Carico camion', 'Scansione e controllo del materiale durante il carico.'],
  ['Partenza', 'Registrazione della spedizione e aggiornamento dello stato.'],
] as const

const sisLogFeatures = [
  'Commesse',
  'Gestione pannelli',
  'Gestione pacchi',
  'Etichette QR e stampa',
  'Scansione',
  'Giacenze magazzino',
  'Liste di carico',
  'Carico camion',
  'Operatori',
  'Gestione bilici',
  'Pianificazione spedizioni',
  'Trasportatori',
  'Peso e volume',
  'KPI e stati',
  'Storico spedizioni',
  'Accesso multiutente',
]

export function SisLog() {
  return (
    <section className="sisstore-section sislog-section" id="sislog" aria-label="SisLog">
      <div className="container sisstore-shell">
        <div className="sisstore-hero">
          <div className="sisstore-hero-copy">
            <p className="eyebrow eyebrow-light">Software per logistica e spedizioni</p>
            <h2>SisLog</h2>
            <p className="sisstore-subtitle">
              Gestione e tracciabilità del flusso logistico, dalla commessa alla spedizione.
            </p>
            <p className="sisstore-lead">
              SisLog collega preparazione, disponibilità del materiale, carico e spedizione in un unico flusso,
              rendendo immediatamente visibile lo stato reale di ogni commessa e di ogni camion.
            </p>
          </div>
          <div className="sisstore-screen sisstore-screen-hero" aria-label="Placeholder schermata SisLog">
            <span className="sisstore-screen-bar"><i /><i /><i /></span>
            <strong>Anteprima software</strong>
            <small>Screenshot reale in arrivo</small>
          </div>
        </div>

        <div className="sisstore-grid sisstore-problem-grid">
          <div className="sisstore-heading">
            <p className="eyebrow eyebrow-light">Il problema</p>
            <h3>Quando sapere se una spedizione è pronta richiede troppe verifiche.</h3>
          </div>
          <div className="sisstore-problem-list">
            <span className="sisstore-card sisstore-problem-card">
              <strong>Commesse incomplete alla partenza</strong>
              <small>Senza un controllo unico del carico, una spedizione può partire con pannelli o elementi della commessa ancora mancanti.</small>
            </span>
            <span className="sisstore-card sisstore-problem-card">
              <strong>Bilici e spedizioni da coordinare</strong>
              <small>Disponibilità dei bilici e pianificazione delle spedizioni richiedono controlli separati, con il rischio di sovraccaricare alcune giornate.</small>
            </span>
            <span className="sisstore-card sisstore-problem-card">
              <strong>Persone e strumenti non sincronizzati</strong>
              <small>Operatori diversi lavorano su strumenti separati, senza una visione unica e aggiornata.</small>
            </span>
            <span className="sisstore-card sisstore-problem-card">
              <strong>Controlli manuali</strong>
              <small>Per sapere cosa è pronto o manca servono verifiche tra persone, fogli e liste.</small>
            </span>
            <span className="sisstore-card sisstore-problem-card">
              <strong>Informazioni distribuite</strong>
              <small>Stato della commessa, materiale pronto, carichi e spedizioni sono gestiti in punti diversi.</small>
            </span>
            <span className="sisstore-card sisstore-problem-card">
              <strong>Nessuna visione immediata dei dati</strong>
              <small>Peso, volume, avanzamento, stato dei carichi e disponibilità dei mezzi richiedono controlli o elaborazioni separate.</small>
            </span>
          </div>
        </div>

        <div className="sisstore-grid sisstore-flow-grid">
          <div className="sisstore-heading">
            <p className="eyebrow eyebrow-light">Come funziona</p>
            <h3>Un flusso leggibile, dalla commessa alla partenza.</h3>
          </div>
          <div className="sisstore-flow sislog-flow">
            {sisLogFlow.map(([step, description], index) => (
              <div className="sisstore-card sisstore-flow-step" key={step}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <strong>{step}</strong>
                  <small>{description}</small>
                </div>
                {index < sisLogFlow.length - 1 && <i aria-hidden="true">→</i>}
              </div>
            ))}
          </div>
        </div>

        <div className="sisstore-grid sisstore-features-grid">
          <div className="sisstore-heading">
            <p className="eyebrow eyebrow-light">Funzioni principali</p>
            <h3>Gli strumenti che tengono insieme la spedizione.</h3>
          </div>
          <ul className="sisstore-features sislog-features">
            {sisLogFeatures.map((feature) => <li key={feature}><strong>{feature}</strong></li>)}
          </ul>
        </div>

        <div className="sisstore-case">
          <div className="sisstore-case-copy">
            <p className="eyebrow eyebrow-light">Caso reale — Logistica pannelli</p>
            <h3>Dalla commessa al camion pronto a partire.</h3>
            <p>
              SisLog segue pannelli, pacchi, giacenze, mezzi e spedizioni dalla disponibilità del materiale fino alla partenza del camion,
              mantenendo sempre visibile ciò che è pronto, pianificato, caricato o ancora mancante.
            </p>
            <div className="sisstore-before-after">
              <div>
                <small>PRIMA</small>
                <span>Liste e controlli manuali</span>
                <span>Materiale pronto da verificare</span>
                <span>Pianificazione su strumenti separati</span>
                <span>Disponibilità bilici da controllare</span>
                <span>Carico da ricostruire</span>
              </div>
              <div>
                <small>CON SISLOG</small>
                <span>Giacenze aggiornate tramite scansione</span>
                <span>Etichette QR e tracciabilità</span>
                <span>Pianificazione spedizioni</span>
                <span>Gestione bilici</span>
                <span>Carico verificato</span>
                <span>Peso, volume e stato sempre visibili</span>
              </div>
            </div>
          </div>
          <div className="sisstore-screen sisstore-screen-case" aria-label="Placeholder schermata caso applicativo SisLog">
            <span className="sisstore-screen-bar"><i /><i /><i /></span>
            <div className="sisstore-placeholder-lines"><i /><i /><i /><i /></div>
            <small>Placeholder screenshot caso applicativo</small>
          </div>
        </div>

        <div className="sisstore-screens">
          <div className="sisstore-heading">
            <p className="eyebrow eyebrow-light">SisLog sul campo</p>
            <h3>Le viste che accompagnano la spedizione.</h3>
          </div>
          <div className="sisstore-screen-grid">
            {['Dashboard spedizioni', 'Pianificazione spedizioni', 'Carico camion'].map((label) => (
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
            <p>SisLog è pensato per aziende che gestiscono commesse composte da più elementi e devono coordinare materiale, mezzi, pianificazione, carico e spedizione tra più operatori.</p>
            <ul className="sisstore-fit-points">
              <li>Commesse con molti elementi da controllare</li>
              <li>Bilici e spedizioni da coordinare</li>
              <li>Necessità di sapere subito cosa è pronto, caricato o spedito</li>
            </ul>
          </div>
        </div>

        <div className="sisstore-cta">
          <div>
            <p className="eyebrow eyebrow-light">Un processo. Una direzione</p>
            <h3>Vuoi capire se SisLog può semplificare la tua logistica?</h3>
            <p>Partiamo da come organizzate oggi commesse, mezzi, carichi e spedizioni e valutiamo insieme cosa avrebbe senso digitalizzare.</p>
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
