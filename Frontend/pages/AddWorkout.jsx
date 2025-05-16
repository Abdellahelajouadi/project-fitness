import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddWorkout = () => {
  const [formData, setFormData] = useState({
    title: "",
    reps: "",
    load: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const token = localStorage.getItem("token");
  console.log("Token:", token); // ✅ هنا باش تشوف واش التوكن موجود

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    await axios.post("http://localhost:5000/api/workouts", formData, config);
    alert("✅ Workout added successfully!");
    navigate("/dashboard");
  } catch (error) {
    console.error("Error response:", error.response?.data || error);
    // alert("❌ Failed to add workout.");
  }
};


  return (
    <div className="add-workout-container">
      <div className="add-workout-box">
        <h2 className="add-workout-title">➕ Add a New Workout</h2>
        <form onSubmit={handleSubmit} className="add-workout-form">
          <label>Workout Title</label>
          <input
            type="text"
            name="title"
            placeholder="e.g., Push-ups"
            value={formData.title}
            onChange={handleChange}
            required
          />

          <label>Reps</label>
          <input
            type="number"
            name="reps"
            placeholder="e.g., 10"
            value={formData.reps}
            onChange={handleChange}
            required
          />

          <label>Load (kg)</label>
          <input
            type="number"
            name="load"
            placeholder="e.g., 20"
            value={formData.load}
            onChange={handleChange}
            required
          />

          <button type="submit" className="add-btn">
            Add Workout
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddWorkout;
