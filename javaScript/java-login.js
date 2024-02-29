button.addEventListener("click",(event) => {
    event.preventDefault()  
    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;

    if(login == "admin" && senha == "admin"){
        alert("Sucesso");
        window.location.href = "pages/page-1.html";
    }else if(login == ""){
        alert("Preencha os campos corretamente");
    }else{
        alert("Senha ou usuarios incorretos")
    }

})
