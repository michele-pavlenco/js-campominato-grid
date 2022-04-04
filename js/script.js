document.getElementById("button1").addEventListener("click", stampareGriglia1)

function stampareGriglia1() {
    let container = document.getElementById("container")
    let div = document.createElement("div")
    let createCols = creaColonne()
    div.innerHTML = createCols
    container.append(div)
}
function creaColonne() {
    let cols = ""
    let numeri = []
    for(let i = 1; i <= 100; i++){
        cols += `
          <div class="box">${i}</div>
          `;
        numeri.push(i)
        console.log(numeri)
    }
    return cols
}
document.getElementsByClassName("box").addEventListener("click", colorBlue)
function colorBlue(){
    
}

