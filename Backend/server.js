const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

//  dotenv    
dotenv.config();

//   
const PORT = process.env.PORT || 5000;  // تحديد المنفذ الافتراضي إذا لم يكن موجودًا في .env

//   Express
const app = express();

//اmiddleware
app.use(cors());
app.use(express.json());

// workoutRoutes
const workoutRoutes = require("./routes/workoutRoutes");
app.use("/api/workouts", workoutRoutes);

//    userRoutes   
const userRoutes = require('./routes/userRoutes'); // تأكد من أن المسار صحيح
app.use('/api/users', userRoutes);

//   MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connecté à MongoDB");

    //   
    app.listen(PORT, () => console.log(`Serveur lancé sur http://localhost:${PORT}`));
  })
  .catch(err => console.error("Erreur MongoDB :", err));
