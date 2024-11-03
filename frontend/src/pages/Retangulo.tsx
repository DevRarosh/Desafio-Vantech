import React from 'react';
import './Retangulo.css'
import '../Navbar/Navbar.css'

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
      <div className='navbar'></div>
    </div>
  );
};

export default RectangularComponent;
