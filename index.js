import express from 'express'
import { RouterClientes } from './router/clientes.js'
import { CnxMDB } from "./model/db.js";
import config from './config.js';



const app = express()
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/ping', (req, res) => {
    res.send('pong')
})

/*-----*/
/*Rutas*/
/*-----*/

app.use('/api/clientes', new RouterClientes().start())

/*---------------*/
/*Servidor Listen*/
/*---------------*/

if (config.MODO_PERSISTENCIA == 'MONGO') {
    await CnxMDB.conectar()
}

//const PORT = config.PORT
const PORT = process.env.PORT || config.PORT
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`)
})
server.on('error', error => console.log(`Error on server:${error.message}`))