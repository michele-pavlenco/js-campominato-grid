

document.getElementById("button1").addEventListener("click", stampareGriglia1)



function stampareGriglia1() {
    let container = document.getElementById("container")
    let div = document.createElement("div")
    div.setAttribute('class', 'div-100');
    let createCols = creaColonne()
    div.innerHTML = createCols
    container.append(div)

}
function creaColonne() {
    let cols = ""
    let numeri = []
    for (let i = 1; i <= 100; i++) {
        cols += `
          <div class="box">${i}</div>
          `;
        numeri.push(i)
        const numeriSingoli = numeri.slice('')
        console.log(numeriSingoli)

    }
    return cols
}




document.getElementById("button2").addEventListener("click", stampareGriglia2)

function stampareGriglia2() {
    let container = document.getElementById("container")
    let div = document.createElement("div")
    div.setAttribute('class', 'div-81');
    let createCols = creaColonne2()
    div.innerHTML = createCols
    container.append(div)
    document.getElementsByClassName(".box").addEventListener("click", colorBlue)
}
function creaColonne2() {
    let cols = ""
    let numeri = []
    for (let i = 1; i <= 81; i++) {
        cols += `
          <div class="box">${i}</div>
          `;
        numeri.push(i)
        const numeriSingoli = numeri.slice('')
        console.log(numeriSingoli)
    }
    return cols
}
function colorBlue() {
    div.setAttribute("class", "blue")
}
document.getElementById("button3").addEventListener("click", stampareGriglia3)

function stampareGriglia3() {
    let container = document.getElementById("container")
    let div = document.createElement("div")
    div.setAttribute('class', 'div-49');
    let createCols = creaColonne3()
    div.innerHTML = createCols
    container.append(div)
    document.getElementsByClassName(".box").addEventListener("click", colorBlue)
}
function creaColonne3() {
    let cols = ""
    let numeri = []
    for (let i = 1; i <= 49; i++) {
        cols += `
             <div class="box">${i}</div>
             `;
        numeri.push(i)
        const numeriSingoli = numeri.slice('')
        console.log(numeriSingoli)
    }
    return cols
}
function colorBlue() {
    div.setAttribute("class", "blue")
}

function colorBlue() {
    div.setAttribute("class", "blue")
}



function colorBlue(){
    div.setAttribute("class", "blue")
}

const numBlue = document.getElementsByClassName("box")
numBlue.addEventListener("click", colorBlue)