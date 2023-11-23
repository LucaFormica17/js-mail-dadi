Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Attenzione: l'utilizzo della funzione includes non è ammesso. Se usato, comporta la non validità dell'esercizio.


Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.


Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
Buon lavoro e buon divertimento! :faccia_leggermente_sorridente:

PROBLEMA: MAIL
1 - chiedere all'utente la sua email
    1.1 - creare prompt nel quale l'utente inserirà la mail
    1.2 - dichiarare variabile al quale verrà assegnato valore la mail dell'utente
2 - controllare se la mail inserita sia valida e mostrare messaggio
    2.1 - creare array contenente varie mail 'non valide'
    2.2 - confrontare la mail inserita dall'utente con gli elementi dell'array
        2.2.1 - se la mail non è contenuta nell'array allora stampare messagio 'mail valida'
        2.2.2 - altrimenti stampare messaggio 'mail già usata! inserisci un'altra mail!
    

PROBLEMA : GIOCO DEI DADI
1 - generare numero casuale compreso tra 1 e 6 per l'utente
    1.1 - generare numero casuale compreso tra 1 e 6 tramite metodo 'random' della funzione 'math' e arrotondato per difetto a intero più vicino tramite metodo 'floor' della funzione math
    1.2 - dichiarare variabile al quale verrà assegnato il valore generato prima
2 - generare numero casuale compreso tra 1 e 6 per la cpu
    2.1 - generare numero casuale compreso tra 1 e 6 tramite metodo 'random' della funzione 'math' e arrotondato per difetto a intero più vicino tramite metodo 'floor' della funzione math
    2.2 - dichiarare variabile al quale verrà assegnato il valore generato prima
3 - mettere a paragone le due variabili e mostrare messaggio del risultato
    3.1 - se variabile utente è maggiore di variabile cpu stampare 'hai vinto'
    3.2 - altrimenti stampare 'hai perso'