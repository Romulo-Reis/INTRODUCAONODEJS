function validar(login, senha){
    if(login == "Romulo" && senha == "123")
        return true;
    return false;
}

exports.validarUsuario = validar;