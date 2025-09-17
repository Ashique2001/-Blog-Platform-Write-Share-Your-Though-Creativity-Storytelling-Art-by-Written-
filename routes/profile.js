const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const User = require('../models/User');
const Post = require('../models/Post');

router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });

    const posts = await Post.find({ author: user._id }).sort({ createdAt: -1 }).limit(50);
    res.json({ user, posts });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

router.put('/', auth, async (req, res) => {
  try {
    const { name, bio, avatarUrl } = req.body;
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    if (name) user.name = name;
    if (bio) user.bio = bio;
    if (avatarUrl) user.avatarUrl = avatarUrl;

    await user.save();
    res.json({ user: { id: user.id, name: user.name, email: user.email, bio: user.bio, avatarUrl: user.avatarUrl } });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;
