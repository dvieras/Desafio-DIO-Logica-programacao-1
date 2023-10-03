
let nomeHeroi = "Kratos da cg150"
const xpHeroi = Math.floor(Math.random() * 15000);
let levelHeroi

if (xpHeroi <= 1000) {
    console.log("Se XP for menor do que 1.000 = Ferro")
    levelHeroi = "Ferro"
} else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
    console.log("Se XP for entre 1.001 e 2.000 = Bronze")
    levelHeroi = "Bronze"
} else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
    console.log("Se XP for entre 2.001 e 5.000 = Prata")
    levelHeroi = "Prata"
} else if (xpHeroi >= 6001 && xpHeroi <= 7000) {
    console.log("Se XP for entre 6.001 e 7.000 = Ouro")
    levelHeroi = "Ouro"
} else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
    console.log("Se XP for entre 7.001 e 8.000 = Platina")
    levelHeroi = "Platina"
} else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
    console.log("Se XP for entre 8.001 e 9.000 = Ascendente")
    levelHeroi = "Ascendente"
} else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
    console.log("Se XP for entre 9.001 e 10.000= Imortal")
    levelHeroi = "Imortal"
} else {
    console.log("Se XP for maior ou igual a 10.001 = Radiante")
    levelHeroi = "Radiante"
}

console.log("O Herói de nome " + nomeHeroi + " está no nível " + levelHeroi)