const setup = () => {
let btnTry = document.getElementById("btnTry");
btnTry.addEventListener("mouseover",mouseOver);
btnTry.addEventListener("click",onClick);
btnTry.addEventListener("mouseout",mouseOut);
document.getElementById("btnWithoutBullets").addEventListener("click",withoutBullets);
document.getElementById("btnWithBullets").addEventListener("click",withBullets);
    //eventListeners difference between "textContent" and "innerHTML"

    document.getElementById("btnContent").addEventListener("click", changeContent);
}
window.addEventListener("load", setup);




const withoutBullets = () =>{
    let listItems = document.getElementsByTagName("li");
    for(let i = 0;i<listItems.length;i++){
        listItems[i].classList.remove("colorWhite","listItemsStyleDisc");
        listItems[i].classList.add("colorRed","listItemsStyleNone");


    }

}
const withBullets = () =>{
    let listItems = document.getElementsByTagName("li");
    for(let i = 0;i<listItems.length;i++){
        listItems[i].classList.remove("colorRed","listItemsStyleNone");
        listItems[i].classList.add("colorWhite","listItemsStyleDisc");


    }

}

// difference between "textContent" and "innerHTML"
const changeContent = () => {
    document.getElementById("textContent").textContent ="<a href='https://www.vives.be'>VIVES</a>";
    document.getElementById("innerHTML").innerHTML ="<a href='https://www.vives.be'>VIVES</a>";
}


const mouseOver = () =>{
    document.getElementById("event").innerHTML+="Mouse Hovered<br/>";
    
}
const onClick = () =>{
    document.getElementById("event").innerHTML+="Clicked<br/>";

}
const mouseOut = () =>{
    document.getElementById("event").innerHTML+="Mouse Out<br/>";

}