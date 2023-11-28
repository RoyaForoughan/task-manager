const { TaskController } = require('../task/task.controller')

const router = require('express').Router()

router.get('/list' , TaskController.getTask)
router.post('/add' , TaskController.addTask)
router.delete('/remove/:id' , TaskController.removeTask)
router.patch('/update/:id' , TaskController.updateTask)
module.exports = {
    TaskApiRoute : router
}