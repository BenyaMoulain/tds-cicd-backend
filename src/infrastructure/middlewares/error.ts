import { Response, NextFunction } from 'express';
import logHandler from '../common/handlers/logHandler';
import traceHandlerFactory from '../common/handlers/trace/traceHandlerFactory';

export default function errorMiddleware(
  err,
  req: any,
  res: Response,
  next: NextFunction,
) {
  const traceHandler = traceHandlerFactory.getInstanceById(req.uniqueId);
  traceHandler.endRequestTrace();
  const statusCode = err.status || 500;
  const errorResponse = {
    message: err.baseMessage || 'Internal Server Error',
    code: statusCode,
    internalCode: err.code || 'INTERNAL_SERVER_ERROR',
    details: err.details,
  };
  logHandler.error(traceHandler, {
    action: 'FINISH_REQUEST_WITH_ERROR',
    description: `request to ${req.path} finished with error ${statusCode}`,
    details: {
      ...errorResponse,
      timelapse: `${traceHandler.getRequestTimelapse()}ms`,
    },
  });
  console.log(err);
  res.status(statusCode).json(errorResponse);
  next();
}
