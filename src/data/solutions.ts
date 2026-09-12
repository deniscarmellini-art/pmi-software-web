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
    description: 'Gestione e tracciabilità dei materiali dalla ricezione alla disponibilità reale.',
    features: ['Ricevimento', 'QR e barcode', 'Giacenze', 'Scarti', 'Pianificazione'],
    linkLabel: 'SisStore',
    href: '#caso-magazzino',
    tone: 'warehouse',
  },
  {
    eyebrow: '02',
    title: 'Logistica e Spedizioni',
    description: 'Dalla commessa al carico: preparazione, controllo e stato della spedizione sempre visibili.',
    features: ['Commesse', 'Preparazione', 'Carichi', 'Spedizioni', 'Storico'],
    linkLabel: 'SisLog',
    href: '#soluzioni',
    tone: 'logistics',
  },
  {
    eyebrow: '03',
    title: 'Manutenzione e Impianti',
    description: 'Richieste, interventi, preventiva, ricambi e costi collegati allo storico delle macchine.',
    features: ['Richieste', 'Preventiva', 'Interventi', 'Ricambi', 'Costi'],
    linkLabel: 'SisMaint',
    href: '#soluzioni',
    tone: 'maintenance',
  },
  {
    eyebrow: '04',
    title: 'Pianificazione e gestione produzione',
    description: 'SisMake è in sviluppo: una soluzione futura per pianificare e gestire la produzione intorno al vostro processo.',
    features: ['Pianificazione', 'Flussi di produzione', 'Sviluppo graduale', 'Formazione', 'Evoluzione'],
    linkLabel: 'SisMake — in sviluppo',
    href: '#contatti',
    tone: 'custom',
  },
]
