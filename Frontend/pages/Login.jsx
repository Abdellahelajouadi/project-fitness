import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => { 
const [formData, setFormData] = useState({ 
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
const response = await axios.post("http://localhost:5000/api/users/login", formData); 
localStorage.setItem("token", response.data.token);
alert("Login successful!");
navigate("/dashboard");
} catch (error) {
alert("Login error. Please check your credentials.");
console.error(error);
}
};

return( 
<div className="login-container"> 
<h2>Login</h2> 
<form className="login-form" onSubmit={handleSubmit}> 
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
<button type="submit">Log in</button> 
</form> 
</div> 
);
};

export default Login;