const jwt = require("jsonwebtoken");

const verifyTokenMiddle = {

  verifyToken: (req, res, next) => {
    const authHeader = req.header("Authorization");
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) return res.sendStatus(401);

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
      req.username = decoded.username;
      next();
    } catch (error) {
      return res.status(403).json("Invalid token !!!");
    }
  },

  verifyTokenAdmin: (req, res, next) => {
    verifyTokenMiddle.verifyToken(req, res, () => {
      if (req.user.id == req.params.id || req.user.admin) {
        console.log('asdasd');
        next();
      } else {
        res.status(403).json("You're not allowed to delete other");
      }
    });
  },
};

module.exports = verifyTokenMiddle;
