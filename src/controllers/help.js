/**
 * GET /
 * Help page.
 */
exports.getHelp = (req, res) => {
  res.render('help', {
    title: 'Help'
  });
};
