export const signup = (req, res) => {
  const { email, fullName, password } = req.body;
  try {
    if (password.length < 6) {
      res.status(400).send("Password must be at least 6 characters long");
    }
  } catch (error) {}
};

export const login = (req, res) => {
  res.send("login");
};

export const logout = (req, res) => {
  res.send("logout");
};
