import { Response ,Request} from 'express';
import * as HTTPStatus from 'http-status';


class UserController{
    constructor(){}

    getAll(req: Request,res:Response){
        res.status(200).json({
            message: 'OK'
        });
    }
    createUser(req: Request,res:Response){
        res.status(HTTPStatus.OK).json({
            message: 'OK'
        });
    }
    getById(req: Request,res:Response){
        res.status(HTTPStatus.OK).json({
            message: 'OK'
        });
    }
    updateUser(req: Request,res:Response){
        res.status(HTTPStatus.OK).json({
            message: 'OK'
        });
    }
    deleteUser(req: Request,res:Response){
        res.status(HTTPStatus.OK).json({
            message: 'OK'
        });
    }
}
export default UserController;
