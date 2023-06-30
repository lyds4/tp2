import dotenv from 'dotenv'

dotenv.config()

//const PORT = process.env.PORT
const PORT = 8080
const URI = process.env.URI
const MODO_PERSISTENCIA = process.env.MODO_PERSISTENCIA
const BASE = process.env.BASE

export default {
    PORT,
    URI,
    MODO_PERSISTENCIA,
    BASE
}