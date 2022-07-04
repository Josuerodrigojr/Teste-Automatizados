// primeira coisa importar o index
const index = require('../index');

// describe: é a descrição do conteúdo que será testado

describe('Aplicando os testes em index.JS', () => {
  // iniciando os testes

  test('Aplicar a função de soma e obter 15', () => {
    const result = index.soma(10,5);
    // dentro do expect eu coloco meu objeto que será inspecionado an comparação
    expect(result).toEqual(15);
  });

  test('Aplicar a função de divisão e obter 5', () => {
    const result = index.divisão(10,2);
    expect(result).toEqual(5)
  });

  test('Aplicar a função de divisão e e obter que não é permitido dividir por 0', () => {
    const result = index.divisão(10,0);
    expect(result).toEqual('Não é possível dividir por 0')
  });


  // CONSTRUIR Substração, MULTIPLICACAO 

  test('Aplicar a função de multiplicação e obter 20', () => {
    const result = index.multiplicar(2,5);
    expect(result).toEqual(10)
  });

  test('Aplicar a função de subtrair e 50', () => {
    const result = index.subtracao(100,50);
    expect(result).toEqual(50)
  });

})