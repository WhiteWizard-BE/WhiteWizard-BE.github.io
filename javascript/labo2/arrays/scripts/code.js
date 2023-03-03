const setup = () => {
    let btnVoegToe=document.getElementById("btnVoegToe");
    btnVoegToe.addEventListener("click",voegToe);

}
window.addEventListener("load", setup);

let familienamen = ["bob","bob2","bob3","bob4","bob5"];
console.log(familienamen.length);
console.log(familienamen[0]);
console.log(familienamen[2]);
console.log(familienamen[4]);
console.log(familienamen.toString());

const voegToe = () =>{
    var naam = prompt("Voeg een naam toe");
    familienamen.push(naam);
    console.log(naam);

}