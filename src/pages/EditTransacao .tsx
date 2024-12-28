import React from 'react';
import { useParams } from 'react-router-dom';

const EditTransacao = () => {
  const { id } = useParams(); // Extrai o ID da URL

  return (
    <div>
      <h1>Edit Transacao</h1>
      <p>Editing Transacao with ID: {id}</p>
    </div>
  );
};

export default EditTransacao;
