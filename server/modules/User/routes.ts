import { Request , Response} from 'express';
import UserController from './controller';

let usercontroller;
class UserRoutes{

    constructor(){
        usercontroller = new UserController();
    }

    index(req: Request, res:Response){
        return usercontroller.getAll(req,res);
    }
    create(req:Request,res:Response){
        return usercontroller.createUser(req,res);
    }
    findOne(req:Request,res:Response){
        return usercontroller.getById(req,res);
    }
    update(req:Request,res:Response){
        return usercontroller.updateUser(req,res);
    }
    destroy(req:Request,res:Response){
        return usercontroller.deleteUser(req,res);
    }

}
export default UserRoutes;