function calcularJuros(valor, diasAtrasados) {
  if (diasAtrasados <= 30) return valor + valor * 0.05;
  if (diasAtrasados >= 61) return valor + valor * 0.15;
  if (31 <= diasAtrasados <= 60) return valor + valor * 0.1;
}

module.exports.calcularJuros = calcularJuros;
