import { buscarUsuario } from "../../repository/usuarioRepository.js";

export default async function buscarUsuarioService() {

    let usuarios = await buscarUsuario();

    if (usuarios == 0) {

        throw new error("Nenhum usuário encontrado.")

    }

    return usuarios;

}