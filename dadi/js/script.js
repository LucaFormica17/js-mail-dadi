//generazione random per utente
let user = Math.floor((Math.random() * 6) + 1);
console.log(user);
let view_user = document.getElementById('user');
let h3_user = `<h3>${user}</h3>`;
view_user.innerHTML += h3_user;

//generazione random per cpu
let cpu = Math.floor((Math.random() * 6) + 1);
console.log(cpu);
let view_cpu = document.getElementById('cpu');
h3_cpu = `<h3>${cpu}</h3>`;
view_cpu.innerHTML += h3_cpu;

let view_text = document.getElementById('text');
//confronta risultati ottenuti e dichiara se hai vinto o hai perso
if(user > cpu){
    view_text.innerText = ('Hai vinto!');
}
else if(user < cpu){
    view_text.innerText = ('Hai perso!');
}
else{
    view_text.innerText = ('Pareggio!');
}