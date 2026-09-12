const steps = [
  {
    number: '01',
    title: 'Guardiamo come lavorate oggi',
    text: 'Partiamo dal reparto, dalle persone e dagli strumenti che usate davvero: Excel, carta, gestionali e passaggi manuali.',
  },
  {
    number: '02',
    title: 'Semplifichiamo il flusso',
    text: 'Individuiamo doppie registrazioni, attese, errori ricorrenti e informazioni che oggi sono difficili da trovare.',
  },
  {
    number: '03',
    title: 'Costruiamo una prima versione',
    text: 'Una soluzione piccola e utilizzabile, da far provare subito alle persone che dovranno lavorarci ogni giorno.',
  },
  {
    number: '04',
    title: 'La miglioriamo sul campo',
    text: 'Il software cresce insieme al processo reale, senza obbligare l’azienda ad adattarsi a un programma standard.',
  },
]

export function Method() {
  return (
    <section className="section method-section" id="metodo">
      <div className="container method-layout">
        <div className="section-heading sticky-copy">
          <p className="eyebrow">Il metodo</p>
          <h2>Prima il lavoro. Poi il software.</h2>
          <p>
            La parte più importante non è scrivere codice: è capire bene ciò che accade tra una fase e l'altra.
          </p>
          <div className="method-formula" aria-label="Metodo in quattro fasi">
            <span>Osserva</span><i>→</i><span>Semplifica</span><i>→</i><span>Digitalizza</span><i>→</i><span>Migliora</span>
          </div>
        </div>

        <div className="method-steps">
          {steps.map((step) => (
            <article className="method-step" key={step.number}>
              <span>{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
