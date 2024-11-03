import React from 'react';
import './Retangulo.css'

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

  return (
    <div className='Retangulo' >
    </div>
  );
};

export default RectangularComponent;
