import { Router } from 'express'
import ControllerQuery from './controller/index'
import { middleware } from './middleware/middleware'
const routes = Router()
routes.get('/users', middleware ,new ControllerQuery().home)
routes.post('/users', middleware, new ControllerQuery().createUser)
routes.delete('/users/:id', middleware, new ControllerQuery().deleteUser)
export default routes