import express from 'express'
import { deletePosition, getPosition, positionController, updatePosition } from '../controller/position.controller.js'

const positionRoute = express.Router()

positionRoute.post("/position",positionController)
positionRoute.get("/position/:id",getPosition)
positionRoute.put("/position/:id",updatePosition)
positionRoute.delete("/position/:id",deletePosition)


export {positionRoute}