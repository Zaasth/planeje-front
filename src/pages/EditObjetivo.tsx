import React from 'react';
import { useParams } from 'react-router-dom';

const EditObjetivo = () => {
  const { id } = useParams(); // Extrai o ID da URL

  return (
    <div>
      <h1>Edit Objetivo</h1>
      <p>Editing Objetivo with ID: {id}</p>
    </div>
  );
};

export default EditObjetivo;
