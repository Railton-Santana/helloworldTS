import * as express from 'express'
import routes from './routes'
class App {
    public express:express.Application

    public constructor () {
      this.express = express()
      this.routes()
    }

    private routes ():void{
      this.express.use(routes)
    }
}

export default new App().express
