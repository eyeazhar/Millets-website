import React, { useState } from 'react';

const Feedback = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Feedback sent to admin's email:\nName: ${name}\nEmail: ${email}\nFeedback: ${feedback}`);
    // Here you would typically send the data to a server using fetch or XMLHttpRequest
  };

  return (
    <div>
      <h1>Feedback</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Feedback:
          <textarea value={feedback} onChange={(e) => setFeedback(e.target.value)} required></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Feedback;
