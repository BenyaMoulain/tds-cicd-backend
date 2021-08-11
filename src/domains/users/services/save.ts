import UserMapper from '../mappers/UserMapper';
import UserRepository from '../repositories/user';

export default class SaveUseCase {
  public execute = async user => {
    const userSchema = UserMapper.toUserSchema(user);
    return new UserRepository().save(userSchema);
  };
}
