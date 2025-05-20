/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditWorkout = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    reps: "",
    load: "",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }
    const fetchWorkout = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/workouts`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        // جلب التمرين بالـ id
        const workout = res.data.find((w) => w._id === id);
        if (!workout) {
          setError("Workout not found");
          setLoading(false);
          return;
        }
        setFormData({
          title: workout.title,
          reps: workout.reps,
          load: workout.load,
        });
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch workout");
        setLoading(false);
      }
    };
    fetchWorkout();
  }, [id, token, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.patch(
        `http://localhost:5000/api/workouts/${id}`,
        {
          title: formData.title,
          reps: Number(formData.reps),
          load: Number(formData.load),
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      // alert("Workout updated successfully");
      navigate("/dashboard");
    } catch (err) {
      alert("Failed to update workout");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="edit-workout-container">
      <h2 className="adds">Edit Workout</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Reps:
          <input
            type="number"
            name="reps"
            value={formData.reps}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Load (kg):
          <input
            type="number"
            name="load"
            value={formData.load}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Update Workout</button>
      </form>
    </div>
  );
};

export default EditWorkout;
