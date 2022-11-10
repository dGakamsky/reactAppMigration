import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/homeStyle.css';

function getProtossGuide(props){
  fetch('https://starcraft-ii.p.rapidapi.com/learning/protoss/page/1/')
    .then(res => res.json())
      .then(response=> {
          return(`<a href= "${response.value[0].webUrl}"> Heres a helpful guide </a>`)
          });
  
  }



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div class="center, main">
      <div class="center, child">
      This is some text 
      {getProtossGuide}
      </div>
    </div>
  </React.StrictMode>
);


