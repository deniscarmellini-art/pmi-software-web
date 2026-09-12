export function ContactCta() {
  return (
    <section className="section cta-section" id="contatti">
      <div className="container cta-card">
        <div>
          <p className="eyebrow">Il punto di partenza</p>
          <h2>C'è ancora qualche processo che gestite con Excel o carta?</h2>
          <p>
            Mostraci come funziona oggi. Il primo passo è capire se digitalizzarlo avrebbe davvero senso.
          </p>
        </div>
        <a className="button" href="mailto:contatto@esempio.it" onClick={(event) => event.preventDefault()}>
          Parliamo del processo
        </a>
        <small className="cta-note">Modulo contatti non ancora attivo — nessun dato viene inviato.</small>
      </div>
    </section>
  )
}
