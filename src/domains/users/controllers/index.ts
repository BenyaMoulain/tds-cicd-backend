import UserServices from '../services';
import { Request, Response } from 'express';

export default class UserController {
  public save = async (request: Request, response: Response) => {
    const result = await new UserServices().save(request.body);
    response.status(201);
    response.json(result);
  };

  public list = async (request: Request, response: Response) => {
    const result = await new UserServices().list();
    response.status(200);
    response.json(result);
  };

  public remove = async (request: Request, response: Response) => {
    const parameters = request.params ? request.params : request.query;
    const result = await new UserServices().remove(parameters.id);
    response.status(200);
    response.json(result);
  };

  public update = async (request: Request, response: Response) => {
    const parameters = request.params ? request.params : request.query;
    const result = await new UserServices().update(parameters.id, request.body);
    response.status(204);
    response.json(result);
  };
}
