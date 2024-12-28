import React from 'react';
import { useParams } from 'react-router-dom';

const DeleteTransacao = () => {
  const { id } = useParams(); // Extrai o ID da URL

  return (
    <div>
      <h1>Delete Transacao</h1>
      <p>Delete Transacao with ID: {id}</p>
    </div>
  );
};

export default DeleteTransacao;
