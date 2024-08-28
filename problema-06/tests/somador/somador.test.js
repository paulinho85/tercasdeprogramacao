const { somarNumeros } = require("../../src/somador/somador");
const assert = require('node:assert');

describe('Somador', () => {
    describe('#somadorNumeros', () => {
        it('Somar variação entre inteiros e strings', () => {            
            const numeros = [1, '2', 3, '4']
            const resultadoDaSoma = somarNumeros(numeros);
            assert.strictEqual(resultadoDaSoma, 10);
        });

        it('Somar números que são strings', () => {
            const numeros = ['2', '4']
            const resultadoDaSoma = somarNumeros(numeros);
            assert.strictEqual(resultadoDaSoma, 6);
        });

        it('Somar apenas números', () => {
            const numeros = [3, 5, 99]
            const resultadoDaSoma = somarNumeros(numeros);
            assert.strictEqual(resultadoDaSoma, 107);
        });

        it('Não calcular valores não numéricos', () => {
            const numeros = ['a', 'y', '*', 1, '5']
            const resultadoDaSoma = somarNumeros(numeros);
            assert.strictEqual(resultadoDaSoma, 6);
        });

        it('Ignorar strings vazias', () => {
            const numeros = ['', 1, '5']
            const resultadoDaSoma = somarNumeros(numeros);
            assert.strictEqual(resultadoDaSoma, 6);
        });

    });
});
