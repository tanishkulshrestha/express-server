export function validateEmail(email) {
  let regex = RegExp("^[A-Za-z0-9._%+-]+@successive.tech$");
  if (regex.test(email)) {
    return true;
  } else {
    return false;
  }
}
