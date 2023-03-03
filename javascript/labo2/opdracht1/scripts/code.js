const setup = () => {
    let btnAlert=document.getElementById("btnAlert");
    let btnConfirm=document.getElementById("btnConfirm");
    let btnPrompt=document.getElementById("btnPrompt");
    btnAlert.addEventListener("click",alert);
    btnConfirm.addEventListener("click",confirm);
    btnPrompt.addEventListener("click",prompt);
}
window.addEventListener("load", setup);

const alert = () =>{
    window.alert("youw mama");
}
const confirm = () =>{
    console.log(window.confirm("youw mama"));
    //returnt true of false
}
const prompt = () =>{
    console.log(window.prompt("youw mama"));
    //cancel = null, "ok" = "ok"
}
