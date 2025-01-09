import { Transacoes, Investimentos, ObjetivosFinanceiros } from '../types';

export const mockTransacoes: Transacoes[] = [
  {
    id: '1',
    tipo: 'Renda',
    valor: 9000,
    categoria: 'salário',
    data: '01/03/2024',
    dataVencimento: '',
    descricao: 'Salário mensal',
    recorrente: true,
  },
  {
    id: '2',
    tipo: 'Despesa',
    valor: 1500,
    categoria: 'Aluguel',
    data: '02/03/2024',
    dataVencimento: '05/04/2024',
    descricao: 'Aluguel casa',
    recorrente: true,
  },
  
];

export const mockInvestimentos: Investimentos[] = [
  {
    id: '1',
    nome: 'Bitcoin',
    valorInicial: 10000,
    valorAtual: 20000,
    tipo: 'Cripto',
    dataInicio: '01/02/2024'
  },
  {
    id: '2',
    nome: 'HLG11',
    valorInicial: 25000,
    valorAtual: 80000,
    tipo: 'Fundo imobiliário',
    dataInicio: '01/02/2024'
  },
  {
    id: '3',
    nome: 'MXRF11',
    valorInicial: 10000,
    valorAtual: 9586,
    tipo: 'Fundo imobiliário',
    dataInicio: '01/02/2024'
  },
  {
    id: '4',
    nome: 'Tigrinho',
    valorInicial: 90000,
    valorAtual: -90000,
    tipo: 'Apostas',
    dataInicio: '01/02/2024'
  },
];

export const mockObjetivos: ObjetivosFinanceiros[] = [
  {
    id: '1',
    nome: 'Fundo de emergência',
    valorObjetivo: 15000,
    valorAtual: 10000,
    prazoFinal: '31/12/2024',
    categoria: 'Poupança'
  },
  {
    id: '2',
    nome: 'Entrada da casa',
    valorObjetivo: 50000,
    valorAtual: 20000,
    prazoFinal: '30/06/2025',
    categoria: 'Imobiliária'
  },
];