import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Polyline } from 'react-leaflet';
import { LatLngTuple } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './Maps.css';

const startPosition: LatLngTuple = [-3.768319, -38.537734]; 
const endPosition: LatLngTuple = [-3.807043, -38.524584];

const DefaultIcon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

// Aplicando o ícone por padrão
L.Marker.prototype.options.icon = DefaultIcon;

interface RouteResponse {
    routes: {
        geometry: {
            coordinates: [number, number][];
        };
        distance: number; // Distância em metros
        duration: number; // Duração em segundos
    }[];
}

interface MapProps {
    setRouteInfo: (distance: number | null, duration: number | null) => void;
}

const Map: React.FC<MapProps> = ({ setRouteInfo }) => {
    const [route, setRoute] = useState<LatLngTuple[]>([]);
    const [loading, setLoading] = useState<boolean>(true); // Estado de carregamento

    useEffect(() => {
        const fetchRoute = async () => {
            setLoading(true); // Iniciar carregamento
            const url = `https://router.project-osrm.org/route/v1/driving/${startPosition[1]},${startPosition[0]};${endPosition[1]},${endPosition[0]}?geometries=geojson`;
            const response = await fetch(url);
            const data: RouteResponse = await response.json();

            if (data && data.routes && data.routes[0]) {
                const coordinates = data.routes[0].geometry.coordinates.map((coord: [number, number]) => [coord[1], coord[0]] as LatLngTuple);
                setRoute(coordinates);
                const adjustedDuration = data.routes[0].duration + 120; // Adicionando 2 minutos (120 segundos)
                setRouteInfo(data.routes[0].distance, adjustedDuration); // Passa a distância e a duração ajustada para o App
            } else {
                console.error('Rota não encontrada ou dados inválidos:', data);
                setRouteInfo(null, null); // Resetar informações se houver erro
            }
            setLoading(false); // Finalizar carregamento
        };

        fetchRoute();
    }, [setRouteInfo]);

    return (
        <div className="Map">
            <MapContainer center={startPosition} zoom={15} style={{ height: '400px', width: '400px' }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={startPosition} />
                <Marker position={endPosition} />
                {route.length > 0 && <Polyline positions={route} color="blue" />}
            </MapContainer>
        </div>
    );
};

export default Map;
