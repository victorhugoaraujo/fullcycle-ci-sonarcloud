const soma = require("./soma"); // importa a função soma

describe("Teste da função soma", () => {
  test("A soma de 1 e 2 deve ser 3", () => {
    expect(soma(1, 2)).toBe(3);
  });

  test("A soma de -1 e 1 deve ser 0", () => {
    expect(soma(-1, 1)).toBe(0);
  });

  test("A soma de 0 e 0 deve ser 0", () => {
    expect(soma(0, 0)).toBe(0);
  });
});
