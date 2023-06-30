import ApiClientes from '../api/clientes.js'

class ControladorClientes {

    constructor() {
        this.apiClientes = new ApiClientes()
    }

    // GET
    getClientes = async (req, res) => {
        const { id } = req.params
        res.json(await this.apiClientes.obtenerClientes(id))
    }

    // POST
    postClientes = async (req, res) => {
        const cliente = req.body
        res.json(await this.apiClientes.guardarClientes(cliente))
    }

    // PUT
    putClientes = async (req, res) => {
        const { id } = req.params
        const cliente = req.body
        res.json(await this.apiClientes.actualizarClientes(cliente, id))
    }

    // DELETE
    deleteClientes = async (req, res) => {
        const { id } = req.params
        res.json(await this.apiClientes.eliminarClientes(id))
    }
}

export default ControladorClientes