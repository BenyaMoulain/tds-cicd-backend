import UserValidationException from '../exceptions/UserValidationException';
import User from '../repositories/schemas/user';

export default class UserMapper {
  static toUserSchema = user => {
    const UserModel = new User().getModel();
    const userSchema = new UserModel();
    userSchema.name = user.name;
    userSchema.lastname = user.lastname;
    userSchema.secondLastname = user.secondLastname;
    userSchema.birthday = user.birthday;
    userSchema.email = user.email;
    userSchema.rut = user.rut;
    userSchema.phone = user.phone;
    userSchema.organization = user.organization;
    userSchema.organizationAddress = user.organizationAddress;
    userSchema.organizationPhone = user.organizationPhone;
    userSchema.organizationWeb = user.organizationWeb;
    return userSchema;
  };
}
