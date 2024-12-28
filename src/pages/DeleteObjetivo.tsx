import React from 'react';
import { useParams } from 'react-router-dom';

const DeleteObjetivo = () => {
  const { id } = useParams(); // Extrai o ID da URL

  return (
    <div>
      <h1>Delete Objetivo</h1>
      <p>Delete Objetivo with ID: {id}</p>
    </div>
  );
};

export default DeleteObjetivo;
