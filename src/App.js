// src/App.js
import React, { useState } from 'react';
import Nav from './app/Module/Nav/nav';
import Grid from './app/Module/Grid/grid';

function App() {
  const [productos, setProductos] = useState([
    { id: 1, nombre: 'De Tomaso P72', descripcion: 'El De Tomaso P72 es un superdeportivo de edición limitada presentado en 2019 para conmemorar el 60 aniversario de la marca italiana De Tomaso. Inspirado en los autos de carreras de los años 60, combina un diseño retro con tecnología moderna. Su chasis está basado en el Apollo Intensa Emozione y su motor es un V8 sobrealimentado que entrega una gran potencia. El P72 destaca por su lujo y atención a los detalles, con un interior de alta calidad y un enfoque en la experiencia de conducción clásica, evocando la era dorada del automovilismo.', img:'https://d3hrnetf5izp16.cloudfront.net/optimized/4X/8/5/d/85d9bd4bf1757d222df3d9f2621a495220a8f648_2_1035x471.jpeg', datos: '@2019 Italia'},
    { id: 2, nombre: 'Jaguar E-Type', descripcion: 'El 1966 Jaguar E-Type es un icónico auto deportivo de la Serie 1, famoso por su diseño elegante y aerodinámico, considerado uno de los más bellos de la historia. Equipado con un motor de 6 cilindros en línea de 4.2 litros y frenos de disco, alcanzaba una velocidad máxima de 240 km/h. Su combinación de rendimiento, tecnología avanzada y lujo lo convirtió en un símbolo de los años 60, admirado tanto por su estética como por su ingeniería innovadora.', img:'https://d3hrnetf5izp16.cloudfront.net/optimized/4X/4/d/a/4da362399e157aadb4489f4c0b11795f2b99a0a9_2_1035x517.jpeg', datos: '@1966 Gran bretaña'},
    { id: 3, nombre: 'Jaguar C-X75', descripcion: 'El Jaguar C-X75 de 2013 es un superdeportivo híbrido conceptual que combina un diseño futurista con tecnología avanzada. Equipado con un sistema híbrido enchufable, cuenta con un motor de 4 cilindros y varios motores eléctricos, alcanzando una potencia combinada de más de 850 caballos. El C-X75 puede acelerar de 0 a 100 km/h en menos de 3 segundos y alcanzar velocidades superiores a los 350 km/h. Aunque originalmente planeado para producción, el proyecto fue cancelado, pero sigue siendo un ejemplo del enfoque de Jaguar hacia la innovación y la sostenibilidad en el mundo de los superdeportivos.', img:'https://d3hrnetf5izp16.cloudfront.net/original/4X/3/0/5/305b4104d886bc07c6558ec1ac3fe8ea5ff67fae.jpeg', datos: '@2013 Reino Unido'},
    { id: 4, nombre: 'Alfa Romeo 33 Stradale', descripcion: 'El Alfa Romeo 33 Stradale de 1967 es un legendario superdeportivo italiano, considerado uno de los más bellos de la historia del automóvil. Basado en el auto de carreras Tipo 33, es un vehículo de edición limitada, con solo 18 unidades fabricadas. Está equipado con un motor V8 de 2.0 litros, que produce 230 caballos de fuerza, permitiéndole alcanzar una velocidad máxima de 260 km/h. Su diseño es obra de Franco Scaglione, y combina elegancia con un rendimiento de alto nivel, haciendo del 33 Stradale un ícono tanto en la ingeniería como en el diseño automovilístico.', img:'https://d3hrnetf5izp16.cloudfront.net/original/4X/2/5/b/25b35386436e6405f11ada89ec7329f149ca9ded.jpeg', datos: '@1967 Italia'},
    { id: 5, nombre: 'Alfa Romeo 33 Stradale', descripcion: 'El Alfa Romeo 33 Stradale 2024 es un elegante deportivo de lujo que rinde homenaje al icónico 33 Stradale de 1967. Con un diseño moderno y agresivo, el 33 Stradale combina una estética aerodinámica con tecnología avanzada. Su motor V6 biturbo ofrece un rendimiento excepcional, complementado por una suspensión de alta gama y un interior lujoso. La carrocería ligera y los componentes de fibra de carbono aseguran una experiencia de conducción ágil y emocionante. Es un vehículo que fusiona el legado histórico de Alfa Romeo con la innovación actual en automóviles deportivos.', img:'https://d3hrnetf5izp16.cloudfront.net/optimized/4X/3/1/0/310caa08c90d53f80c9d691f494ffcffae4ba78d_2_1035x586.jpeg', datos: '@2024 Italia'},
    { id: 6, nombre: 'Mercedes-Benz 300 S', descripcion: 'El Mercedes-Benz 300 S de 1953 es un lujoso automóvil de la posguerra, reconocido por su elegancia y alto rendimiento. Equipado con un motor de 3.0 litros y 6 cilindros en línea, el 300 S ofrece una experiencia de conducción potente y suave. Su diseño cuenta con una carrocería de dos puertas, líneas elegantes y detalles cromados, reflejando el refinamiento de la época. El interior está diseñado con materiales de alta calidad y un alto nivel de artesanía. Este modelo es apreciado por su exclusividad y es considerado un clásico entre los automóviles de colección.', img:'https://www.classicdriver.com/cdn-cgi/image/format=auto,fit=cover,width=1920,height=1029/sites/default/files/users/31662/cars_images/feed_296524/f13998bd6d205810529d0445cc97dbdd.jpeg', datos: '@1951 Alemania'}
  ]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
      setSearchQuery(query);
  };

  const filteredProductos = productos.filter(producto =>
      producto.nombre.toLowerCase().includes(searchQuery.toLowerCase()) ||
      producto.descripcion.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
      <div className="App">
          <Nav onSearch={handleSearch} />
          <Grid productos={filteredProductos} />
      </div>
  );
}

export default App;