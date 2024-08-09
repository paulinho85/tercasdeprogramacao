const { elevarDigitosAoQuadrado } = require('../../src/potentao/potentao');
const assert = require('node:assert');

describe('Potentão', () => {

    describe('#elevarDigitosAoQuadrado', () => {

        it('Deve elevar os números quando forem positivos', () => {
            const novoNumero = elevarDigitosAoQuadrado(325);
            assert.strictEqual(novoNumero, 9425 );
            
        });
        
        it('Deve retornar zero se a entrada for zero', () => {
            const novoNumero = elevarDigitosAoQuadrado(0);
            assert.strictEqual(novoNumero, 0 );
        });

        it('Deve retornar zero se o número for negativo', () => {
            const novoNumero = elevarDigitosAoQuadrado(-1);
            assert.strictEqual(novoNumero, 0 );
        });


    });
    
});