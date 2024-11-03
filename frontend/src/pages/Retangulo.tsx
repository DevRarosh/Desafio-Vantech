import React from 'react';
import './Retangulo.css'

// Defina os tipos das props, se necessário
interface RectangularComponentProps {
  width?: string;
  height?: string;
  backgroundColor?: string;
  borderRadius?: string;
}

const RectangularComponent: React.FC<RectangularComponentProps> = ({
  width = '200px',
  height = '100px',
  backgroundColor = '#3498db',
  borderRadius = '15px',
}) => {
  const style: React.CSSProperties = {
    width,
    height,
    backgroundColor,
    borderRadius,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white'
  };

  return (
    <div className='Retangulo' >
    </div>
  );
};

export default RectangularComponent;
