import React from 'react';

const Contact = () => {
return (
<section className="contact-section">
<h2>Contact Us</h2>
<p>For any questions or requests, please contact us by filling out the form below.</p>

<form className="contact-form">
<input type="text" placeholder="Your Name" required />
<input type="email" placeholder="Your Email" required />
<textarea placeholder="Your Message" rows="5" required></textarea>
<button type="submit">Send a Message</button>
</form>
</section>
);
};

export default Contact;