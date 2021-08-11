import SaveUseCase from './save';
import ListUseCase from './list';
import RemoveUseCase from './remove';
import UpdateUseCase from './update';

export default class UserServices {
  public save = async user => new SaveUseCase().execute(user);

  public list = async () => new ListUseCase().execute();

  public remove = async userId => new RemoveUseCase().execute(userId);

  public update = async (userId, user) =>
    new UpdateUseCase().execute(userId, user);
}
