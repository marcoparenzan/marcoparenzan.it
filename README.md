# Sito personale di Marco Parenzan

Sito statico multipagina in HTML, Tailwind CSS via CDN e JavaScript ES modules.

## Pagine
- `index.html`: profilo, attività, community e progetti.
- `eventi.html`: prossimo 1nn0vAI e calendario 1nn0va 2027.
- `corsi.html`: raccolta personale di corsi e playlist YouTube.

## Gestione corsi
I corsi inseriti dall'interfaccia sono conservati nel `localStorage` del browser. Non vengono inviati a un server e rimangono disponibili sul dispositivo e browser usati.

## Avvio
Servire la cartella `src/` tramite un server HTTP statico, necessario per gli import JavaScript ES modules.