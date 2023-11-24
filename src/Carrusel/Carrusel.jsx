
import React from 'react';
import './Carrusel.css'; // Importa el archivo CSS de estilos
import { Carousel } from 'react-bootstrap';

function Slider() {
  return (
    <div className="container">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../../src/assets/img/slider1.webp"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../../src/assets/img/slider6.jpeg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../../src/assets/img/slider3.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../../src/assets/img/slider7.jpg"
            alt="Fourth slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;

// Carrusel.jsx
