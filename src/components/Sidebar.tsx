import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { LayoutDashboard, DollarSign, LineChart, Target, PiggyBank, CircleUserRound, LogOut } from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { path: '/', icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
    { path: '/transacoes', icon: <DollarSign size={20} />, label: 'Transações' },
    { path: '/investimentos', icon: <LineChart size={20} />, label: 'Investimentos' },
    { path: '/objetivos', icon: <Target size={20} />, label: 'Objetivos' },
    { path: '/relatorios', icon: <PiggyBank size={20} />, label: 'Relatorios' },
    { path: '/account', icon: <CircleUserRound  size={20} />, label: 'Minha Conta' },
  ];

  const navItems2 = [
    { path: '/deslogar', icon: <LogOut size={20} />, label: 'Deslogar' },
  ];


  return (
    <div className="bg-gray-900 text-white w-64 min-h-screen p-4">
      <div className="flex items-center gap-2 mb-8">
        <DollarSign size={24} className="text-emerald-400" />
        <Link to={'/'}><h1 className="text-xl font-bold">Planeje+ <span className='text-xs'>v0.0.1</span></h1></Link>
      </div>
      <nav>
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-emerald-600 text-white'
                  : 'text-gray-300 hover:bg-gray-800'
              }`
            }
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
      <nav>
        <hr />
      </nav>
      <nav className='mt-44'>
        {navItems2.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-emerald-600 text-white'
                  : 'text-gray-300 hover:bg-gray-800'
              }`
            }
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;