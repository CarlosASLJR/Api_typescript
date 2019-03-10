import { Request, Response, ErrorRequestHandler, NextFunction } from 'express';
import * as HTTPStatus from 'http-status';
const config = require('../../config/env/config')();


class Handlers {

  constructor(){}

  onSuccess(res: Response, data: any){
      return res.status(HTTPStatus.OK).json({ payload: data });
  }

  onError(res: Response, message: string, err: any) {
    console.log(`Error: ${err}`);
    return res.status(HTTPStatus.INTERNAL_SERVER_ERROR).send(message);
  }


  dbErrorHandler(res: Response, err: any){
    console.log(`Um erro aconteceu: ${err}`);
    return res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({
      code: 'ERR-01',
      message: 'Erro ao criar usuário'
    });
  }

  errorHandlerApi(err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction){
    console.error(`API error handler foi executada: ${err}`);
    return res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({
      errorCode: 'ERR-001',
      message: 'Erro Interno do Servidor'
    });
  }
}

export default new Handlers();
