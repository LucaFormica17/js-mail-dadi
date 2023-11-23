//generazione random per utente
let user = Math.floor((Math.random() * 6) + 1);
console.log(user);

//generazione random per cpu
let cpu = Math.floor((Math.random() * 6) + 1);
console.log(cpu);

//confronta risultati ottenuti e dichiara se hai vinto o hai perso
if(user > cpu){
    console.log('Hai vinto!');
}
else if(user < cpu){
    console.log('Hai perso!');
}
else{
    console.log('Pareggio!');
}