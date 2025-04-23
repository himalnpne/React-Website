import React from 'react';
import './Subscription.css';

function Subscription() {
  return (
    <section className="subscription">
      <h2>Subscribe to my newsletter</h2>
      <input type="email" placeholder="Enter your email" />
      <button>Subscribe</button>
    </section>
  );
}

export default Subscription;
