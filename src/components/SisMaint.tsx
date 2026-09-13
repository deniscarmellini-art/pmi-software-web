import { Link } from 'react-router-dom'

const sisMaintFlow = [
  ['Segnalazione', 'Richiesta intervento con reparto, macchina, priorità, categoria e foto.'],
  ['Valutazione', 'Definizione della gestione interna o esterna e delle attività da eseguire.'],
  ['Pianificazione', 'Interventi da fare e manutenzioni preventive vengono organizzati per priorità e scadenza.'],
  ['Intervento', 'Il tecnico apre la scheda completa e registra ciò che viene eseguito.'],
  ['Ricambi e magazzino', 'Carichi, scarichi e ricambi utilizzati aggiornano la giacenza e segnalano gli articoli sotto scorta.'],
  ['Manodopera e costi', "Ore, tariffa del tecnico e costi esterni concorrono al totale dell'intervento."],
  ['Chiusura', 'L’intervento viene completato con stato finale, rapportini e allegati.'],
  ['Storico e preventiva', 'Lo storico macchina si aggiorna e la prossima manutenzione preventiva viene ricalcolata dalla chiusura effettiva.'],
] as const

const sisMaintFeatures = [
  'Richieste intervento',
  'Priorità e categorie',
  'Manutenzione preventiva',
  'Pianificazione',
  'Interventi',
  'Tecnici interni',
  'Tecnici e assistenze esterne',
  'Magazzino ricambi',
  'Scorte minime',
  'Costi e manodopera',
  'Macchine e impianti',
  'Documenti e allegati',
  'Fornitori e aziende di assistenza',
  'KPI e dashboard',
  'Storico macchina',
  'Accesso multiutente',
]

export function SisMaint() {
  return (
    <section className="sisstore-section sismaint-section" id="sismaint" aria-label="SisMaint">
      <div className="container sisstore-shell">
        <div className="sisstore-hero">
          <div className="sisstore-hero-copy">
            <p className="eyebrow eyebrow-light">Software per manutenzione e impianti</p>
            <h2>SisMaint</h2>
            <p className="sisstore-subtitle">
              Gestione della manutenzione, dagli interventi allo storico completo degli impianti.
            </p>
            <p className="sisstore-lead">
              SisMaint riunisce richieste, manutenzione preventiva, ricambi, tecnici, fornitori, aziende di assistenza, documenti e costi in un unico flusso condiviso,
              mantenendo sempre visibile ciò che deve essere fatto e ciò che è già stato eseguito.
            </p>
          </div>
          <div className="sisstore-screen sisstore-screen-hero" aria-label="Placeholder schermata SisMaint">
            <span className="sisstore-screen-bar"><i /><i /><i /></span>
            <strong>Anteprima software</strong>
            <small>Screenshot reale in arrivo</small>
          </div>
        </div>

        <div className="sisstore-grid sisstore-problem-grid">
          <div className="sisstore-heading">
            <p className="eyebrow eyebrow-light">Il problema</p>
            <h3>Quando la manutenzione dipende da troppe verifiche e promemoria.</h3>
          </div>
          <div className="sisstore-problem-list">
            <span className="sisstore-card sisstore-problem-card">
              <strong>Richieste difficili da seguire</strong>
              <small>Segnalazioni, priorità e stato degli interventi vengono gestiti tra persone, mail, carta o strumenti diversi.</small>
            </span>
            <span className="sisstore-card sisstore-problem-card">
              <strong>Preventiva da ricordare manualmente</strong>
              <small>Scadenze e periodicità richiedono controlli continui e rischiano di essere dimenticate.</small>
            </span>
            <span className="sisstore-card sisstore-problem-card">
              <strong>Storico macchina frammentato</strong>
              <small>Interventi, guasti, ricambi, documenti e costi non sono consultabili rapidamente in un unico punto.</small>
            </span>
            <span className="sisstore-card sisstore-problem-card">
              <strong>Ricambi e scorte da controllare</strong>
              <small>Carichi, scarichi e disponibilità dei ricambi devono essere verificati manualmente, rendendo difficile individuare subito gli articoli sotto scorta.</small>
            </span>
            <span className="sisstore-card sisstore-problem-card">
              <strong>Tecnici, fornitori e documenti separati</strong>
              <small>Fornitori, aziende di assistenza, referenti, tecnici e documentazione vengono spesso gestiti in archivi separati.</small>
            </span>
            <span className="sisstore-card sisstore-problem-card">
              <strong>Costi non immediatamente visibili</strong>
              <small>Manodopera, ricambi e costi esterni devono essere ricostruiti per conoscere il costo reale dell'intervento.</small>
            </span>
          </div>
        </div>

        <div className="sisstore-grid sisstore-flow-grid">
          <div className="sisstore-heading">
            <p className="eyebrow eyebrow-light">Come funziona</p>
            <h3>Un flusso leggibile, dalla segnalazione allo storico macchina.</h3>
          </div>
          <div className="sisstore-flow sismaint-flow">
            {sisMaintFlow.map(([step, description], index) => (
              <div className="sisstore-card sisstore-flow-step" key={step}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <strong>{step}</strong>
                  <small>{description}</small>
                </div>
                {index < sisMaintFlow.length - 1 && <i aria-hidden="true">→</i>}
              </div>
            ))}
          </div>
        </div>

        <div className="sisstore-grid sisstore-features-grid">
          <div className="sisstore-heading">
            <p className="eyebrow eyebrow-light">Funzioni principali</p>
            <h3>Gli strumenti che tengono insieme la manutenzione.</h3>
          </div>
          <ul className="sisstore-features sismaint-features">
            {sisMaintFeatures.map((feature) => <li key={feature}><strong>{feature}</strong></li>)}
          </ul>
        </div>

        <div className="sisstore-case">
          <div className="sisstore-case-copy">
            <p className="eyebrow eyebrow-light">Caso reale — Manutenzione impianti</p>
            <h3>Dalla segnalazione allo storico macchina.</h3>
            <p>
              SisMaint permette di seguire richieste, interventi, preventiva, ricambi e costi mantenendo sempre disponibile lo storico completo di ogni macchina e impianto.
            </p>
            <div className="sisstore-before-after">
              <div>
                <small>PRIMA</small>
                <span>Richieste distribuite</span>
                <span>Preventive da ricordare</span>
                <span>Ricambi e scorte da verificare</span>
                <span>Fornitori e assistenze separati</span>
                <span>Costi da ricostruire</span>
                <span>Documentazione e storico dispersi</span>
              </div>
              <div>
                <small>CON SISMAINT</small>
                <span>Richieste e priorità visibili</span>
                <span>Preventiva programmata</span>
                <span>Magazzino ricambi aggiornato e scorte evidenziate</span>
                <span>Fornitori e assistenze in un’unica anagrafica</span>
                <span>Manodopera e costi calcolati</span>
                <span>Storico e documenti per macchina</span>
              </div>
            </div>
          </div>
          <div className="sisstore-screen sisstore-screen-case" aria-label="Placeholder schermata caso applicativo SisMaint">
            <span className="sisstore-screen-bar"><i /><i /><i /></span>
            <div className="sisstore-placeholder-lines"><i /><i /><i /><i /></div>
            <small>Placeholder screenshot caso applicativo</small>
          </div>
        </div>

        <div className="sisstore-screens">
          <div className="sisstore-heading">
            <p className="eyebrow eyebrow-light">SisMaint sul campo</p>
            <h3>Le viste che accompagnano la manutenzione quotidiana.</h3>
          </div>
          <div className="sisstore-screen-grid">
            {['Dashboard manutenzioni', 'Scheda intervento', 'Magazzino ricambi'].map((label) => (
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
            <p>SisMaint è pensato per aziende produttive che devono coordinare interventi, manutenzione preventiva, tecnici, ricambi, fornitori, assistenze e documentazione su più macchine o impianti.</p>
            <ul className="sisstore-fit-points">
              <li>Più macchine e interventi da coordinare</li>
              <li>Manutenzione preventiva da tenere sotto controllo</li>
              <li>Ricambi, costi e storico da avere sempre disponibili</li>
            </ul>
          </div>
        </div>

        <div className="sisstore-cta">
          <div>
            <p className="eyebrow eyebrow-light">Un processo. Una direzione</p>
            <h3>Vuoi capire se SisMaint può semplificare la gestione della manutenzione?</h3>
            <p>Partiamo da come gestite oggi richieste, interventi, preventiva, ricambi e assistenze e valutiamo insieme cosa avrebbe senso digitalizzare.</p>
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
