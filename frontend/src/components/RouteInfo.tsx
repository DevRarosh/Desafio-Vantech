// RouteInfo.tsx
import React from 'react';
import './RouteInfo.css';

interface RouteInfoProps {
    distance: number | null;
    duration: number | null;
    loading: boolean; // Adicione uma nova prop para controle de carregamento
}

const RouteInfo: React.FC<RouteInfoProps> = ({ distance, duration, loading }) => {
    return (
        <div className="route-info">
            {loading ? ( // Verifique se está carregando
                <p>Carregando informações da rota...</p>
            ) : (
                <>
                    {distance !== null && <p>Distância: {(distance / 1000).toFixed(2)} km</p>}
                    {duration !== null && <p>Duração: {(duration / 60).toFixed(2)} min</p>}
                </>
            )}
        </div>
    );
};

export default RouteInfo;
