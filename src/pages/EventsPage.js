
import React from 'react';
import './EventsPage.css';

const EventsPage = () => {
  return (
    <div className="events-page">
      <h2>Upcoming Webinars & Masterclasses</h2>
      <div className="event-card">
        <h3>Cyber Security Masterclass</h3>
        <p>Date: May 31 | Time: 10 AM – 12 PM EST</p>
        <p>Learn hands-on defense strategies & career prep from industry experts.</p>
        <button>Register Now</button>
      </div>
    </div>
  );
};

export default EventsPage;
