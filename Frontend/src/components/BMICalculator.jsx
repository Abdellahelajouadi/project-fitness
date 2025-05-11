/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { toast } from "react-toastify";

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [bmi, setBmi] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();

    if (!height || !weight || !gender) {
      toast.error("Veuillez saisir une taille, un poids et un sexe valides.");
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);

    if (bmiValue < 18.5) {
      toast.warning(
        "Vous êtes en insuffisance pondérale. Veuillez consulter un professionnel de santé."
      );
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      toast.success(
        "Votre poids est normal. Continuez à adopter un mode de vie sain."
      );
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      toast.warning(
        "Vous êtes en surpoids. Il est conseillé de consulter un professionnel de santé."
      );
    } else {
      toast.error(
        "Vous êtes en situation d'obésité. Il est fortement recommandé de consulter un spécialiste."
      );
    }
  };

  return (
    <section className="bmi">
      <h1>CALCULATEUR IMC</h1>
      <div className="container">
        <div className="wrapper">
          <form onSubmit={calculateBMI}>
            <div>
              <label>Taille (cm)</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Poids (kg)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Sexe</label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Sélectionnez le sexe</option>
                <option value="Male">Homme</option>
                <option value="Female">Femme</option>
              </select>
            </div>
            <button type="submit">Calculer l'IMC</button>
          </form>
        </div>
        <div className="wrapper">
          <img src="/bmi.jpg" alt="Image IMC" />
        </div>
      </div>
    </section>
  );
};

export default BMICalculator;
