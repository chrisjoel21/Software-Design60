function SignInValidation(values) {
  let error = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
  

  if (values.signInEmail == "") {
    error.email = "Email should not be empty";
  } else if (!email_pattern.test(values.signInEmail)) {
    error.email = "Email didn't match its format";
  } else {
    error.email = "";
  }

  if (values.signInPassword == "") {
    error.password = "Password should not be empty";
  } else if (!password_pattern.test(values.signInPassword)) {
    error.password = "Password be atleast 8 Characters, 1 Capital, atleast 1 numeric character";
  } else {
    error.password = "";
  }
  return error;
}
export default SignInValidation;
