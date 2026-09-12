import { FormEvent, useEffect, useState } from 'react'

const areaOptions = ['Magazzino', 'Logistica', 'Manutenzione', 'Produzione', 'Qualità', 'Pianificazione', 'Altro']

type ContactForm = {
  name: string
  company: string
  email: string
  phone: string
  area: string
  message: string
}

const emptyForm: ContactForm = {
  name: '',
  company: '',
  email: '',
  phone: '',
  area: '',
  message: '',
}

export function ContactCta() {
  const [form, setForm] = useState<ContactForm>(emptyForm)
  const [errors, setErrors] = useState<string[]>([])
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const applySuggestedArea = () => {
      const suggestedArea = sessionStorage.getItem('pmi-suggested-area')
      if (suggestedArea && areaOptions.includes(suggestedArea)) {
        setForm((previous) => ({ ...previous, area: suggestedArea }))
        sessionStorage.removeItem('pmi-suggested-area')
      }
    }

    applySuggestedArea()
    window.addEventListener('pmi-contact-area', applySuggestedArea)
    return () => window.removeEventListener('pmi-contact-area', applySuggestedArea)
  }, [])

  const updateField = (field: keyof ContactForm, value: string) => {
    setForm((previous) => ({ ...previous, [field]: value }))
    setErrors([])
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const requiredFields = [
      ['name', 'Nome'],
      ['company', 'Azienda'],
      ['email', 'Email'],
      ['message', 'Messaggio'],
    ] as const
    const missing = requiredFields
      .filter(([field]) => !form[field].trim())
      .map(([, label]) => label)

    if (missing.length > 0 || !/^\S+@\S+\.\S+$/.test(form.email.trim())) {
      const validationErrors = missing.length > 0 ? missing : []
      if (form.email.trim() && !/^\S+@\S+\.\S+$/.test(form.email.trim())) {
        validationErrors.push('un indirizzo email valido')
      }
      setErrors(validationErrors)
      setSubmitted(false)
      return
    }

    setErrors([])
    setSubmitted(true)
  }

  const handleEdit = () => {
    setSubmitted(false)
    setErrors([])
  }

  return (
    <section className="section contact-section" id="contatti">
      <div className="container contact-layout">
        <div className="section-heading contact-heading">
          <p className="eyebrow">Contatti</p>
          <h2>Parliamo del tuo processo.</h2>
          <p>
            Raccontaci in poche righe cosa oggi gestite con Excel, carta o passaggi manuali. Valutiamo insieme se ha senso trasformarlo in un piccolo software dedicato.
          </p>
        </div>

        <div className="contact-card">
          {!submitted ? (
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="contact-fields">
                <label>
                  Nome <span aria-hidden="true">*</span>
                  <input required type="text" value={form.name} onChange={(event) => updateField('name', event.target.value)} />
                </label>
                <label>
                  Azienda <span aria-hidden="true">*</span>
                  <input required type="text" value={form.company} onChange={(event) => updateField('company', event.target.value)} />
                </label>
                <label>
                  Email <span aria-hidden="true">*</span>
                  <input required type="email" value={form.email} onChange={(event) => updateField('email', event.target.value)} />
                </label>
                <label>
                  Telefono
                  <input type="tel" value={form.phone} onChange={(event) => updateField('phone', event.target.value)} />
                </label>
                <label>
                  Area del problema
                  <select value={form.area} onChange={(event) => updateField('area', event.target.value)}>
                    <option value="">Seleziona un'area</option>
                    {areaOptions.map((area) => <option key={area} value={area}>{area}</option>)}
                  </select>
                </label>
                <label className="contact-message">
                  Messaggio <span aria-hidden="true">*</span>
                  <textarea required rows={5} value={form.message} onChange={(event) => updateField('message', event.target.value)} />
                </label>
              </div>

              {errors.length > 0 && (
                <p className="contact-error" role="alert">Compila i campi obbligatori: {errors.join(', ')}.</p>
              )}
              <button className="button" type="submit">Prepara la richiesta</button>
              <small className="contact-form-note">Nessun dato verrà inviato senza conferma.</small>
            </form>
          ) : (
            <div className="contact-summary" aria-live="polite">
              <p className="eyebrow">Riepilogo della richiesta</p>
              <dl>
                <div><dt>Nome</dt><dd>{form.name}</dd></div>
                <div><dt>Azienda</dt><dd>{form.company}</dd></div>
                <div><dt>Email</dt><dd>{form.email}</dd></div>
                {form.phone && <div><dt>Telefono</dt><dd>{form.phone}</dd></div>}
                {form.area && <div><dt>Area del problema</dt><dd>{form.area}</dd></div>}
                <div><dt>Messaggio</dt><dd>{form.message}</dd></div>
              </dl>
              <p className="contact-notice">Nessun dato è stato ancora inviato.</p>
              <div className="contact-actions">
                <button className="matcher-secondary" type="button" onClick={handleEdit}>← Modifica</button>
                <button className="button" type="button" disabled>Invio non disponibile</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
