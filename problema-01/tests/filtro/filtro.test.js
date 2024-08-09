const {retornaListaSemString} = require('../../src/filtro/filtro')
const assert = require('node:assert')

describe('Filtro', () => {
    describe('#retornaListaSemString', () => {
        it('Recebe uma lista com números e strings e retorna uma lista de números', () => {
            const listaDeEntrada = ['1', 2, 8, 'papi', 9, 12]; 
            const listaDeSaida = retornaListaSemString(listaDeEntrada);
            assert.deepEqual(listaDeSaida, [2, 8, 9, 12]);

        });

        it('Recebe uma lista com strings e retorna uma lista vazia', () => {
            const listaDeEntrada = ['maria', 'helena', 'ata', '5'];
            const listaDeSaida = retornaListaSemString(listaDeEntrada);
            assert.deepEqual(listaDeSaida, []);
            
        });

        it('Recebe uma lista com números e retorna uma lista de números', () => {
            const listaDeEntrada = [3, 21, 23, 28]
            const listaDeSaida = retornaListaSemString(listaDeEntrada)
            assert.deepEqual(listaDeSaida, listaDeEntrada)
        });

        it('Recebe uma lista vazia e retorna uma lista vazia', () => {
            const listaDeEntrada = []
            const listaDeSaida = retornaListaSemString(listaDeEntrada)
            assert.deepEqual(listaDeSaida, [])
        });


    
    });

    
});