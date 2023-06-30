import express from 'express'
import ControladorClientes from '../controller/clientes.js'

const router = express.Router()

export class RouterClientes {
    constructor() {
        this.controladorClientes = new ControladorClientes()
    }

    start() {/*GET cliente*/
        router.get('/clientes/:id?', this.controladorClientes.getClientes)

        /*POST cliente*/
        router.post('/', this.controladorClientes.postClientes)

        /*PUT cliente*/
        router.put('/clientes/:id', this.controladorClientes.putClientes)

        /*DELETE cliente*/
        router.delete('/clientes/:id', this.controladorClientes.deleteClientes)

        return router
    }
}