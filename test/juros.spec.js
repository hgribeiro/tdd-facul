// import chai from "chai";
const chai = require("chai");
const juros = require("../src/juros");

const expect = chai.expect;

describe("Juros de acordo com o número de dias", () => {
  it("Paga-se 5% de juros até 30 dias de atraso.", () => {
    expect(juros.calcularJuros(100, 25)).to.equal(105);
  });
  it("Paga-se 5% de juros em 30 dias de atraso.", () => {
    expect(juros.calcularJuros(100, 30)).to.equal(105);
  });
  it("Paga-se 10% de juros em 31 dias de atraso.", () => {
    expect(juros.calcularJuros(100, 31)).to.equal(110);
  });
  it("Paga-se 10% de juros de 31 até 60 dias de atraso.", () => {
    expect(juros.calcularJuros(100, 40)).to.equal(110);
  });
  it("Paga-se 10% de juros em 60 dias de atraso.", () => {
    expect(juros.calcularJuros(100, 60)).to.equal(110);
  });
  it("Paga-se 15% de juros a partir de 61 dias de atraso.", () => {
    expect(juros.calcularJuros(100, 61)).to.equal(115);
  });
  it("Paga-se 15% de juros 100 dias de atraso.", () => {
    expect(juros.calcularJuros(100, 100)).to.equal(115);
  });
});
