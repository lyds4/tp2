// DAO
import { ObjectId } from 'mongodb'
import { CnxMDB } from '../db.js'

class ClientesMDAO {

    findCliente = async id => {
        if (!CnxMDB.connection) return {}
        let cliente = await CnxMDB.db.collection('clientes').findOne({ _id: ObjectId(id) })
        return cliente
    }

    findClientes = async () => {
        if (!CnxMDB.connection) return []
        try {
            let clientes = await CnxMDB.db.collection('clientes').find({}).toArray()
            return clientes
        } catch {
            return []
        }
    }

    saveClientes = async cliente => {
        if (!CnxMDB.connection) return {}

        cliente.edad = parseInt(cliente.edad)
        await CnxMDB.db.collection('clientes').insertOne(cliente)
        return cliente
    }

    updateClientes = async (cliente, id) => {
        if (!CnxMDB.connection) return {}

        await CnxMDB.db.collection('clientes').updateOne(
            { _id: ObjectId(id) },
            { $set: cliente }
        )
        return cliente
    }

    deleteClientes = async id => {
        if (!CnxMDB.connection) return {}

        let clienteBorrado = await this.findCliente(id)
        await CnxMDB.db.collection('clientes').deleteOne({ _id: ObjectId(id) })
        return clienteBorrado
    }
}

export default ClientesMDAO