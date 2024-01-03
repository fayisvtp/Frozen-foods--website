import React, { useState } from 'react';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [resetStatus, setResetStatus] = useState('');

  const handleEmailSubmit = async (e) => {
    e.preventDefault();

    try {
      // Simulate sending a request to the server (replace with your actual server endpoint)
      // In a real scenario, this request would trigger an email with a reset link
      setResetStatus('Password reset email sent. Check your inbox.');
    } catch (error) {
      console.error('Password reset request error:', error);
      setResetStatus('An error occurred. Please try again later.');
    }
  };

  return (
    <div>
      <h2>Password Reset</h2>
      <p>{resetStatus}</p>

      <form onSubmit={handleEmailSubmit}>
        <label htmlFor="email">Enter your email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit">Request Password Reset</button>
      </form>
    </div>
  );
};

export default ResetPassword;
