import React from 'react';
import tecnologias from '@/app/data/tecnologias.json';

export default function Page() {
  return (
    <div>
      <h1>Tecnologias</h1>
      <ul>
        {tecnologias.tecnologias.map((tech, index) => (
          <li key={index}>
            <h2>{tech.title}</h2>
            <img src={tech.image} alt={tech.title} style={{ width: '100px', height: '100px' }} />
            <p>{tech.description}</p>
            <p>Rating: {tech.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
