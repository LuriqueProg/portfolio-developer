
//Menu Hamburguer
var hamburguer = document.querySelector(".hamburguer");

    hamburguer.addEventListener("click", function(){
        document.querySelector(".container").classList.toggle("show-menu");
    });


//Orçamento

document.querySelector("#qtde").addEventListener("change", atualizarPreco)
document.querySelector("#layout-sim").addEventListener("change", atualizarPreco)
document.querySelector("#layout-nao").addEventListener("change", atualizarPreco)
document.querySelector("#prazo").addEventListener("change", function () {
    const prazo = document.querySelector("#prazo").value
    document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas`
    atualizarPreco()
})
function atualizarPreco(){
    const qtde = document.querySelector("#qtde").value    
    const incluiLayout = document.querySelector("#layout-sim").checked
    const prazo = document.querySelector("#prazo").value  
    let preço = qtde * 100;   
    if (incluiLayout) preço += 500
    let taxaUrgencia = 1 - prazo*0.1;
    preço *= 1 + taxaUrgencia   
    document.querySelector("#preco").innerHTML = `R$ ${preço.toFixed(2)}`
}