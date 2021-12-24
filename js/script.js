var carrinho = document.querySelector(".carrinho");
var menuOpen = document.querySelector(".menu-open");
var fecharCarrinho = document.querySelector("#fechar-carrinho")

carrinho.addEventListener("click", function (){
    menuOpen.style.display = "block";
})

fecharCarrinho.addEventListener("click", function(){
    menuOpen.style.display = "none";
})