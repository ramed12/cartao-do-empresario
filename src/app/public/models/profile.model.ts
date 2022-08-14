export interface Profile {
  nome: string;
  cpf: string;
  email: string;
  celular: string;
  dataNascimento: string;
  endereco: string;
  bairro: string;
  cidade: string;
  uf: string;
  cep: string;
  complemento: string;
  cardUrl: string;
  empresa: {
    razaoSocial: string;
    nomeFantasia: string;
    cnpj: string;
  };
  categoria: {
    codigo: string;
    descricao: string;
  };
  situacao: {
    codigo: string;
    descricao: string;
  };
}
