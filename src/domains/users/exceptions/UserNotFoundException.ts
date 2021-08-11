import DocumentNotFoundException from '../../../infrastructure/common/exceptions/DocumentNotFoundException';

const baseMessage = 'User was not found';

export default class UserNotFoundException extends DocumentNotFoundException {
  constructor(userId) {
    super(baseMessage, userId);
  }
}
