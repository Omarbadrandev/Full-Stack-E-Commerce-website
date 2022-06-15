//  create a nosql style simple in-memory database
interface Database<T, K> {
  get(id: K): T;
  set(id: K, value: T): void;
}

// persistable means that you can read and write your state from a string
interface Persistable {
  saveToString(): string;
  restoreFromString(storedState: string): void;
}

type DBKeyType = string | number | symbol;

// RECORD:
// Constructs an object type whose property keys are Keys and whose property values are Type.
// This utility can be used to map the properties of a type to another type.

class InMemoryDatabase<T, K extends DBKeyType> implements Database<T, K> {
  protected db: Record<K, T> = {} as Record<K, T>;
  get(id: K): T {
    return this.db[id];
  }
  set(id: K, value: T): void {
    this.db[id] = value;
  }
}
class PersistentMemoryDB<T, K extends DBKeyType>
  extends InMemoryDatabase<T, K>
  implements Persistable
{
  saveToString(): string {
    return JSON.stringify(this.db);
  }
  restoreFromString(storedState: string): void {
    this.db = JSON.parse(storedState);
  }
}

const myDB = new PersistentMemoryDB<number, string>();

// set value with a setter
myDB.set("foo", 22);
console.log(myDB.get("foo"));
const saved = myDB.saveToString();
myDB.set("foo", 23);
console.log("test", myDB.get("foo"));

const myDB2 = new PersistentMemoryDB<number, string>();
myDB2.restoreFromString(saved);
console.log(myDB2.get("foo"));
