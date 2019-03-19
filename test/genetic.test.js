import Genetic from '../src/genetic'

test('createGeneration', () => {
    const gene = jest.fn();

    const genetic = Genetic({ populationSize: 10, gene });

    expect(genetic.generation.length).toBe(10);
});