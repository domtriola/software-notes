/*
 * Vanilla
 ****************************************/
function hello(someone) {
  return `hello ${someone.firstName} ${someone.lastName}`;
}

const cat = {
  firstName: 'Mr.',
  lastName: 'Meow',
};

console.log(hello(cat));
// hello Mr. Meow

/*
 * TypeScript
 ****************************************/
interface Someone {
  firstName: string;
  lastName: string;
}

function helloTyped(someone: Someone) {
  return `hello ${someone.firstName} ${someone.lastName}`;
}

const catB = {
  firstName: 'Mr.',
  lastName: 'Meow',
};

console.log(helloTyped(catB));
// hello Mr. Meow

class Cat {
  fullName: string;

  constructor(public firstName: string, public middleName: string, public lastName: string) {
    this.fullName = `${firstName} ${middleName} ${lastName}`;
  }
}

const catC = new Cat('Mr.', 'Meow', 'Meow');

// Still works, because 'Cat' conforms to 'Someone' interface
console.log(helloTyped(catC));
// hello Mr. Meow
