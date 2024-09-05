const {calcularDespesasSalario } = require('../../src/despesas/despesas');
const assert = require('node:assert');

describe('Despesas', () => {
    describe('#calcularDespesas', () => {
        it('Calcula despesas com salário de mais que uma pessoa com bônus e faturamento maior que 100 mil', () => {
            const pessoas = [
                { nome: 'J', salario: 1000, bonus: 10 },
                { nome: 'H', salario: 500, bonus: 20 },
            ];
            const faturamentoMensal = 100000.01;        
            const totalAPagar = calcularDespesasSalario(pessoas, faturamentoMensal);
            assert.deepStrictEqual(totalAPagar, 1700);            
        });

        it('Calcula despesas com salário de uma pessoa com bônus e faturamento maior que 100 mil', () => {
            const pessoas = [
                { nome: 'J', salario: 1000, bonus: 10 }                
            ];
            const faturamentoMensal = 100000.01;        
            const totalAPagar = calcularDespesasSalario(pessoas, faturamentoMensal);
            assert.deepStrictEqual(totalAPagar, 1100);            
        });

        it('Calcula despesas com salário de nenhuma pessoa e faturamento maior que 100 mil', () => {
            const pessoas = [];
            const faturamentoMensal = 100000.01;        
            const totalAPagar = calcularDespesasSalario(pessoas, faturamentoMensal);
            assert.deepStrictEqual(totalAPagar, 0);            
        });

        it('Calcula despesas com salário de mais que uma pessoa sem bônus e faturamento menor que 100 mil', () => {
            const pessoas = [
                { nome: 'J', salario: 1000, bonus: 10 },
                { nome: 'H', salario: 500, bonus: 20 },
            ];
            const faturamentoMensal = 99999.99;        
            const totalAPagar = calcularDespesasSalario(pessoas, faturamentoMensal);
            assert.deepStrictEqual(totalAPagar, 1500);            
        });

        it('Calcula despesas com salário de uma pessoa sem bônus e faturamento menor que 100 mil', () => {
            const pessoas = [
                { nome: 'J', salario: 1000, bonus: 10 }                
            ];
            const faturamentoMensal = 99999.99;        
            const totalAPagar = calcularDespesasSalario(pessoas, faturamentoMensal);
            assert.deepStrictEqual(totalAPagar, 1000);            
        });

        it('Calcula despesas com salário de nenhuma pessoa e faturamento menor que 100 mil', () => {
            const pessoas = [];
            const faturamentoMensal = 99999.99;        
            const totalAPagar = calcularDespesasSalario(pessoas, faturamentoMensal);
            assert.deepStrictEqual(totalAPagar, 0);            
        });

        it('Calcula despesas com salário de mais que uma pessoa sem bônus e faturamento igual a 100 mil', () => {
            const pessoas = [
                { nome: 'J', salario: 1000, bonus: 10 },
                { nome: 'H', salario: 500, bonus: 20 },
            ];
            const faturamentoMensal = 100000.00;        
            const totalAPagar = calcularDespesasSalario(pessoas, faturamentoMensal);
            assert.deepStrictEqual(totalAPagar, 1500);            
        });
                
        it('Calcula despesas com salário de uma pessoa com bônus 0% e faturamento maior que 100 mil', () => {
            const pessoas = [
                { nome: 'J', salario: 1000, bonus: 0 }                
            ];
            const faturamentoMensal = 100000.01;        
            const totalAPagar = calcularDespesasSalario(pessoas, faturamentoMensal);
            assert.deepStrictEqual(totalAPagar, 1000);            
        });
    });
    
});