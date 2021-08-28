$(function () {

    //no permitir espacios//
    $('#usuario').on("keydown", function (e) {
        return e.which !== 32;
    });
    $('#contrasena').on("keydown", function (e) {
        return e.which !== 32;
    });

    //boton login//
    $("#btnlogin").click(function (e) {

        pruebaemail($("#usuario").val());

        if (password_check() == 1) {
            alert("CONTRASEÑA INVALIDA DEBE SER MINIMO 8 CARACTERES MAYUSCULA MINUSCULA Y NUMERO");
            $("#formlogin")[0].reset();
        } else {
            let datos = { "usuario": $("#usuario").val(), "contraseña": $("#contrasena").val() };
            alert("hola: " + datos.usuario + " " + "   tu contraseña es: " + datos.contraseña);
            $("#formlogin")[0].reset();
        }
        e.preventDefault();

    });

    //AL PASAR EL MOUSE SOBRE EL CAMPO USUARIO//
    $('#usuario').hover(function () {
        $("#usuario").attr("placeholder", "ESCRIBE TU CORREO AQUI");
    }, function () {
        $("#usuario").attr("placeholder", "USUARIO");
    });

    //verificar seguridad de contraseña//
    function password_check() {
        pass = $("#contrasena").val();
        //imprimo la contraseña por consola para comparar los requerimientos de contraseña//
        console.log(pass);
        regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        if (regex.exec(pass) == null) {
            return 1;
        } else {
            return 2;
        }
    }

    //verificar estructura del correo electronico//
    function pruebaemail (valor){
        re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
        if(!re.exec(valor)){
            alert('DIRECCION DE CORREO NO VALIDA');
        }
        else alert('DIRECCION DE CORREO VALIDA');
        }

});
