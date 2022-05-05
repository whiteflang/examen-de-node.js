import express from 'express'

//Importo el CONTROLADORHABITACION
import {ControladorHabitacion} from '../controllers/ControladorHabitacion.js'
import { ControladorReserva } from '../controllers/ControladorReserva.js'

export let rutas=express.Router()
//CREO UN OBJETO DE LA CLASE CONTORLADORHABITACION
let controaldorHabitacion=new ControladorHabitacion()
let controaldorReserva=new ControladorReserva()

//DEFINO LAS RUTAS

//RUTAS PARA LOS SERVICIOS DE HABITACIONES
rutas.post('/api/v1/habitaciones/',controaldorHabitacion.insertar)
rutas.get('/api/v1/habitaciones/', controaldorHabitacion.buscarTodos)
rutas.get('/api/v1/habitaciones/:id/', controaldorHabitacion.buscarPorId)
rutas.put('/api/v1/habitaciones/:id/', controaldorHabitacion.editar)
rutas.delete('/api/v1/habitaciones/:id/', controaldorHabitacion.eliminar)

rutas.post('/api/v1/reservas/',controaldorReserva.insertar)
rutas.get('/api/v1/reservas/', controaldorReserva.buscarTodos)
rutas.get('/api/v1/reservas/:id/', controaldorReserva.buscarPorId)
rutas.put('/api/v1/reservas/:id/', controaldorReserva.editar)
rutas.delete('/api/v1/reservas/:id/', controaldorReserva.eliminar)


