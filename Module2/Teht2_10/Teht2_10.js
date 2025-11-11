// Write a voting program as described below for small-scale meeting use. (8p)
// The program asks for the number of candidates.
// Then the program asks for the names of the candidates: Name for candidate 1
// Store the candidates names and initial vote count in objects like this:
// The program asks for the number of voters.
// The program asks each voter in turn who they will vote for. Voter should enter candidate name.
// If the voter enters an empty value instead of the voting number, it will be interpreted as an empty vote.
// The program announces the name of the winner and the results by printing it to the console:

'use strict';

const number_candidates = parseInt(prompt("How many candidates?"));
const candidates = [];

for (let i = 0; i < number_candidates; i++) {
    const name = prompt(`Give name for the ${i + 1} candidate.`);
    const candidate = {
        name: name,
        votes: 0
    };
    candidates.push(candidate);
}

const number_voters = parseInt(prompt("How many voters?"));

for (let i = 0; i < number_voters; i++) {
    const vote = prompt('Who do you vote for? Give the name. Give empty value if you do not vote.')
    if (vote !== "") {
        const vote_candidate = candidates.find(({ name }) => name === vote);
        vote_candidate.votes++;
    }
}

candidates.sort((a, b) => {
    console.log(a, b);
    return b.votes - a.votes;
});

console.log(`The winner is ${candidates[0].name} with ${candidates[0].votes} votes!`);
console.log("Other candidates results:");

for (let i = 1; i < number_candidates; i++) {
    console.log(`${candidates[i].name}: ${candidates[i].votes} votes.`);
}

