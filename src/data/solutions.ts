export type Solution = {
  eyebrow: string
  title: string
  description: string
  features: string[]
  linkLabel: string
  href: string
  tone: 'warehouse' | 'logistics' | 'maintenance' | 'custom'
}

export const solutions: Solution[] = [
  {
    eyebrow: '01',
    title: 'Materiali e Magazzino',
    description: 'Ricevimento, identificazione, giacenze e tracciabilità del materiale in un unico flusso.',
    features: ['Ricevimento', 'QR e barcode', 'Giacenze', 'Scarti', 'Pianificazione'],
    linkLabel: 'Magazzino Legname',
    href: '#caso-magazzino',
    tone: 'warehouse',
  },
  {
    eyebrow: '02',
    title: 'Logistica e Spedizioni',
    description: 'Dalla commessa al carico: preparazione, controllo e stato della spedizione sempre visibili.',
    features: ['Commesse', 'Preparazione', 'Carichi', 'Spedizioni', 'Storico'],
    linkLabel: 'Scopri SisLog',
    href: '#soluzioni',
    tone: 'logistics',
  },
  {
    eyebrow: '03',
    title: 'Manutenzione e Impianti',
    description: 'Richieste, interventi, preventiva, ricambi e costi collegati allo storico delle macchine.',
    features: ['Richieste', 'Preventiva', 'Interventi', 'Ricambi', 'Costi'],
    linkLabel: 'Gestione Manutenzione',
    href: '#soluzioni',
    tone: 'maintenance',
  },
  {
    eyebrow: '04',
    title: 'Il tuo processo',
    description: 'Se il problema è diverso, partiamo da come lavorate oggi e costruiamo la soluzione intorno a voi.',
    features: ['Analisi del flusso', 'Prototipo', 'Sviluppo graduale', 'Formazione', 'Evoluzione'],
    linkLabel: 'Raccontaci come lavorate',
    href: '#contatti',
    tone: 'custom',
  },
]
