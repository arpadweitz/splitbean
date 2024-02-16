import React, { useState } from 'react';

const EmailSubscription = () => {
  const [email, setEmail] = useState('');

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Subscribed with email:', email);
    // Clear input field after submission
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={handleInputChange}
        required
      />
      <button type="submit">Subscribe</button>
    </form>
  );
};

export default EmailSubscription;