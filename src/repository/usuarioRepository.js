import { query } from './connection.js';

export async function salvarUsuario(usuario) {

    let comando = `
    
        insert into users (nome, email, senha)
        values ($1, $2, $3)
        returning id;

    `

    let resposta = await query(comando, [usuario.nome, usuario.email, usuario.senha]);

    let idUsuario = resposta.rows[0].id;

    return idUsuario; 

};

export async function buscarUsuario() {

    const comando = `

        select id, nome, email from users;

    `
    let resposta = await query(comando);

    let usuarios = resposta.rows[0];

    return usuarios;

}