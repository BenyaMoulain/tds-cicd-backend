import UserRepository from '../repositories/user';

export default class UpdateUseCase {
  public execute = async (userId, userSchema) => {
    return new UserRepository().update(userId, userSchema);
  };
}
