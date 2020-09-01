import React from 'react';
import logo from './logo.svg';
import './App.css';
import ItemList from './components/ItemList';

function App() {
  const listItems = ["Item1", "Item2", "Item3"];

  return (
    <div className="App">
      {
        listItems.map((item, index) => {
          return <ItemList key={index} title={item}/>
        })
      }
    </div>
  );
}

export default App;
