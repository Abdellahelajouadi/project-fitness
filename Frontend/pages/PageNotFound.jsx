import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
return (
<div style={{ textAlign: "center", padding: "50px" }}>
<h1>404 - Page Not Found</h1>
<p>The page you are looking for does not exist.</p>
<Link to="/" style={{ color: "#0077cc" }}>Back to Home</Link>
</div>
);
};

export default PageNotFound;