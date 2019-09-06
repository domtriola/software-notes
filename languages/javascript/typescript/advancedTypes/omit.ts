/* Omit
 ************************/

// Use Pick to select certain keys from an existing interface
// Use Omit to select all but certain keys from an existing interface

export interface Item {
  id: string;
  name: string;
  owner: string;
  cost: number;
  durability: number;
}

// With Pick
export type ItemTransaction = Pick<Item, 'id' | 'name' | 'owner' | 'cost'>;

// Omit from Pick + Exclude
export type VerboseExclusiveItemTransaction = Pick<Item, Exclude<keyof Item, 'durability'>>

// With Omit
export type ExclusiveItemTransaction = Omit<Item, 'durability'>;

const item = {
  id: '1',
  name: "Thor's Hammer",
  owner: 'Thor',
  cost: 9999999999999,
  durability: 9999999999999,
}

const itemToPurchase = {
  id: item.id,
  name: item.name,
  owner: item.owner,
  cost: item.cost,
};

function buyWithPick(item: ItemTransaction) {
  console.log(item);
}
function buyWithVerboseOmit(item: VerboseExclusiveItemTransaction) {
  console.log(item);
}
function buyWithOmit(item: ExclusiveItemTransaction) {
  console.log(item);
}

buyWithPick(itemToPurchase);
buyWithVerboseOmit(itemToPurchase);
buyWithOmit(itemToPurchase);
