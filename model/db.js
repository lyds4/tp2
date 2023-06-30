import { MongoClient } from "mongodb";
import config from "../config.js";

export class CnxMDB {
    // sin contstructor porrque es todo static
    static connection = false
    static db
    static cliente
    
    static conectar = async () => {
        try {
            this.uri = config.URI;
            this.options = {
                useNewUrlParser: true,
                useUnifiedTopology: true
            };

            CnxMDB.cliente = new MongoClient(this.uri, this.options);


            console.log('Conectando a la base de datos...')
            await CnxMDB.cliente.connect()  // top level await (contexto global de un módulo)
            console.log('Base de datos conectada!')
            CnxMDB.db = CnxMDB.cliente.db(config.BASE)
            CnxMDB.connection = true
        }
        catch (error) {
            console.log(`Error en la conexión de base datos: ${error.message}`)
        }
    }

    static dc = async () => {
        if (!CnxMDB.connection) return
        await CnxMDB.cliente.close()
    }
}