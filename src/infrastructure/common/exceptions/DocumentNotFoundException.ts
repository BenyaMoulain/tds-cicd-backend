import BaseError from './BaseError';
const code = 'DOCUMENT_NOT_FOUND_ERROR';
const name = 'DocumentNotFoundException';
const baseMessage = 'Document not found';
const status = 404;
export default class DocumentNotFoundException extends BaseError {
  constructor(message, documentId) {
    const details = { message, documentId };
    super(message, { code, name, baseMessage, status, details });
    Object.setPrototypeOf(this, DocumentNotFoundException.prototype);
  }
}
