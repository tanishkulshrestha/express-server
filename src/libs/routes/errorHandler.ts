export default function errorHandler(err, req, res, next) {

  console.log('Inside ErrorHandler');

  const status = err.status || 500;
  const message = err.message || 'error';
  const error = err.error || 'Not Found';
  const timestamp = new Date();
  res.send({ error, message, status, timestamp });
}
