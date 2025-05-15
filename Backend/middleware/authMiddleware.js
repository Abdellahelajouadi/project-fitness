// src/middleware/authMiddleware.js

const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
  const authHeader = req.header('Authorization');

  // التحقق من وجود الهيدر وأنه يبدأ بـ "Bearer "
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Aucun token, accès refusé' });
  }

  // استخراج التوكن من الهيدر
  const token = authHeader.split(' ')[1];

  try {
    // التحقق من صحة التوكن وفك تشفيره
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // تخزين بيانات المستخدم المفكوكة في req.user
    req.user = { id: decoded.id };

    // تمرير الطلب للمرحلة التالية
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token non valide' });
  }
};

module.exports=protect;