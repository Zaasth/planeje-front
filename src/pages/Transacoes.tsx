import React, { useState } from 'react';
import { mockTransacoes } from '../data/mockData';
import { Plus, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import Switch from '@mui/material/Switch';

const Transacoes = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Transações</h1>
        <button className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
          <Plus size={20} />
          Adicionar Transação
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Buscar transação..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
            <option value="all">Tudo</option>
            <option value="income">Renda</option>
            <option value="expense">Despesa</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4">Data</th>
                <th className="text-left py-3 px-4">Descrição</th>
                <th className="text-left py-3 px-4">Categoria</th>
                <th className="text-right py-3 px-4">Valor</th>
                <th className="text-left py-3 px-4">Tipo</th>
                <th className="text-left py-3 px-4">Recorrente</th>
                <th className="text-left py-3 px-4">Pago</th>
                <th className="text-left py-3 px-4">Data Validade</th>
                <th className="text-left py-3 px-4">Opções</th>
              </tr>
            </thead>
            <tbody>
              {mockTransacoes.map((transaction) => (
                <tr key={transaction.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4">{transaction.data}</td>
                  <td className="py-3 px-4">{transaction.descricao}</td>
                  <td className="py-3 px-4">{transaction.categoria}</td>
                  <td className="py-3 px-4 text-right font-medium">
                    <span className={transaction.tipo === 'Renda' ? 'text-emerald-600' : 'text-red-600'}>
                      {transaction.tipo === 'Renda' ? '+' : '-'}${transaction.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      transaction.tipo === 'Renda'
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {transaction.tipo}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      transaction.recorrente === true
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {transaction.recorrente === true ? 'Sim' : 'Não'}
                    </span>
                  </td>
                  <td>
                    <Switch defaultChecked />
                  </td>
                  <td className="py-3 px-4">
                    <span className="font-medium flex items-center space-x-4">
                  
                      <Link to={`/transacoes/edit/${transaction.id}`} className="flex items-center">
                        <svg className="feather feather-edit" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                        </svg>
                      </Link>

                      <Link to={`/transacoes/delete/${transaction.id}`} className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" height="25" viewBox="0 0 24 24">
                          <path d="M 10 2 L 9 3 L 3 3 L 3 5 L 21 5 L 21 3 L 15 3 L 14 2 L 10 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z"></path>
                        </svg>
                      </Link>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Transacoes;