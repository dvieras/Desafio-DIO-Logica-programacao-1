let prompt = require('prompt-sync')();

let controle = true

    while(controle) {

        let nomeHeroi = prompt("Informe o nome do seu herói: ")
        let quantidadeXP = prompt("Informe a quantidade de XP do seu Herói: ")
        let nivelHeroi = " "

        if (quantidadeXP <= 1000) {
            nivelHeroi = "Ferro"
        } else if (quantidadeXP >= 1001 && quantidadeXP <= 2000) {
            nivelHeroi = "Bronze"
        } else if (quantidadeXP >= 2001 && quantidadeXP <= 5000) {
            nivelHeroi = "Prata"
        } else if (quantidadeXP >= 5001 && quantidadeXP <= 7000) {
            nivelHeroi = "Ouro"
        } else if (quantidadeXP >= 7001 && quantidadeXP <= 8000) {
            nivelHeroi = "Platina"
        } else if (quantidadeXP >= 8001 && quantidadeXP <= 9000) {
            nivelHeroi = "Ascendente"
        } else if (quantidadeXP >= 9001 && quantidadeXP <= 10000) {
            nivelHeroi = "Imortal"
        } else if (quantidadeXP >= 10001) {
            nivelHeroi = "Radiante"
        }

        console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi)

        console.log("Você deseja inserir um novo heroi ?  ")
        let continuarPrograma = prompt("Digite [S] para continuar e [N] para sair.")
        
        if(continuarPrograma === "S") {
            console.log("aguarde, resetando rank ...")
        }else {
            controle = false
            console.log("Programa encerrado !!")
        }
     }

