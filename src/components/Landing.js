import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import './index.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Helmet>
        <title>Custom Landing Page | My Website</title>
        <meta name="description" content="This is a custom landing page for my website." />
      </Helmet>
      <h1>Welcome to My Custom Landing Page!</h1>
      <p>This landing page is built with React and includes custom code.</p>
      <button className="cta-button">Get Started</button>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>,
  document.getElementById('root')
);




