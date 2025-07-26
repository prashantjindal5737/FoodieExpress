const express = require('express');
const router = express.Router();
const User = require('../model/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'mysecretkey';
const Category = require('../model/Category');

router.post('/createuser', async (req, res) => {
  try {
    const existing = await User.findOne({ email: req.body.email });
    if (existing) return res.status(400).json({ error: 'User exists' });
    const hashed = await bcrypt.hash(req.body.password, 10);
    await User.create({ name: req.body.name, email: req.body.email, password: hashed, address: req.body.address });
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).json({ error: 'Invalid credentials' });
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) return res.status(400).json({ error: 'Invalid credentials' });
    const authToken = jwt.sign({ userId: user._id }, JWT_SECRET);
    res.json({ success: true, authToken, userData: user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

router.post('/displaydata', (req, res) => {
  res.json([global.foodapp, global.foodcat])
});

router.post('/addFood', async (req, res) => {
  try {
    const existing = await Category.findOne({ name: req.body.name });
    if (existing) return res.status(400).json({ error: 'Food exists' });
    await Category.create(req.body);
    global.foodapp = await Category.find({});
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
