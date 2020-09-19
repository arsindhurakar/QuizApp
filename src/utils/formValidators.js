export const usernameValidation = (username) => {
  if (!username) return "Username Required";
  return true;
};

export const passwordValidation = (password, confirmPassword) => {
  if (!password) return "Password Required";
  if (password && password.length < 5) {
    return "Password too short";
  }
  if (password !== confirmPassword) return "Passswords does not match";
};

export const emailValidation = (email) => {
  if (!email) return "Email Required";
  if (email) {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let validEmail = emailRegex.test(email.toLowerCase());
    if (!validEmail) return "Invalid Email";
  }
};
