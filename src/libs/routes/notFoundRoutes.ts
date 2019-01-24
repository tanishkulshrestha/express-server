export default function notFoundRoutes(req, res,a) {
  console.log("Inside notFoundRoutes");
  a({ err: "Not Found",status: 404 });
}
