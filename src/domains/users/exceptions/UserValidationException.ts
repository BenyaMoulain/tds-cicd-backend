import EntityValidationException from '../../../infrastructure/common/exceptions/EntityValidationException';

const baseMessage = 'Attempt to create a new User failed';

export default class UserValidationException extends EntityValidationException {
  constructor(errorMessage, user) {
    const message = `${baseMessage} due to: ${errorMessage}`;
    super(message, user);
  }
}
