import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Polyline } from 'react-leaflet';
import { LatLngTuple } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';


const startPosition: LatLngTuple = [-3.768319, -38.537734]; 
const endPosition: LatLngTuple = [-3.807043, -38.524584];

const DefaultIcon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    iconSize: [25, 41], // Tamanho do ícone
    iconAnchor: [12, 41], // Ponto de ancoragem do ícone
    popupAnchor: [1, -34], // Ponto de ancoragem do popup relativo ao ícone
    shadowSize: [41, 41] // Tamanho da sombra
});

// Aplicando o ícone por padrão
L.Marker.prototype.options.icon = DefaultIcon;

const Map: React.FC = () => {
  const [route, setRoute] = useState<LatLngTuple[]>([]);

  useEffect(() => {
      // Função para buscar a rota usando a API OSRM
      const fetchRoute = async () => {
          const url = `https://router.project-osrm.org/route/v1/driving/${startPosition[1]},${startPosition[0]};${endPosition[1]},${endPosition[0]}?geometries=geojson`;
          const response = await fetch(url);
          const data = await response.json();

          if (data && data.routes && data.routes[0]) {
              const coordinates = data.routes[0].geometry.coordinates.map((coord: [number, number]) => [coord[1], coord[0]] as LatLngTuple);
              setRoute(coordinates); 
          }
      };

      fetchRoute();
  }, []);

  return (
      <MapContainer center={startPosition} zoom={15} style={{ height: '400px', width: '400px' }}>
          <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={startPosition} />
          <Marker position={endPosition} />
          {route.length > 0 && <Polyline positions={route} color="blue" />}
      </MapContainer>
  );
};
export default Map;
