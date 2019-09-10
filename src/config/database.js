/* Credenciais para acessar o banco de dados */
module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gobarber',
  define: {
    timestamps: true, // gera automaticamente as datas de edição e criação
    underscored: true, // define que irá utilizar o padrão de tabelas e colunas usando underlines
    underscoredAll: true, // underscore nas colunas
  },
};
