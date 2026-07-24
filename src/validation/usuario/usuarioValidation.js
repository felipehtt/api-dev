


export function validarNovoUsuario(usuarioObj) {

    if (!usuarioObj.nome) throw new Error ('O Nome é obrigatório.')

    if (!usuarioObj.email) throw new Error ('O E-mail é obrigatório.')

    if (!usuarioObj.senha) throw new Error ('A Senha é obrigatória.')

}