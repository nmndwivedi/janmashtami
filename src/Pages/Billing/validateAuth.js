export default function validateAuth(values) {
  let errors = {};
  // Name Errors
  if (!values.name) {
    errors.name = "Required Name";
  }

  // Email Errors
  if (!values.email) {
    errors.email = "Required Email";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid Email Address";
  }

  // Phone Errors
  if (!values.tel) {
    errors.tel = "Required Phone";
  } else if (values.tel.length < 7 || !/^^[0-9]*$/i.test(values.tel)) {
    errors.tel = "Invalid Phone Number";
  }

  return errors;
}
