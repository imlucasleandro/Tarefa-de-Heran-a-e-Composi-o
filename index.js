class Funcionario {
    #matricula;
    #nome;
    #cpf;
    #dataNascimento;
    #salario;
  
    constructor(matricula, nome, cpf, dataNascimento, salario) {
      this.#matricula = matricula;
      this.#nome = nome;
      this.#cpf = cpf;
      this.#dataNascimento = dataNascimento;
      this.#salario = salario;
    }
  
    calculaSalario() {
      return this.#salario;
    }
  }
  
  class Curriculo {
    #formacao;
    #experiencia;
    #referencias;
  
    constructor(formacao, experiencia, referencias) {
      this.#formacao = formacao;
      this.#experiencia = experiencia;
      this.#referencias = referencias;
    }
  }
  
  class Programador extends Funcionario {
    #especialidade;
  
    constructor(matricula, nome, cpf, dataNascimento, salario, especialidade) {
      super(matricula, nome, cpf, dataNascimento, salario);
      this.#especialidade = especialidade;
    }
  }
  
  class Gerente extends Funcionario {
    #comissao;
  
    constructor(matricula, nome, cpf, dataNascimento, salario, comissao) {
      super(matricula, nome, cpf, dataNascimento, salario);
      this.#comissao = comissao;
    }
  
    calculaSalario() {
      return super.calculaSalario() + this.#comissao;
    }
  }
  
  
  const programador = new Programador('123', 'João', '123.456.789-00', new Date('1990-01-01'), 5000, 'Desenvolvimento');
  console.log(programador.calculaSalario());
  
  const gerente = new Gerente('456', 'Maria', '987.654.321-00', new Date('1985-05-15'), 8000, 2000);
  console.log(gerente.calculaSalario());
  