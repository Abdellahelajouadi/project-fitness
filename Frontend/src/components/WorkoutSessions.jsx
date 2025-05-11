import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>MEILLEURES SÉANCES D’ENTRAÎNEMENT</h1>
        <p>
          Découvrez des séances d’entraînement à fort impact conçues pour brûler les graisses,
          développer la force et améliorer votre endurance. Du niveau débutant à avancé, chaque séance est adaptée pour obtenir des résultats réels.
        </p>
        <img src="/img5.jpg" alt="entraînement" />
      </div>

      <div className="wrapper">
        <h1>BOOTCAMPS EN VEDETTE</h1>
        <p>
          Rejoignez nos bootcamps les plus populaires qui repoussent vos limites et transforment votre parcours de remise en forme.
          Entraînez-vous avec des coachs professionnels et restez concentré sur vos objectifs.
        </p>

        <div className="bootcamps">
          <div>
            <h4>Programme HIIT Brûle-Graisses</h4>
            <p>
              Cette séance d'entraînement par intervalles à haute intensité est parfaite pour brûler des calories
              et améliorer la santé cardiovasculaire en seulement 30 minutes.
            </p>
          </div>
          <div>
            <h4>Bootcamp Force & Conditionnement</h4>
            <p>
              Concentrez-vous sur la musculation et l'endurance avec cet entraînement complet intense
              conçu par des entraîneurs certifiés.
            </p>
          </div>
          <div>
            <h4>Yoga Matinal & Souplesse</h4>
            <p>
              Commencez votre journée avec une séance de yoga guidée pour améliorer la flexibilité,
              l’équilibre et la clarté mentale — convient à tous les niveaux.
            </p>
          </div>
          <div>
            <h4>Défi Guerrier du Week-end</h4>
            <p>
              Repoussez vos limites avec ce défi de deux jours qui combine force,
              agilité et exercices cardio pour faire évoluer votre forme physique.
            </p>
          </div>
          <div>
            <h4>Bootcamp Abdos Explosifs</h4>
            <p>
              Ciblez vos abdominaux et le bas du dos avec des routines spécifiques
              qui améliorent la stabilité du tronc et la posture au quotidien.
            </p>
          </div>
          <div>
            <h4>Fondamentaux du Powerlifting</h4>
            <p>
              Apprenez les bases du powerlifting avec des techniques sécurisées
              et des plans de progression structurés pour augmenter votre force et votre discipline.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
