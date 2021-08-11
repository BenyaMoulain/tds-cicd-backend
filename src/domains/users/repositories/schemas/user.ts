import { Document, Model, model, Schema } from 'mongoose';

export interface IUser extends Document {
  name: string;
  lastname: string;
  secondLastname: string;
  birthday: Date;
  email: string;
  rut: string;
  phone: string;
  organization: string;
  organizationAddress: string;
  organizationPhone: string;
  organizationWeb: string;
}

const userSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  secondLastname: {
    type: String,
    required: true,
  },
  birthday: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  rut: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  organization: {
    type: String,
    required: true,
  },
  organizationAddress: {
    type: String,
    required: true,
  },
  organizationPhone: {
    type: String,
    required: true,
  },
  organizationWeb: {
    type: String,
    required: true,
  },
});

export default class UserModel {
  model: Model<IUser>;
  constructor() {
    this.model = model<IUser>('User', userSchema);
  }

  getModel = () => this.model;
}
