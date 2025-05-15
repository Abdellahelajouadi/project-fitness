const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// إعداد dotenv للوصول إلى المتغيرات البيئية
dotenv.config();

// تعريف المتغيرات البيئية
const PORT = process.env.PORT || 5000;  // تحديد المنفذ الافتراضي إذا لم يكن موجودًا في .env

// إنشاء تطبيق Express
const app = express();

// استخدام الـ middleware
app.use(cors());
app.use(express.json());

// تأكد من أنك قد قمت بتعريف userRoutes قبل استخدامه هنا
// إذا كنت تستورد المسارات من ملف آخر:
const userRoutes = require('./routes/userRoutes'); // تأكد من أن المسار صحيح
app.use('/api/users', userRoutes);

// الاتصال بـ MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connecté à MongoDB");

    // بدء تشغيل الخادم
    app.listen(PORT, () => console.log(`Serveur lancé sur http://localhost:${PORT}`));
  })
  .catch(err => console.error("Erreur MongoDB :", err));
