
export class ClientesMemDAO {
    constructor () {
        this.clientes = [
            { id: '1', nombre: 'Pedra', edad: 45},
            { id: '2', nombre: 'Mariana', edad: 25}
        ]
    }
    findCliente = async id => {
        //await delay(2000) // Prueba
        return this.clientes.find(cliente => cliente.id == id)
    }

    findClientes = () => {
        return this.clientes
    }

    saveClientes = async cliente => {
        const id = parseInt(cliente[this.clientes.length - 1].id)
        cliente.id = String(id)
        this.clientes.push(cliente)
        return cliente
    }

    updateClientes = async (cliente, id) => {
        cliente.id = id
        const index = this.clientes.findIndex(cliente => cliente.id == id)
        this.clientes.splice(index, 1, cliente)
        return cliente
    }
    deleteClientes = async id => {
        const index = this.clientes.findIndex(cliente => cliente.id == id)
        const cliente = this.clientes.splice(index, 1)[0]
        return cliente
    }
}