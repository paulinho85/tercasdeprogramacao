const { verificaNarcisista } = require('../../src/narcisista/narcisista');
const assert = require('node:assert');


describe('Narcisista', () => {

    describe('#verificaNarcisista', () => {

        it('Validar um número que não é narcisista', () => {
            // Arrange
            const numero = 111

            // Act
            const resultadoDaAnalise = verificaNarcisista(numero);
            
            // Assert
            assert.strictEqual(resultadoDaAnalise, 'não narcisista')
            
        });

        it('Validar um número que é narcisista', () => {
            // Arrange
            const numero = 407

            // Act
            const resultadoDaAnalise = verificaNarcisista(numero);
            
            // Assert
            assert.strictEqual(resultadoDaAnalise, 'narcisista');
        });

        it('Validar que zero é narcisista', () => {
            // Arrange
            const numero = 0

            // Act
            const resultadoDaAnalise = verificaNarcisista(numero);
            
            // Assert
            assert.strictEqual(resultadoDaAnalise, 'narcisista');            
        });

        it('Validar que um número negativo não é narcisista', () => {
            // Arrange
            const numero = -567

            // Act
            const resultadoDaAnalise = verificaNarcisista(numero);
            
            // Assert
            assert.strictEqual(resultadoDaAnalise, 'não narcisista');
            
        });

        
    })
    
});