function calcularDespesasSalario(pessoas, faturamentoMensal) {
    let valorAPagar = 0;
    for (pessoa of pessoas){
        valorAPagar += pessoa.salario;
        if (faturamentoMensal > 100000.00){
            valorAPagar += pessoa.salario * (pessoa.bonus / 100);
        };
    };
    return valorAPagar;
};

module.exports = { calcularDespesasSalario };