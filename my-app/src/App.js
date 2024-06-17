import React, { useState } from 'react';
import './App.css';

function App() {
  const [columns, setColumns] = useState([]);
  const [currentSelection, setCurrentSelection] = useState('Head');

  const handleSelectChange = (event) => {
    setCurrentSelection(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newColumns = [...columns];
    
    if (newColumns.length === 0 || newColumns[newColumns.length - 1].type !== currentSelection) {
      newColumns.push({ type: currentSelection, items: [currentSelection] });
    } else {
      newColumns[newColumns.length - 1].items.push(currentSelection);
    }
    
    setColumns(newColumns);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Select:
          <select value={currentSelection} onChange={handleSelectChange}>
            <option value="Head">Head</option>
            <option value="Tail">Tail</option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
      <div className="columns">
        {columns.map((column, index) => (
          <div key={index} className="column">
            {column.items.map((item, itemIndex) => (
              <div key={itemIndex}>{item}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
