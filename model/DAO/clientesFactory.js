import ClientesMDAO from './clientesMongoDB.js'
import { ClientesMemDAO } from "./clientesMem.js";

class ClientesFactoryDAO {
    static get(tipo){
        switch (tipo) {
            case 'MEM':
                console.log(`Persistiendo en memoria`);
                return new ClientesMemDAO()
            case 'MONGO':
                console.log(`Persistiendo en Mongo`);
                return new ClientesMDAO()
            default:
                console.log(`Corriendo default MEM, ${tipo}`);
                return new ClientesMemDAO()
        }
    }
}

export default ClientesFactoryDAO