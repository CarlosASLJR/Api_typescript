import { Request, Response } from 'express';
import * as _ from 'lodash';
import {onSuccess} from '../../api/responses/successHandler';
import {onError} from '../../api/responses/errorHandler';
import {dbErrorHandler} from '../../config/dbErrorHandler'
import User from './service';
let user;
class UserController {

  constructor(){
    user = new User();
  }

  getAll(req: Request, res: Response){
    user
        .getAll()
        .then(_.partial(onSuccess, res))
        .catch(_.partial(onError, res, `Erro ao buscar todos os usuarios`))
  }

  createUser(req: Request, res: Response){
    user
        .create(req.body)
        .then(_.partial(onSuccess, res))
        .catch(_.partial(dbErrorHandler, res))
        .catch(_.partial(onError, res, `Erro ao inserir novo usuario`));
  }

  getById(req: Request, res: Response){
    const userId = parseInt(req.params.id);
    user.getById(userId)
      .then(_.partial(onSuccess, res))
      .catch(_.partial(onError, res, `Usuario nao encontrado`))
  }

  updateUser(req: Request, res: Response){
    const userId = parseInt(req.params.id);
    const props = req.body;
    user.update(userId, props)
      .then(_.partial(onSuccess, res))
      .catch(_.partial(onError, res, `Falha ao atualizar usuario`))
  }

  deleteUser(req: Request, res: Response){
    const userId = parseInt(req.params.id);
    user.delete(userId)
      .then(_.partial(onSuccess, res))
      .catch(_.partial(onError, res, `Erro ao excluir usuario`))
  }
}

export default  UserController;
