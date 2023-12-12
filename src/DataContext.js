import { createContext, useContext, useState, useEffect } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [storedData, setStoredData] = useState([]);

  useEffect(() => {
    // Daten aus dem localStorage beim Laden der Seite abrufen
    const storedDataFromLocalStorage = JSON.parse(localStorage.getItem('data')) || [];
    setStoredData(storedDataFromLocalStorage);
  }, []);

  const addData = (newData) => {
    // Neue Daten zum bestehenden Array hinzufügen
    const updatedData = [...storedData, newData];
    setStoredData(updatedData);

    // Daten im localStorage speichern
    localStorage.setItem('data', JSON.stringify(updatedData));
  };

  return (
    <DataContext.Provider value={{ storedData, addData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  return useContext(DataContext);
};
