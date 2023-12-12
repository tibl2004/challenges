import React, { useState, useEffect } from 'react';
import './App.scss';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [storedData, setStoredData] = useState([]);

  useEffect(() => {
    // Daten aus dem localStorage beim Laden der Seite abrufen
    const storedDataFromLocalStorage = JSON.parse(localStorage.getItem('data')) || [];
    setStoredData(storedDataFromLocalStorage);
  }, []);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Neue Daten zum bestehenden Array hinzufügen
    const newData = [...storedData, inputValue];
    setStoredData(newData);

    // Daten im localStorage speichern
    localStorage.setItem('data', JSON.stringify(newData));

    // Input-Feld zurücksetzen
    setInputValue('');
  };

  return (
    <div>
      <h1>Challenges</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Daten eingeben:
          <input type="text" value={inputValue} onChange={handleInputChange} />
        </label>
        <button type="submit">Absenden</button>
      </form>
      <h2>Gespeicherte Daten:</h2>
      <ul>
        {storedData.map((data, index) => (
          <li key={index}>{data}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
