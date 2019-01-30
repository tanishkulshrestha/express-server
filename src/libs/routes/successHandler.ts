export default function successHandler(message: string, data: any) {
  return {
    status: "OK",
    message: message || "Successful",
    data: data || null,
  }
}
