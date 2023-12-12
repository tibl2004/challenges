import React from 'react';
import { DataProvider, useDataContext } from './DataContext';
import './App.scss';

function App() {
  const { storedData, addData } = useDataContext();
  const [inputValue, setInputValue] = React.useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Neue Daten zum Firebase-Backend senden
    addData(inputValue);

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

const AppWithProvider = () => (
  <DataProvider>
    <App />
  </DataProvider>
);

export default AppWithProvider;
