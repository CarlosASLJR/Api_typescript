import {Request,Response,ErrorRequestHandler,NextFunction} from 'express';
export function errorHandlerApi(err :ErrorRequestHandler,req: Request,resp :Response,next: NextFunction){
    console.error(`Api Error Handler foi executada : ${err}`);
    resp.status(500).json({
        errorCode: 'ERR-001',
        messagem: 'Erro interno do servidor.'
    }); 

}