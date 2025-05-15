import { Check } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Pricing = () => { 
const pricing = [ 
{ 
imgUrl: "/pricing.jpg", 
title: "QUARTERLY", 
price: 18000, 
length: 3, 
}, 
{ 
imgUrl: "/pricing.jpg", 
title: "SEMI-ANNUAL", 
price: 34000, 
length: 6, 
}, 
{ 
imgUrl: "/pricing.jpg", 
title: "ANNUAL", 
price: 67000, 
length: 12, 
}, 
]; 
return (
<section className="pricing">
<h1>ELITE EDGE FITNESS PACKAGES</h1>
<div className="wrapper">
{pricing.map((element) => {
return (
<div className="card" key={element.title}>
<img src={element.imgUrl} alt={element.title} />
<div className="title">
<h1>{element.title}</h1>
<h1>MEMBERSHIP</h1>
<h3>Rs {element.price}</h3>
<p>For {element.length} months</p>
</div>
<div className="description">
<p>
<Check /> Equipment included
</p>
<p>
<Check /> All-day self-training
</p>
<p>
<Check /> Free changing rooms
</p>
<p>
<Check /> 24/7 Qualified Support
</p>
<p>
<Check /> 20-Day Freeze Option
</p>
<Link to={"/"}>Join Now</Link>
</div>
</div>
);
})}
</div>
</section>
);
};

export default Pricing;