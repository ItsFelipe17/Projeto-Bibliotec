
const menu = document.getElementById("menu"); //pegando o elemento pelo ID
//querySelector pega de forma generica #ID  .class
const navMenu = document.querySelector(".navegacao")

menu.addEventListener("click", function(){

    if(navMenu.className == "navegacao") {
        navMenu.className = "navegacao ativo";
    }
    else{
        navMenu.className = "navegacao";
    }
})
