import React from 'react';
import './App.css';
import Map from './components/Map';
import RectangularComponent from './pages/Retangulo';

function App() {
  return (
    <div >
      <Map />
      <div  >
        <RectangularComponent/>
      </div>
    </div>
  );
}

export default App;
