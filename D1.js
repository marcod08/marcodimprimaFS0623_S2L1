/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

let risposta1 = "In javascript ci sono 3 tipologie di datatype."
let risposta2 = "La prima è quella di tipo numerica, dove sono cencessi solamente valori numerici come suggerisce il nome stesso, questi valori non hanno bisogno di essere inclusi all interno delle vigolette."
let risposta3 = "La seconda tipologia sono gli script, i valori concessi a questo tipo sono alfanumerici, quest ultimi hanno bisogno di essere inclusi all interno di virgolette per discriminarli dalla tipologia precedente."
let risposta4 = "La terza tipologia è boolean o booleano, in cui il dato può assure solamente 1 di 2 valori possibili come vero o falso. Anche questi valori come la prima categoria non richiedono l utilizzo di virgollete."

console.log(risposta1)
console.log(risposta2)
console.log(risposta3)
console.log(risposta4)

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = "Marco"
console.log(name)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let numero1 = 12
let numero2 = 20
console.log(numero1 + numero2)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12
console.log(x)

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/*
const name = "Marco"
const name = "D'Imprima"
console.log(name)
l'ho lasciata all'interno del commento perchè se no la console non mi mostra le successive riposte
*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let number3 = 4
console.log(number3 - x)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john"
let name2 = "John"
console.log(name1===name2)
/* oppure */
console.log(name1!==name2)

/* extra*/
console.log(name1.toLowerCase() == name2.toLowerCase())

/* extra 2 */
let celsius = 5
const frazione = 1.8
const addendo = 32

console.log((celsius *= frazione) + addendo)
