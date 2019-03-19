import { Crocorythm } from '../src';

/**
 * This is an integration test for the complete Crcorythm algorithm.
 * The scenario is a 30000 meters long track with a random elevation profile.
 * The task is to drive with a vehicle along this track using only 3 possible drive modes: Accelerate, keep speed, none.
 * The goal is to find the least amount of energy consumption while have in average at least a speed of 14 km/h.
 * To keep the calculation time on a realistic level the vehicle can only change the speed 30 times.
 */

const TRACK_LENGTH = 30000;
const DISCREDITATION_LEVEL = 30;

const randomElevationTrack = function() {
    let elevationTrack = [];
    let lastHeight = 0;

    for (let i=0; i<TRACK_LENGTH; i++) {
        lastHeight += i % 10 === 0 ? Math.random() < 0.5 ? -10 : 10 : 0;
        lastHeight += i % 50 === 0 ? Math.random() < 0.5 ? -20 : 20 : 0;
        elevationTrack.push({ distance: i, height: lastHeight });
    }

    return elevationTrack;
}();

/**
 * Calculates the energy consumption of an individual discreditation.
 * @param {[Number]} discreditation Array of numbers each representing a distance point on the track.
 * @return {number}
 */
const calculateEnergyConsumption = discreditation => {
    // use randomElevationTrack()
    return 0;
};

/**
 * Creates an individual random discreditation
 * @param {[{ distance, height }]}elevationTrack
 * @return {[Number]}
 */
const randomDiscreditation = elevationTrack => {
    let discreditation = [0];

    for (let i = 1; discreditation.length < DISCREDITATION_LEVEL; i++) {
        const min = discreditation[i - 1] + 1;
        const max = TRACK_LENGTH - (DISCREDITATION_LEVEL - i);
        const next = Math.floor(Math.random() * (max - min + 1) + min);
        discreditation.push(next);
    }

    discreditation.push(TRACK_LENGTH);

    return discreditation;
};

test('Integration test', () => {
    const crocorythm = Crocorythm({
        generationsCount: 50,
        populationSize: 10,
        mutationChance: .15,
        fitness: calculateEnergyConsumption,
        gene: randomDiscreditation
    });

    expect(crocorythm.generation.length).toBe(10);
    expect(crocorythm.generation[0]).not.toBeNaN();
});