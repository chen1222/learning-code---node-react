/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  if (req.user) {
    res.redirect('/top');
  } else {
    res.redirect('/login');
  }
};
