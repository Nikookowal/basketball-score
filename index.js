let pontos = document.getElementById("placar")
let pontosGuest = document.getElementById("placar-guest")
let count = 00; 
let countG = 00


function plusOne(){
    count += 0 + 1
    pontos.textContent = count 
}

function plusTwo(){
    count += 02
    pontos.textContent = count
}

function plusThree(){
    count += 03
    pontos.textContent = count
}

function plusOneG(){
    countG += 01
    pontosGuest.textContent = countG
}

function plusTwoG(){
    countG += 02
    pontosGuest.textContent = countG
}

function plusThreeG(){
    countG += 03
    pontosGuest.textContent = countG 
}