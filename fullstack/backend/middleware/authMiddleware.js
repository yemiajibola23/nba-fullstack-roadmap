function requireLogin(req, res, next) {
  console.log("Session at protected route:", req.session);
  if (req.session && req.session.user?.id) {
    next(); //user is logged in
  } else {
    res.status(401).json({ error: "Unauthorized - Please log in" });
  }
}

module.exports = requireLogin;
