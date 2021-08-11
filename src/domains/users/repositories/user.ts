import { Error as MongooseError } from 'mongoose';
import UserNotFoundException from '../exceptions/UserNotFoundException';
import UserValidationException from '../exceptions/UserValidationException';
import User from './schemas/user';

export default class UserRepository {
  private model;
  constructor() {
    this.model = new User().getModel();
  }
  public save = async userSchema =>
    this.model
      .create(userSchema)
      .then(user => user)
      .catch(err => {
        if (err instanceof MongooseError.ValidationError) {
          throw new UserValidationException(err, userSchema);
        }
      });

  public list = async () => this.model.find();

  public update = async (id, userSchema) => {
    try {
      return await this.model.findByIdAndUpdate(id, userSchema);
    } catch (err) {
      if (err instanceof MongooseError.ValidationError) {
        throw new UserValidationException(err, userSchema);
      } else if (err instanceof MongooseError.CastError) {
        throw new UserNotFoundException(err);
      }
    }
  };

  public delete = async id => {
    try {
      const result = await this.model.findByIdAndRemove(id);
      if (result === null) {
        throw new UserNotFoundException(id);
      }
      return result;
    } catch (err) {
      if (err instanceof MongooseError.CastError) {
        throw new UserNotFoundException(err);
      }
    }
  };
}
