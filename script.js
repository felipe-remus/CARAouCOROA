const divMoeda = document.querySelector("#moeda");
const btCara = document.querySelector("#btCara")
const btCoroa = document.querySelector("#btCoroa")
const txpontos = document.querySelector("#txpontos")
const txaposta = document.querySelector("#txaposta")

//função que retorna 0="Cara" ou 1="Coroa"
function tirarCaraOuCoroa() {
    moeda = [
        "Cara",
        "Coroa"
    ]
    ladoSorteado = Math.floor(Math.random() * 2)
    return moeda[ladoSorteado]
}

divMoeda.addEventListener("click", () => {
    resultado = tirarCaraOuCoroa()
    divMoeda.innerText = resultado
})

txaposta.addEventListener("change", ()=>{
    if((Number(txaposta.value) >= Number(txpontos.value.slice(2)))){
        txaposta.value = txpontos.value.slice(2)
    }
    if((Number(txaposta.value) <= 0)){
        txaposta.value = 0
    }
})

btCara.addEventListener("click", ()=>{
    if(txaposta.value > 0){
        valorAposta = Number(txaposta) 

        resultado = tirarCaraOuCoroa()
        divMoeda.innerText = resultado
        // pontuação
        if(resultado === "Cara"){
            txpontos.value = "💰" + (Number(txpontos.value.slice(2)) + valorAposta) 
        }else{
            txpontos.value = "💰" + (Number(txpontos.value.slice(2)) - valorAposta) 
        }
    }    
})
    
btCoroa.addEventListener("click", ()=>{
    if(txaposta.value > 0){
        valorAposta = Number(txaposta) 

        resultado = tirarCaraOuCoroa()
        divMoeda.innerText = resultado
        // pontuação
        if(resultado === "Coroa"){
            txpontos.value = "💰" + (Number(txpontos.value.slice(2)) + valorAposta)  
        }else{
            txpontos.value = "💰" + (Number(txpontos.value.slice(2)) - valorAposta) 
        }
    }   
})