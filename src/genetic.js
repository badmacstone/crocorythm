/**
 * Calculates the best gene by iterating `generationsCount` times with a gene count of `populationSize`
 * each with a chance of `mutationChance` (15% by default) to mutate. The `fitness` is used to compare 2 individuals.
 *
 * @param {Number}   generationsCount The amount of different generations.
 * @param {Number}   populationSize   The amount of individuals in each generation.
 * @param {Number}   mutationChance   The chance by which an individual will mutate.
 * @param {Function} fitness          A function which calculates a numeric value to compare 2 individuals.
 * @param {Function} gene             A function which creates a gene.
 *
 * @return {{generation}} Object with methods to run through the algorithm.
 */
const Genetic = ({ generationsCount, populationSize, mutationChance = .15, fitness, gene }) => {
    /**
     * Creates a generation by filling it with new genes.
     * This is a recursive function. Each call a new gene is added to the generation.
     *
     * @param {Array} generation The generation. It's is extended by 1 gene each time the function is called.
     */
    function createGeneration(generation = []) {
        generation.push(gene());

        if (generation.length < populationSize) createGeneration(generation);
        return generation;
    }

    return { generation: createGeneration() };
};

export default Genetic;