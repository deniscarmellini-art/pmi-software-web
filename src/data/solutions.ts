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
    description: 'Gestione e tracciabilità dei materiali dalla ricezione alla disponibilità reale, con dati condivisi tra più operatori.',
    features: ['Ricevimento', 'QR', 'Giacenze', 'Scarti', 'Multiutente', 'KPI', 'Pianificazione'],
    linkLabel: 'SisStore',
    href: '/sisstore',
    tone: 'warehouse',
  },
  {
    eyebrow: '02',
    title: 'Logistica e Spedizioni',
    description: 'Gestione del flusso logistico dalla commessa alla partenza, con giacenze, carichi, mezzi e spedizioni sempre sotto controllo.',
    features: ['Commesse', 'Giacenze', 'QR', 'Carichi', 'Pianificazione', 'Gestione bilici', 'KPI'],
    linkLabel: 'SisLog',
    href: '/sislog',
    tone: 'logistics',
  },
  {
    eyebrow: '03',
    title: 'Manutenzione e Impianti',
    description: 'Richieste, interventi, preventiva, ricambi e costi collegati allo storico delle macchine.',
    features: ['Richieste', 'Preventiva', 'Interventi', 'Ricambi', 'Costi'],
    linkLabel: 'SisMaint',
    href: '/sismaint',
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
