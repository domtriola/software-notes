/* Generics
 ************************/

// Generics let you accept any type without losing the information about what
// that type is. Ex:

// any doesn't tell us anything about what the returned type is
function echoAny(input: any): any {
  console.log(input);
  return input;
}

// T captures the type by inference (or explicitly if provided to function call)
function echoT<T>(input: T): T {
  console.log(input);
  return input;
};

// We can then create non-generic methods by creating a generic interface and
// specifying types:
interface EchoFn<T> {
  (arg: T): T;
}

// Use echoT like a function generator:
const echoNumber: EchoFn<number> = echoT;

echoNumber(1);
// This won't compile:
// echoNumber('2');
