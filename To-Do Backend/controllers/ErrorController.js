exports.Error404 = (req, res, next) => {
  res.status(404).json({ error: '404 - Page Not Found' });
}
