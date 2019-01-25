export default (message: string, data: any) => ({
  status: "OK",
  message: message || "Successful",
  data: data || null
});
