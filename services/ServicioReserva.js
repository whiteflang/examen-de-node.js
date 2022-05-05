import {modeloReserva} from '../models/reservaModelo.js'

export class ServicioReserva{

    constructor(){}

    async buscarTodos(){
        let habitaciones=await  modeloReserva.find()
        return habitaciones
    }

    async buscarPorId(id){
        let habitacion=await  modeloReserva.findById(id)
        return habitacion
    }

    async registrar(habitacion){
        let habitacionNueva= new modeloReserva(habitacion)
        return await  habitacionNueva.save()
    }

    async editar(id,habitacion){
        return await  modeloReserva.findByIdAndUpdate(id,habitacion)
    }

    async eliminar(id){
        return await  modeloReserva.findByIdAndDelete(id)
    }

}