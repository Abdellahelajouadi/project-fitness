const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// تسجيل مستخدم جديد
exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // التحقق من وجود المستخدم مسبقًا
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'المستخدم مسجل مسبقًا' });
    }

    // إنشاء مستخدم جديد
    const user = new User({ name, email, password });
    await user.save();

    // إنشاء توكن JWT
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(201).json({ token, message: 'تم إنشاء الحساب بنجاح' });
  } catch (error) {
    res.status(500).json({ message: 'خطأ في الخادم', error });
  }
};

// تسجيل دخول المستخدم
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // التحقق من وجود المستخدم
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'المستخدم غير موجود' });
    }

    // التحقق من تطابق كلمة المرور
    const isPasswordMatch = await user.matchPassword(password);
    if (!isPasswordMatch) {
      return res.status(401).json({ message: 'بيانات الدخول غير صحيحة' });
    }

    // إنشاء توكن JWT
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(200).json({ token, message: 'تم تسجيل الدخول بنجاح' });
  } catch (error) {
    res.status(500).json({ message: 'خطأ في الخادم', error });
  }
};
