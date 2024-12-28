import React from 'react';
import { useParams } from 'react-router-dom';

const DeleteInvestimento = () => {
  const { id } = useParams(); // Extrai o ID da URL

  return (
    <div>
      <h1>Delete Investimento</h1>
      <p>Delete Investimento with ID: {id}</p>
    </div>
  );
};

export default DeleteInvestimento;
