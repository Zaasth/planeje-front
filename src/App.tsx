import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Transacoes from './pages/Transacoes.tsx';
import Investimentos from './pages/Investimentos.tsx';
import Objetivos from './pages/Objetivos.tsx';
import Relatorios from './pages/Relatorios.tsx';
import EditTransacao from './pages/EditTransacao .tsx';
import DeleteTransacao from './pages/DeleteTransacao.tsx';
import EditInvestimento from './pages/EditInvestimento.tsx';
import DeleteInvestimento from './pages/DeleteInvestimento.tsx';
import EditObjetivo from './pages/EditObjetivo.tsx';
import DeleteObjetivo from './pages/DeleteObjetivo.tsx';
import { MyAccount } from './pages/MyAccount.tsx';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/transacoes" element={<Transacoes />} />
            <Route path="/investimentos" element={<Investimentos />} />
            <Route path="/objetivos" element={<Objetivos />} />
            <Route path="/relatorios" element={<Relatorios />} />
            <Route path="/account" element={<MyAccount />} />
            <Route path="/transacoes/edit/:id" element={<EditTransacao/>} />
            <Route path="/transacoes/delete/:id" element={<DeleteTransacao/>} />
            <Route path="/investimentos/edit/:id" element={<EditInvestimento/>} />
            <Route path="/investimentos/delete/:id" element={<DeleteInvestimento/>} />
            <Route path="/objetivos/edit/:id" element={<EditObjetivo/>} />
            <Route path="/objetivos/delete/:id" element={<DeleteObjetivo/>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;