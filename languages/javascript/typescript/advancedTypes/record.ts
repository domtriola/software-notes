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
