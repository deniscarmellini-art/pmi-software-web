export function Hero() {
  return (
    <main>
      <section className="hero section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Software per PMI produttive</p>
            <h1>
              Software costruiti
              <span> intorno al tuo lavoro.</span>
            </h1>
            <p className="hero-lead">
              Digitalizziamo i processi che Excel, carta e gestionali standard non riescono a gestire bene,
              senza complicare il lavoro di chi li usa ogni giorno.
            </p>

            <div className="hero-actions">
              <a className="button" href="#soluzioni">Scopri le soluzioni</a>
              <a className="text-link" href="#metodo">Come lavoriamo <span aria-hidden="true">→</span></a>
            </div>

            <div className="hero-tags" aria-label="Aree di intervento">
              <span>Magazzino</span>
              <span>Logistica</span>
              <span>Manutenzione</span>
              <span>Processi su misura</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Esempio di dashboard operativa">
            <div className="visual-toolbar">
              <div className="visual-dots"><i /><i /><i /></div>
              <span>Panoramica operativa</span>
            </div>
            <div className="visual-body">
              <div className="visual-kpis">
                <div><small>Materiale disponibile</small><strong>178,4 m³</strong><em>aggiornato</em></div>
                <div><small>Spedizioni</small><strong>12</strong><em>questa settimana</em></div>
                <div><small>Interventi aperti</small><strong>6</strong><em>2 alta priorità</em></div>
              </div>
              <div className="visual-panel">
                <div className="panel-heading">
                  <div><small>Flusso</small><strong>Situazione di oggi</strong></div>
                  <span className="status-pill">In tempo reale</span>
                </div>
                <div className="flow-line">
                  {['Ricevimento', 'Controllo', 'Disponibile', 'Spedizione'].map((label, index) => (
                    <div className="flow-step" key={label}>
                      <span className={index < 3 ? 'flow-dot active' : 'flow-dot'} />
                      <small>{label}</small>
                    </div>
                  ))}
                </div>
                <div className="mock-table">
                  <div className="mock-row mock-head"><span>Processo</span><span>Stato</span><span>Dato</span></div>
                  <div className="mock-row"><span>Magazzino 34 mm</span><span className="mini-pill ok">OK</span><span>62,7 m³</span></div>
                  <div className="mock-row"><span>Carico C-026</span><span className="mini-pill progress">In corso</span><span>8/12</span></div>
                  <div className="mock-row"><span>Pressa linea 2</span><span className="mini-pill warning">Da fare</span><span>Alta</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
