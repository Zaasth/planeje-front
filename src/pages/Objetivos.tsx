import React from 'react';
import { mockObjetivos } from '../data/mockData';
import { Plus, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const Objetivos = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Objetivos Financeiros</h1>
      </div>

      


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className=" bg-emerald-600 rounded-lg shadow-md p-6 flex justify-center items-center hover:bg-emerald-700 transition-colors">
          <button className="flex items-center gap-2 text-white px-4 py-6 rounded-lg  text-lg">
            <Plus size={20} />
            Criar Objetivo
          </button>
        </div>

        {mockObjetivos.map((objetivo) => {
          const progress = (objetivo.valorAtual / objetivo.valorObjetivo) * 100;
          
          return (
            <div key={objetivo.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Target className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold">{objetivo.nome}</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Progresso</span>
                    <span className="font-medium">{progress.toFixed(2)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-purple-600 h-2 rounded-full"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Valor Atual</span>
                  <span className="font-medium">{objetivo.valorAtual.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Objetivo</span>
                  <span className="font-medium">{objetivo.valorObjetivo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Prazo Final</span>
                  <span className="font-medium">{objetivo.prazoFinal}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Categoria</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                    {objetivo.categoria}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Opções</span>
                  <span className="font-medium flex items-center space-x-4">
                    <Link to={`/objetivos/edit/${objetivo.id}`} className="flex items-center">
                      <svg className="feather feather-edit" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                      </svg>
                    </Link>
                    <Link to={`/objetivos/delete/${objetivo.id}`} className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" height="25" viewBox="0 0 24 24">
                        <path d="M 10 2 L 9 3 L 3 3 L 3 5 L 21 5 L 21 3 L 15 3 L 14 2 L 10 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z"></path>
                      </svg>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Objetivos;