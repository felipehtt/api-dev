import { salvarUsuario } from "../../repository/usuarioRepository.js";
import { validarNovoUsuario } from "../../validation/usuario/usuarioValidation.js";

export default async function salvarUsuarioService(usuarioObj) {
    
    validarNovoUsuario(usuarioObj);
    
    let id = await salvarUsuario(usuarioObj);
    return id;

}; 