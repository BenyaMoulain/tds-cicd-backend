import apm from 'elastic-apm-node';

let apmInstance;

const start = () => {
  const apmUrl = `${process.env.APM_HOST_URL}`;
  const apmServiceName = `${process.env.APM_SERVICE_NAME}`;
  const apmCaptureHeaders = `${process.env.APM_CAPTURE_HEADERS}`;
  const apmAbortedRequests = `${process.env.APM_ERROR_ABORTED_REQUESTS}`;
  const nodeEnv = `${process.env.NODE_ENV}`;
  const apmEnabled = `${process.env.APM_ENABLED}`;

  if (apmEnabled === 'true') {
    apmInstance = apm.start({
      serviceName: apmServiceName,
      environment: nodeEnv,
      serverUrl: apmUrl,
      captureHeaders: Boolean(apmCaptureHeaders),
      errorOnAbortedRequests: Boolean(apmAbortedRequests),
      captureBody: 'off',
    });
    console.log('Initialized: ', apmInstance.getServiceName());
  }
};

export default { start, apmInstance };
