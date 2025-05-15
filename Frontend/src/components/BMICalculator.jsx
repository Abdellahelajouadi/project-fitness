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
toast.error("Please enter a valid height, weight and gender."); 
return; 
}

const heightInMeters = height / 100;
const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
setBmi(bmiValue);

if (bmiValue < 18.5) {
toast.warning(
"You are underweight. Please consult a healthcare professional."
);
} else if (bmiValue >= 18.5 && bmiValue < 24.9) {
toast.success(
"Your weight is normal. Continue to maintain a healthy lifestyle."
);
} else if (bmiValue >= 25 && bmiValue < 29.9) {
toast.warning(
"You are overweight. You are advised to consult a healthcare professional."
);
} else {
toast.error(
"You are obese. It is strongly recommended that you consult a specialist."
);
}
};

return( 
<section className="bmi"> 
<h1>BMI CALCULATOR</h1> 
<div className="container"> 
<div className="wrapper"> 
<form onSubmit={calculateBMI}> 
<div> 
<label>Size (cm)</label> 
<input 
type="number" 
value={height} 
onChange={(e) => setHeight(e.target.value)} 
required 
/> 
</div> 
<div> 
<label>Weight (kg)</label> 
<input 
type="number" 
value={weight} 
onChange={(e) => setWeight(e.target.value)} 
required 
/> 
</div> 
<div> 
<label>Sex</label> 
<select 
value={gender} 
onChange={(e) => setGender(e.target.value)} 
> 
<option value="">Select gender</option> 
<option value="Male">Man</option> 
<option value="Female">Female</option> 
</select> 
</div> 
<button type="submit">Calculate BMI</button> 
</form> 
</div> 
<div className="wrapper"> 
<img src="/bmi.jpg" alt="IMC Image" /> 
</div> 
</div> 
</section> 
);
};

export default BMICalculator;