const first = $(".info-holder").load("infoContainer.html");

setTimeout(() => {
    // const y = first;
    // const x = y.getElementById("info-text");
    // x.innerHTML = "this is working";
}, 1000);

function removeElements(){
    const myNode = document.getElementById("info-holder");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
    }
}