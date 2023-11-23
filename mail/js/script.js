//chiedere mail utente e assegnare a variabile
let mail = prompt('Inserisci Mail');

//creare array contenente mail di controllo
const notValidMail = ['pippo@gmail.com', 'pluto@gmail.com', 'caio@gmail.com', 'tizio@gmail.com', 'sempronio@gmail'];

for(let i=0; i<notValidMail.length; i++){
    if(notValidMail[i] == mail){
        alert("Mail già usata! inserisci un'altra Mail");
    }
    else{
        console.log('Mail valida!');
    }
}
