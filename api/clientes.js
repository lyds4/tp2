//import model from '../model/clientesMem.js'
//import ClientesMDAO from '../model/DAO/clientesMongoDB.js'
//import { ClientesMemDAO } from "../model/DAO/clientesMem.js";
import config from '../config.js';
import ClientesFactoryDAO from '../model/DAO/clientesFactory.js';

class ApiClientes {
    constructor() {
        //this.clientesModel = new ClientesMemDAO()
        //this.clientesModel = new ClientesMDAO()
        this.clientesModel = ClientesFactoryDAO.get(config.MODO_PERSISTENCIA)
    }

    obtenerClientes = async id => {     // acá no sé como se manejan los datos, es resp del modelo
        return id ? await this.clientesModel.findCliente(id) : this.clientesModel.findClientes()
    }

    guardarClientes = async cliente => {
        return await this.clientesModel.saveClientes(cliente)
    }

    actualizarClientes = async (cliente, id) => {
        return await this.clientesModel.updateClientes(cliente, id)
    }

    eliminarClientes = async id => {
        return await this.clientesModel.deleteClientes(id)
    }
}

export default ApiClientes