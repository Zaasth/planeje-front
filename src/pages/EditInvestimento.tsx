import React from 'react';
import { useParams } from 'react-router-dom';

const EditInvestimento = () => {
  const { id } = useParams(); // Extrai o ID da URL

  return (
    <div>
      <h1>Edit Investimento</h1>
      <p>Editing Investimento with ID: {id}</p>
    </div>
  );
};

export default EditInvestimento;
