// ImageGrid.jsx
import React from 'react';
import './Carrusel.css'; // Importa el archivo CSS de estilos

function ImageGrid() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <img src="https://via.placeholder.com/300" alt="Placeholder 1" className="img-fluid" />
        </div>
        <div className="col-md-4">
          <img src="https://via.placeholder.com/300" alt="Placeholder 2" className="img-fluid" />
        </div>
        <div className="col-md-4">
          <img src="https://via.placeholder.com/300" alt="Placeholder 3" className="img-fluid" />
        </div>
        <div className="col-md-4">
          <img src="https://via.placeholder.com/300" alt="Placeholder 4" className="img-fluid" />
        </div>
        <div className="col-md-4">
          <img src="https://via.placeholder.com/300" alt="Placeholder 5" className="img-fluid" />
        </div>
        <div className="col-md-4">
          <img src="https://via.placeholder.com/300" alt="Placeholder 6" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default ImageGrid;
