import React from 'react';
import DashboardChart from '../components/DashboardChart';
import { Wallet, TrendingUp, Target } from 'lucide-react';
import { mockTransacoes, mockInvestimentos, mockObjetivos } from '../data/mockData';

const Dashboard = () => {
  const totalIncome = mockTransacoes
    .filter(t => t.tipo === 'Renda')
    .reduce((sum, t) => sum + t.valor, 0);
  
  const totalInvestments = mockInvestimentos
    .reduce((sum, inv) => sum + inv.valorAtual, 0);
  
  const totalGoalsProgress = mockObjetivos
    .reduce((sum, objetivo) => sum + (objetivo.valorAtual / objetivo.valorObjetivo) * 100, 0) / mockObjetivos.length;

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Dashboard Financeiro</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-emerald-100 rounded-full">
              <Wallet className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Renda Total</p>
              <p className="text-2xl font-bold text-gray-800">{totalIncome.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-100 rounded-full">
              <TrendingUp className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Investimentos Totais</p>
              <p className="text-2xl font-bold text-gray-800">{totalInvestments.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-100 rounded-full">
              <Target className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Progressão Dos Objetivos</p>
              <p className="text-2xl font-bold text-gray-800">{totalGoalsProgress.toFixed(2)}%</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DashboardChart />
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Transações recentes</h2>
          <div className="space-y-4">
            {mockTransacoes.slice(0, 5).map(transaction => (
              <div key={transaction.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-800">{transaction.categoria}</p>
                  <p className="text-sm text-gray-600">{transaction.data}</p>
                </div>
                <p className={`font-semibold ${
                  transaction.tipo === 'Renda' ? 'text-emerald-600' : 'text-red-600'
                }`}>
                  {transaction.tipo === 'Despesa' ? '-' : '+'}${transaction.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;