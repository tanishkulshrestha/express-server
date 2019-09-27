export default function notFoundRoutes(req, res, next): void {
  console.log('Inside notFoundRoutes');
  next({ err: 'Not Found', status: 404 });
}
