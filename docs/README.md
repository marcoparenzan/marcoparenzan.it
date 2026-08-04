# Sito personale di Marco Parenzan

## Struttura
- Le pagine principali sono nella root di `src/`.
- Tutte le pagine dedicate ai corsi sono in `src/Courses/`.
- I componenti JavaScript condivisi sono in `src/js/`.

## Percorsi formativi
- `Courses/quantum-physics.html`: MIT 8.04 Spring 2013.
- `Courses/quantum-physics-2016.html`: MIT 8.04 Spring 2016.
- `Courses/power-electronics.html`: MIT 6.622 Spring 2023.
- `Courses/nuclear-engineering.html`: MIT 22.01 Fall 2016.
- `Courses/stanford-cme295.html`: Stanford CME 295 Fall 2025.

`corsi.html` rimane il catalogo generale. Ogni percorso ha summary, player, fonti e avanzamento indipendente in `localStorage`.

## Esecuzione
Pubblicare `src/` tramite server HTTP statico per consentire il caricamento dei moduli ES.