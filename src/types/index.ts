export interface Transacoes {
  id: string;
  tipo: 'Renda' | 'Despesa';
  valor: number;
  categoria: string;
  data: string;
  descricao: string;
  recorrente: boolean;
}

export interface Investimentos {
  id: string;
  nome: string;
  valorInicial: number;
  valorAtual: number;
  tipo: string;
  dataInicio: string;
}

export interface ObjetivosFinanceiros {
  id: string;
  nome: string;
  valorObjetivo: number;
  valorAtual: number;
  prazoFinal: string;
  categoria: string;
}