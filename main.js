const express = require('express')
const {default : mongoose} = require('mongoose')
const dotenv = require('dotenv')
const { AllRoutes } = require('./src/modules/router.js/router')


 dotenv.config()


// module.exports = class Application {
//     #app = express()
//     #PORT
//     #DB_URL
//     constructor(PORT , DB_URL){
//         this.#PORT = PORT
//         this.#DB_URL = DB_URL
//         this.connetToMongoDB()
//         this.createServer()
//         this.createRoute()
//     }

//     configApplication(){
       
//     }
//     createServer(){
//         const http = require('http')
//         http.createServer(this.#app).listen(this.#PORT , ()=>{
//             console.log('run > http://loaclhost:' + this.#PORT);
//         })
//     }
//     connetToMongoDB(){
//             mongoose.connect(this.#DB_URL)
//             .then(() => console.log('Connect to DB'))
//             .catch((error) => console.log(error.message))
//     }
//     createRoute(){
//         this.#app.use(AllRoutes)
//     }
//     errorHandler(){

//     }
// }

async function main(){
    const app = express()
    app.use(express.json()) // for parsing application/json
    app.use(express.urlencoded({ extended: true }))
    const port = process.env.PORT
    require('./src/config/mongoose.config')
    app.listen(4000 , () => {
        console.log(`server: http://localhost:${port}`);
    })
    app.use(AllRoutes)
}

main()

// createRoutes(){
//     this.#app.use(AllRoutes)
// }