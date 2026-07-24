import { Router } from "express";
import { salvarUsuario } from "../repository/usuarioRepository.js";

const endpoints = Router();

endpoints.post('/usuario', async (req, resp) => {

    let usuarioObj = req.body;

    let id = await salvarUsuario(usuarioObj);

    resp.send({

        id: id

    })

});




export default endpoints;