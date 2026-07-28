import { Router } from "express";
import salvarUsuarioService from "../service/usuario/salvarUsuarioService.js";
import buscarUsuarioService from "../service/usuario/buscarUsuarioService.js";

const endpoints = Router();

endpoints.post('/usuario', async (req, resp) => {

    try {
        let usuarioObj = req.body;
        let id = await salvarUsuarioService(usuarioObj);

        resp.send({

            id: id 

        });
    }
    catch (err) {
        logErro(err)
        resp.status(400).send(criarErro(err));
    }

});

endpoints.get('/usuario/lista', async (req, resp) => {

    try {
        
        let usuarios = await buscarUsuarioService();

        resp.send({
            usuarios: usuarios
        });

    } catch (err) {
        resp.status(400).send(criarErro(err))
    }

})


export default endpoints;