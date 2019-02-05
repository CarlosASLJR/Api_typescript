import {Application , Request , Response} from 'express';

class Routes{
    constructor(app:Application){
        this.getRoutes(app);
    }
    getRoutes(app:Application):void{
        app.route('/').get((req: Request,resp: Response) => resp.send('Hello World'));
        app.route('/ola/:nome').get((req:Request,resp:Response)=> resp.send(`Hello ,${req.params.nome}`));
    }
}
export default Routes;