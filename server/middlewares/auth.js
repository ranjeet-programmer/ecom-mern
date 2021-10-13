const admin = require("../firebase");

exports.authCheck = async (req, res, next) => {
  // console.log(req.headers);

  try {
    const firebaseUser = await admin
      .auth()
      .verifyIdToken(req.headers.authtoken);
    // console.log("Firebase User in Auth Check", firebaseUser);
    req.user = firebaseUser;
    next();
  } catch (error) {
    res.status(401).json({
      error: "Invalid or Expired Token",
    });
  }
};
