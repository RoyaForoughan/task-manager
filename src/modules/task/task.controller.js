const { TaskModel } = require("../../model/task")
const createHttpError = require('http-errors')
const {StatusCodes : HttpStatus} = require('http-status-codes')
class TaskController {
    async getTask(req,res,next){
        try {
            const task = await TaskModel.find({})
            if(!task) throw createHttpError.InternalServerError('There is not any task!')
            return res.status(HttpStatus.OK).json({
                statusCode : HttpStatus.OK,
                data:{
                    task
                }
            })
        } catch (error) {
            next(error)
        }
    }

    async addTask(req,res,next){
     try {
        let {title} = req.body
        const addTask = await TaskModel.create({title})
        if(!addTask) throw createHttpError.InternalServerError('There is not any task to add!')
        return res.status(HttpStatus.OK).json({
            statusCode:HttpStatus.OK,
            data:{
                message : 'Task added successfully!'
            }
    })
     } catch (error) {
        next(error)  
     }
    }

    async updateTask(req,res,next){
        try {
            const {id} = req.params
            const {title} = req.body
            const task = await TaskModel.findById(id)
            if(!task) throw createHttpError.InternalServerError('There is not this task!')
            const updateResult = await TaskModel.updateOne({_id : id} , {$set : {title}})
            if(!updateResult.modifiedCount) throw createHttpError.InternalServerError('Task did not update!')
            return res.status(HttpStatus.CREATED).json({
                statusCode : HttpStatus.CREATED,
                data:{
                    message : 'Task updated successfully!'
                }
            })
        } catch (error) {
            next(error)
        }
    }

    async removeTask(req,res,next){
        try {
            const {id : taskID} = req.params
            const task = await TaskModel.findById(taskID)
            if(!task) throw createHttpError.InternalServerError('There is not this task!')
            const removeResult = await TaskModel.deleteOne({_id : taskID})
            if(removeResult.deletedCount == 0) throw createHttpError.InternalServerError('Task does not deleted!')
            return res.status(HttpStatus.OK).json({
                statusCode : HttpStatus.OK,
                data:{
                    message : 'Task deleted successfully!'
                }
            })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = {
    TaskController : new TaskController()
}