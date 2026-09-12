# PMI Software Web — v0.1

Prima base del sito commerciale per soluzioni software dedicate alle PMI produttive.

## Stack

- React 19
- TypeScript 7
- Vite 8
- CSS puro (nessuna libreria grafica esterna)

## Requisiti

Vite 8 richiede Node.js 20.19+ oppure 22.12+.

Verifica con:

```bash
node --version
npm --version
```

## Avvio locale

Apri il terminale nella cartella del progetto e lancia:

```bash
npm install
npm run dev
```

Poi apri l'indirizzo mostrato da Vite, normalmente `http://localhost:5173`.

## Build di produzione

```bash
npm run build
npm run preview
```

La cartella generata per la pubblicazione è `dist/`.

## Contenuto della v0.1

- Header responsive
- Hero commerciale
- Quattro aree: Magazzino, Logistica, Manutenzione, Processo personalizzato
- Metodo di lavoro
- Primo caso studio Magazzino Legname
- CTA contatti non attiva (nessun dato inviato)
- Layout responsive desktop / tablet / mobile

## Prossime fasi

1. Scegliere il nome commerciale definitivo.
2. Sostituire i dati demo con contenuti e schermate validate.
3. Creare le pagine/casi studio di SisLog e Gestione Manutenzione.
4. Realizzare il percorso interattivo “Cosa vorresti migliorare?”.
5. Collegare il repository GitHub a un hosting gratuito.

## Nota

`PMI Software` è solo un nome tecnico provvisorio usato durante lo sviluppo.


## v0.5
- Hero adattata all’altezza viewport desktop.
- Sezione Soluzioni compattata per mostrare tutte e quattro le card su desktop.
- Scrollbar stabile e overflow orizzontale bloccato.
- Rimosso lo spostamento verticale delle card al passaggio del mouse.
