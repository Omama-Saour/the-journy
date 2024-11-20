import React, { useEffect } from 'react';

const Calendly = () => {
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/asset/production/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <h2>Schedule a Meeting</h2>
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/omam907omam" // Replace with your actual URL
        style={{ minWidth: '320px', height: '630px' }}
      />
    </div>
  );
};

export default Calendly;