// import React from 'react';
// import { Sky } from '@react-three/drei';

// const SkyBackground = () => {
//   return (
//     <Sky
//       sunPosition={[-0.065, 0.025, -0.1]} // Coloca el sol debajo del horizonte
//       inclination={0.2} // Ajusta la inclinación para simular la puesta del sol
//       azimuth={180} // Ajusta el ángulo azimutal para cambiar la dirección de la luz
//       mieCoefficient={0.48} // Ajusta la dispersión atmosférica
//       elevation={-0.07} // Ajusta la elevación del sol
//       mieDirectionalG={0.20} // Ajusta el brillo del sol
//       rayleigh={0.095} // Ajusta la dispersión de Rayleigh
//       turbidity={-0.048} // Ajusta la claridad del cielo
//       exposure={-1.7} // Ajusta la exposición del cielo
//     />
//   );
// };

// export default SkyBackground;

import React from 'react';
import { Sky } from '@react-three/drei';

const SkyBackground = (props) => {
  return (
    <Sky
      distance={550000} // Define la distancia del cielo
      sunPosition={[-0.065, 0.025, -0.1]} // Coloca el sol en una posición alta en el cielo
      inclination={0.2} // Ajusta la inclinación para simular la puesta del sol
      azimuth={180} // Ajusta el ángulo azimutal para cambiar la dirección de la luz
      mieCoefficient={0.48} // Ajusta la dispersión de Mie
      mieDirectionalG={0.3} // Ajusta el brillo del sol
      rayleigh={0.095} // Ajusta la dispersión de Rayleigh
      turbidity={-0.048} // Ajusta la cantidad de partículas en el aire
      {...props}
    />
  );
};

export default SkyBackground;