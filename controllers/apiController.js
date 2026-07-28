exports.getCurrentUser = (req, res) => {
  if (!req.isAuthenticated || !req.isAuthenticated()) {
    return res.status(401).json({ loggedIn: false });
  }

  return res.json({
    loggedIn: true,
    username: req.user.username,
    id: req.user.id,
    avatar: req.user.avatar,
  });
};
