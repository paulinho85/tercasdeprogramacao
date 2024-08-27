const { calculaIdadePets } = require("../../src/idadepet/idadepet");
const assert = require("node:assert");

describe('Idade Pet', () => {
    describe('#calculaIdadePets', () => {
        it('Quantidade de anos igual a 0, não retorna idades', () => {
            const quantidadeDeAnos = 0;
            const pets = calculaIdadePets(quantidadeDeAnos);
            assert.deepEqual(pets, {});
        });

        it('Validar que 1 ano do cachorro e gato valem 15 anos humanos', () => {
            const quantidadeDeAnos = 1;
            const pets = calculaIdadePets(quantidadeDeAnos);
            assert.deepEqual(pets, {
                cachorro: 15,
                gato: 15
            });
        });

        it('Validar que 2 anos do cachorro e gato valem 9 anos humnanos que devem ser somados ao primeiro ano humano', () => {            
            const quantidadeDeAnos = 2;
            const pets = calculaIdadePets(quantidadeDeAnos);
            assert.deepEqual(pets, {
                cachorro: 24,
                gato: 24
            });
        });

        it('Validar que apóso 2º ano, o ano do cachorro vale 5 anos equanto os do gato valem 4 anos', () => {
            const quantidadeDeAnos = 10;
            const pets = calculaIdadePets(quantidadeDeAnos);
            assert.deepEqual(pets, {
                cachorro: 64,
                gato: 56
            });
        });        
    })
});
