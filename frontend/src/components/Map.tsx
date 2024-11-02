import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { LatLngTuple } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';  

const defaultPosition: LatLngTuple = [-3.768319, -38.537732]; 

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
    return (
        <MapContainer center={defaultPosition} zoom={15} style={{ height: '400px', width: '400px' }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={defaultPosition} />
        </MapContainer>
    );
};

export default Map;
