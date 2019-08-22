/* Record
 ************************/

// Use for a key:value store
export interface Equipment {
  id: string;
  name: string;
  armor: number;
}

export class Inventory {
  items: Record<string, Equipment> = {};
}

const tunic = {
  id: '1',
  name: 'tunic',
  armor: 2,
};

const shield = {
  id: '2',
  name: 'sheild',
  armor: 20,
};

const playerInventory = new Inventory();
playerInventory.items = {
  1: tunic,
  2: shield,
}

Object.keys(playerInventory.items).forEach(itemKey => {
  console.log(playerInventory.items[itemKey]);
});


/* Async
 ************************/

const partySize: number = 5;
const question: string = 'Which way would you like to proceed?';
const potentialResponses: string[] = [
  'left',
  'right',
  'straight ahead',
];

// Doesn't handle ties
function maxCount(counts: Record<string, number>): string {
  let max: number = 0;
  let maxValue: string = null;

  Object.keys(counts).forEach(value => {
    const count = counts[value];
    if (count > max) {
      max = count;
      maxValue = value;
    }
  });

  return maxValue;
}

// The Promise type requires the "lib" option of "es2015" or later (see tsconfig.json)
function gatherInput(responseDelayMilliseconds: number, potentialResponses: string[]): Promise<string> {
  return new Promise<string>(resolve => {
    setTimeout(() => {
      resolve(potentialResponses[Math.floor(Math.random() * potentialResponses.length)]);
    }, responseDelayMilliseconds);
  });
}

// NOTE: an async function will implicitly return a promise
async function presentChoice(partySize: number, question: string, potentialResponses: string[]): Promise<void> {
  console.log(question);

  const votes: Record<string, number> = {};

  for (let i = 0; i < partySize; i++) {
    // NOTE: convertion from Promise<string> to string handled by await
    const response: string = await gatherInput(500, potentialResponses);
    votes[response] = votes.hasOwnProperty(response) ? votes[response] + 1 : 1;
    console.log(response);
  }

  const winningVote = maxCount(votes);
  console.log(`${winningVote} it is!`);
}

presentChoice(partySize, question, potentialResponses);
// NOTE: because presentChoice is async it will not block execution of the rest
// of the code
console.log("I'm logged before all votes are cast!");
