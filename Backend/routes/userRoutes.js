// src/routes/userRoutes.js
const express = require('express');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const router = express.Router();
const protect = require('../middleware/authMiddleware'); // استيراد الـ middleware للتحقق من الـ token

// تسجيل مستخدم جديد
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    
    try {
      const userExists = await User.findOne({ email });
      if (userExists) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      const user = new User({ name, email, password });
      await user.save();
      
      // إنشاء التوكن بعد حفظ المستخدم
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.status(201).json({ token, message: 'User registered successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Server Error', error });
    }
  });

// تسجيل الدخول
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // مقارنة كلمة المرور المدخلة مع كلمة المرور المشفرة
      const isPasswordMatch = await user.matchPassword(password);
      if (!isPasswordMatch) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      // إنشاء التوكن بعد التحقق من البيانات
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.status(200).json({ token, message: 'Login successful' });
    } catch (error) {
      res.status(500).json({ message: 'Server Error', error });
    }
  });
  
// مسار الـ Profile المحمي
router.get('/profile', protect, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);  // `req.user.id` يأتي من التوكن
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);  // إرجاع بيانات المستخدم
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
});

module.exports = router;
