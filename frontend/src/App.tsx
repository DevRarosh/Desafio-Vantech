import React, { useState } from 'react';
import './App.css';
import Map from './components/Map';
import RectangularComponent from './pages/Retangulo';
import RouteInfo from './components/RouteInfo';


function App() {
  const [distance, setDistance] = useState<number | null>(null);
  const [duration, setDuration] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // Estado de carregamento

  const setRouteInfo = (distance: number | null, duration: number | null) => {
    setDistance(distance);
    setDuration(duration);
    setLoading(false); // Atualiza o estado de carregamento para false
  };

  return (
    <div className="App">
      <div className="content">
        <Map setRouteInfo={setRouteInfo} /> {}
        <RouteInfo distance={distance} duration={duration} loading={loading} /> {/* Renderize RouteInfo */}
        <RectangularComponent />
      </div>
    </div>
  );
}

export default App;
