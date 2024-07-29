import express from 'express'
import cors from 'cors'
import routes from './routes'



const app = express()
const port = 3000
const origionCors = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200

}
app.use(cors(origionCors))
app.use(express.json())
app.use(routes)
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})


