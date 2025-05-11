import { Check } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const pricing = [
    {
      imgUrl: "/pricing.jpg",
      title: "TRIMESTRIEL",
      price: 18000,
      length: 3,
    },
    {
      imgUrl: "/pricing.jpg",
      title: "SEMI-ANNUEL",
      price: 34000,
      length: 6,
    },
    {
      imgUrl: "/pricing.jpg",
      title: "ANNUEL",
      price: 67000,
      length: 12,
    },
  ];
  return (
    <section className="pricing">
      <h1>FORMULES ELITE EDGE FITNESS</h1>
      <div className="wrapper">
        {pricing.map((element) => {
          return (
            <div className="card" key={element.title}>
              <img src={element.imgUrl} alt={element.title} />
              <div className="title">
                <h1>{element.title}</h1>
                <h1>ABONNEMENT</h1>
                <h3>Rs {element.price}</h3>
                <p>Pour {element.length} mois</p>
              </div>
              <div className="description">
                <p>
                  <Check /> Équipement inclus
                </p>
                <p>
                  <Check /> Entraînement libre toute la journée
                </p>
                <p>
                  <Check /> Vestiaires gratuits
                </p>
                <p>
                  <Check /> Assistance qualifiée 24h/24 et 7j/7
                </p>
                <p>
                  <Check /> Option de gel de 20 jours
                </p>
                <Link to={"/"}>Rejoindre maintenant</Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;
