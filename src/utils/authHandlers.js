export const newUser = (email, username, password, fname, lname) => {
  let users = window.localStorage.getItem("users");

  if (users) {
    let usersArray = JSON.parse(users);
    let exists = usersArray.filter((user) => user.username === username);

    if (exists.length > 0) return "Username already registered";
    usersArray.push({ email, username, password, fname, lname });

    window.localStorage.setItem("users", JSON.stringify(usersArray));
    return true;
  } else {
    window.localStorage.setItem(
      "users",
      JSON.stringify([{ email, username, password, fname, lname }])
    );
  }
};

export const loginUser = (username, password) => {
  let users = window.localStorage.getItem("users");

  let usersArray = [];
  if (users) {
    usersArray = JSON.parse(users);
  }
  let exists = usersArray.filter(
    (user) => user.username === username && user.password === password
  );
  if (exists.length > 0) return exists[0].username;
  return false;
};
