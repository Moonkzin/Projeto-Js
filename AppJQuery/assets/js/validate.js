var btnMostrar = document.getElementById("btnMostrar");
var btnSalvar = document.getElementById("btnSalvar");

btnMostrar.onclick = function () {
    $("#meuModal").modal({
        keyboard: false
    });
};

$("#nome").mask("99");

$("#meuForm").validate({
    rules: {
        nome: {
            required: true,
            number: true,
            range: [0, 30]
        }
    },
    submitHandler: function (form) {
        // Aqui, tudo est� v�lido!
        

    }
});


        //$("#meuModal").modal("hide");


