import UserRepository from '../repositories/user';

export default class RemoveUseCase {
  public execute = async userId => {
    return new UserRepository().delete(userId);
  };
}
