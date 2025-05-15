import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => { 
const [formData, setFormData] = useState({ 
name: "", 
email: "", 
password: "", 
}); 

const navigate = useNavigate(); 

const handleChange = (e) => { 
setFormData({ ...formData, [e.target.name]: e.target.value }); 
}; 

const handleSubmit = async(e) => { 
e.preventDefault(); 
try { 
console.log("Sending data: ", formData); // Click on "console.log" to read the message  
const response = await axios.post("http://localhost:5000/api/users/register", formData);
localStorage.setItem("token", response.data.token);
alert("Account created successfully!");
navigate("/dashboard");
} catch (error) { 
alert("Error registering"); 
console.error(error); 
} 
}; 

return( 
<div className="register-form"> 
<h2>Create an account</h2> 
<form onSubmit={handleSubmit}> 
<input 
type="text" 
name="name" 
placeholder="Name" 
value={formData.name} 
onChange={handleChange} 
required 
/> 
<input 
type="email" 
name="email" 
placeholder="Email address" 
value={formData.email} 
onChange={handleChange} 
required 
/> 
<input 
type="password" 
name="password" 
placeholder="Password" 
value={formData.password} 
onChange={handleChange} 
required 
/> 
<button type="submit">Subscribe</button> 
</form> 
</div> 
);
};

export default Register;