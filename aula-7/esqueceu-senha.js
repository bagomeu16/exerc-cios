window.onload = function (e) {

    var btnRecuperarSenha = document.getElementById("btnRecuperarSenha");

    var txtEmail = document.getElementById("txtEmail");

    txtEmail.focus();
    btnRecuperarSenha.onclick = function (e) {

        e.preventDefault();

        var email = txtEmail.value;

        if (email == "") {
            exibirMensagemErro("Campo E-mail obrigatório.");
        }
        else {
            enviarEmailRecuperacao(email);
        }
    };

    function exibirMensagemErro(mensagem) {

        var spnErro = document.getElementById("spnErro");

        spnErro.innerText = mensagem;
        spnErro.style.display = "block";

        setTimeout(function () {
            spnErro.style.display = "none";
        }, 5000);
    };

    function enviarEmailRecuperacao(email) {

        alert("O e-mail de recuperação foi enviado para " + email);
    };
}