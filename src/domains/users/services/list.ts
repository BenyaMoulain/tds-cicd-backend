import UserRepository from '../repositories/user';

export default class ListUseCase {
  public execute = async () => new UserRepository().list();
}
