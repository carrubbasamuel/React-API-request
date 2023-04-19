# App che fa richieste API con Axios in React
Questo progetto è un'applicazione React che utilizza Axios per fare richieste API e visualizzare i dati ricevuti. L'app utilizza la API pubblica di GitHub per recuperare le informazioni sugli utenti.

Come funziona l'app
L'app consiste in una singola pagina che permette all'utente di inserire un nome utente di GitHub. Quando l'utente preme il pulsante "Cerca", l'app fa una richiesta alla API di GitHub per recuperare le informazioni sull'utente corrispondente. Se la richiesta ha successo, l'app visualizza le informazioni sull'utente, inclusi il nome, la descrizione, il numero di repository pubblici e il numero di seguaci.

Per fare le richieste API, l'app utilizza Axios, una libreria JavaScript che semplifica l'interazione con le API HTTP. Axios fornisce una sintassi semplice per effettuare richieste GET e POST e gestisce automaticamente la serializzazione dei dati di richiesta e la deserializzazione dei dati di risposta.

Come usare l'app
Per utilizzare l'app, è sufficiente clonare il repository e installare le dipendenze:

bash
Copy code
git clone https://github.com/tuonome/app-axios-react.git
cd app-axios-react
npm install
Una volta installate le dipendenze, è possibile avviare l'app con il comando:

sql
Copy code
npm start
L'app sarà disponibile all'indirizzo http://localhost:3000.

Cosa c'è nel codice
Il codice dell'app è scritto in React e utilizza la libreria Axios per effettuare le richieste API. La logica principale dell'app è contenuta nel componente UserSearch, che permette all'utente di inserire un nome utente e di effettuare la ricerca. Quando l'utente preme il pulsante "Cerca", il componente fa una richiesta alla API di GitHub utilizzando Axios e visualizza i dati ricevuti.

Il codice utilizza anche il componente Loading, che visualizza un indicatore di caricamento mentre la richiesta è in corso, e il componente Error, che visualizza un messaggio di errore se la richiesta non ha successo.
