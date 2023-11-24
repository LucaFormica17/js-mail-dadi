//chiedere mail utente e assegnare a variabile
let mail = prompt('Inserisci Mail');

//creare array contenente mail di controllo
const notValidMail = ['pippo@gmail.com', 'pluto@gmail.com', 'caio@gmail.com', 'tizio@gmail.com', 'sempronio@gmail'];

let view_title = document.getElementById('title');

let flag = false;//varaiabile che usiammo per verificare la validità della mail
for(let i=0; i<notValidMail.length; i++){
    if(notValidMail[i] == mail){
        flag = true;
    }
}

if(flag == true){
    alert('Mail già usata! Inserisci nuova Mail');
    console.log('Mail già usata! inserisci nuova mail');
}
else{
    view_title.innerText = ('Benvenuto!');
    console.log('Mail valida');
}
