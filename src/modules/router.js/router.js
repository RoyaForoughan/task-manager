const { TaskApiRoute } = require('./task')

const router = require('express').Router()

router.use('/' , TaskApiRoute)

module.exports = {
    AllRoutes : router
}