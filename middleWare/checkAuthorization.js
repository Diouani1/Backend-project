import jwt from "jsonwebtoken";
import creatErr from "http-errors";

const checkAuthorizatio = (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      next(creatErr(401, "you are not allowed"));
      return;
    }
    jwt.verify(token, process.env.SECRET, (err, object) => {
      if (err) {
        next(creatErr(401, err));
        return;
      }

      req.userId = object.id;
      next();
    });
  } catch (error) {
    next(creatErr(500, error));
  }
};


export default checkAuthorizatio