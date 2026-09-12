import { useMemo, useState } from 'react'

const areaOptions = ['Magazzino', 'Logistica', 'Manutenzione', 'Produzione', 'Qualità', 'Pianificazione', 'Altro']
const methodOptions = ['Excel', 'Carta', 'Gestionale standard', 'Più strumenti insieme', 'Nessun sistema preciso']
const problemOptions = ['Troppi inserimenti', 'Errori', 'Dati non aggiornati', 'Poco controllo', 'Scarsa tracciabilità', 'Troppo tempo perso']

const caseOptions = {
  warehouse: {
    label: 'SisStore',
    href: '#caso-magazzino',
    title: 'Controllo giacenza reale',
    description: 'Il punto di partenza è rendere immediata la visibilità del materiale e ridurre i passaggi manuali che fanno perdere tempo e precisione.',
  },
  logistics: {
    label: 'SisLog',
    href: '#soluzioni',
    title: 'Flusso logistico più chiaro',
    description: 'Quando le spedizioni, i carichi e le informazioni sono sparsi tra più strumenti, serve un flusso unico per coordinare il lavoro e monitorare lo stato in tempo reale.',
  },
  maintenance: {
    label: 'SisMaint',
    href: '#soluzioni',
    title: 'Interventi e ricambi sotto controllo',
    description: 'Quando le richieste, i costi e le verifiche si disperdono, il problema è coordinare interventi, prevenzione e storico in un unico percorso.',
  },
  manufacturing: {
    label: 'SisMake — in sviluppo',
    href: '#soluzioni',
    title: 'Pianificazione della produzione',
    description: 'SisMake è in sviluppo: una soluzione futura per rendere più chiari i flussi di pianificazione e gestione della produzione.',
  },
} as const

function getRecommendation(area: string, method: string, problem: string) {
  const areaKey = area.toLowerCase()
  const problemKey = problem.toLowerCase()

  if (areaKey.includes('magazzino')) return caseOptions.warehouse
  if (areaKey.includes('logistica')) return caseOptions.logistics
  if (areaKey.includes('manutenzione')) return caseOptions.maintenance
  if (areaKey.includes('produzione') || areaKey.includes('pianificazione')) return caseOptions.manufacturing

  if (method.includes('Più strumenti insieme')) return caseOptions.logistics
  if (areaKey.includes('qualità') || problemKey.includes('tracciabilità')) return caseOptions.warehouse

  if (problemKey.includes('tempo perso') || problemKey.includes('inserimenti') || problemKey.includes('aggiornati')) {
    return caseOptions.warehouse
  }

  if (problemKey.includes('errori') || problemKey.includes('controllo')) {
    return caseOptions.maintenance
  }

  return caseOptions.logistics
}

export function Troubleshooter() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({ area: '', method: '', problem: '' })

  const steps = [
    { key: 'area', label: 'Dove hai il problema?', options: areaOptions },
    { key: 'method', label: 'Come lo gestite oggi?', options: methodOptions },
    { key: 'problem', label: 'Qual è il problema principale?', options: problemOptions },
  ] as const

  const currentConfig = steps[step]
  const currentValue = answers[currentConfig.key as keyof typeof answers]

  const recommendation = useMemo(
    () => getRecommendation(answers.area, answers.method, answers.problem),
    [answers.area, answers.method, answers.problem],
  )

  const showResult = Boolean(answers.area && answers.method && answers.problem)

  const handleSelect = (value: string) => {
    const key = currentConfig.key
    setAnswers((previous) => ({ ...previous, [key]: value }))

    if (step < steps.length - 1) {
      setStep((current) => current + 1)
    }
  }

  const goBack = (targetStep: number) => {
    setStep(targetStep)
  }

  const restart = () => {
    setAnswers({ area: '', method: '', problem: '' })
    setStep(0)
  }

  const prepareContact = () => {
    if (answers.area) {
      sessionStorage.setItem('pmi-suggested-area', answers.area)
      window.dispatchEvent(new Event('pmi-contact-area'))
    }
  }

  return (
    <section className="section matcher-section" id="trova-soluzione" aria-label="Trova la tua soluzione">
      <div className="container matcher-shell">
        <div className="section-heading matcher-heading">
          <p className="eyebrow">Trova la tua soluzione</p>
          <h2>Vediamo cosa ti serve davvero.</h2>
        </div>

        <div className="matcher-card">
          {!showResult ? (
            <>
              <div className="matcher-progress" aria-label="Avanzamento della selezione">
                {steps.map((item, index) => (
                  <button
                    key={item.label}
                    type="button"
                    className={index === step ? 'matcher-dot is-active' : 'matcher-dot'}
                    aria-label={`Vai al passaggio ${index + 1}: ${item.label}`}
                    onClick={() => setStep(index)}
                  />
                ))}
              </div>

              <div className="matcher-step">
                <span className="matcher-step-index">{String(step + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{currentConfig.label}</h3>
                  <div className="matcher-options">
                    {currentConfig.options.map((option) => (
                      <button
                        type="button"
                        key={option}
                        className={currentValue === option ? 'matcher-option is-selected' : 'matcher-option'}
                        onClick={() => handleSelect(option)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {step > 0 && (
                <button type="button" className="matcher-back" onClick={() => goBack(step - 1)}>
                  ← Indietro
                </button>
              )}
            </>
          ) : (
            <div className="matcher-result">
              <div className="matcher-topline">
                <span>Risultato</span>
                <span className="matcher-badge">{recommendation.label}</span>
              </div>

              <h3>{recommendation.title}</h3>
              <p>{recommendation.description}</p>

              <div className="matcher-summary">
                <span>{answers.area}</span>
                <span>{answers.method}</span>
                <span>{answers.problem}</span>
              </div>

              <div className="matcher-actions">
                <button type="button" className="matcher-secondary" onClick={() => goBack(2)}>← Modifica risposte</button>
                <button type="button" className="matcher-secondary" onClick={restart}>Ricomincia</button>
                <a className="button" href={recommendation.href}>Guarda il caso più simile</a>
                <a className="button button-light" href="#contatti" onClick={prepareContact}>Parliamo del tuo processo</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
