import React from 'react';
import './App.css';
import Overview from './components/Overview';

import html2pdf from 'html2pdf.js';

const generatePDF = () => {

  const elements = document.querySelectorAll('button, input[type="submit"], input[type="file"]');

  // Appliquez le style 'display: none' à chaque élément sélectionné
  elements.forEach(element => {
      element.style.display = 'none';
  });
  // Sélectionnez l'élément que vous souhaitez convertir en PDF
  const element = document.getElementById('content-to-pdf');

  // Configurez les options pour la conversion
  const options = {
    margin: [0, 0],
    filename: 'my-document.pdf',
    image: { type: 'jpeg', quality: 1 },
    html2canvas: { scale: 2, logging: true },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
  };

  // Convertissez et téléchargez le PDF
  html2pdf().set(options).from(element).save();

 
};

function App() {
  return (
    <div className="App">
      <button onClick={generatePDF}>Generate PDF</button>
      <div id="content-to-pdf">
        { <Overview />}
      </div>
     
    </div>
  );
}

export default App;
