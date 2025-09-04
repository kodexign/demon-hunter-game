import React from 'react';
import './AboutPage.css';
// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    //<div className="about">
      <div>
        <p>Hello World!
          <br> Kalia here! Dreaming is good for the soul.</br>
        </p>
      </div>
   // </div>
  );
}

export default AboutPage;
