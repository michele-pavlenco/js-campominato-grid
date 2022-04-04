document.getElementById("button1").addEventListener("click", stampareGriglia1)



function stampareGriglia1() {
    let container = document.getElementById("conatiner")
    let box = document.createElement("div")
    box.setAttribute("class", "box")
    let createCols = creaColonne()
    box.innerHTML = createCols
    container.append(box)
}
function creaColonne() {
    let cols = ""
    let numeri = []
    for(let i = 1; i <= 100; i++){
        cols++
    }
}


