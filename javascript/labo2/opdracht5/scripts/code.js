const setup = () => {
    let btnWijzig=document.getElementById("btnWijzig");
    btnWijzig.addEventListener("click",wijzig);
}
window.addEventListener("load", setup);

const wijzig = () =>{
    let pElement=document.getElementById("txtOutput");
    pElement.innerHTML="Welcome";

}
