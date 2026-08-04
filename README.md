# Sito personale di Marco Parenzan

Sito statico multipagina in HTML, Tailwind CSS via CDN e JavaScript ES modules.

## Pagine
- `index.html`: blog e accesso agli ultimi post pubblicati su LinkedIn.
- `profilo.html`: identità professionale, progetti e profilo speaker Sessionize.
- `eventi.html`: prossimo 1nn0vAI e calendario 1nn0va 2027.
- `corsi.html`: raccolta personale di corsi e playlist YouTube.

## Post del blog
I post vengono pubblicati su LinkedIn. `src/js/BlogFeed.js` contiene l'elenco `posts`, predisposto per aggiungere in seguito titolo, data, argomento, estratto e URL dei singoli post.

## Gestione corsi
I corsi inseriti dall'interfaccia sono conservati nel `localStorage` del browser. Non vengono inviati a un server e rimangono disponibili sul dispositivo e browser usati.

## Avvio
Servire la cartella `src/` tramite un server HTTP statico, necessario per gli import JavaScript ES modules.