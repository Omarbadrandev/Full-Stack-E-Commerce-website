//  mixins in Typescript
function myLogFunction() {
  return (str: string) => {
    console.log(str);
  };
}
const logger = myLogFunction();
logger("your string");
//functions creating a class
function createLoggerClass() {
  return class MyLoggerClass {
    private completeLog: string = "";
    log(str: string) {
      console.log(str);
      this.completeLog += str + "\n";
    }
    dumpLog() {
      return this.completeLog;
    }
  };
}

const myLogger = createLoggerClass();
//  instantiate
const logger2 = new myLogger();
logger2.log("foo");
console.log(logger2.dumpLog());

function CreateSimpleMemoryDatabase<T>() {
  return class SimpleMemoryDatabase {
    // RECORD:
    // Constructs an object type whose property keys are Keys and whose property values are Type.
    // This utility can be used to map the properties of a type to another type.
    private db: Record<string, T> = {};
    //  Setter: to set the value
    set(id: string, value: T) {
      this.db[id] = value;
    }
    //  Getter: to get a value
    get(id: string): T {
      return this.db[id];
    }
    // to get all the stuff in the data base
    getObject(): object {
      return this.db;
    }
  };
}

const StringDatabase = CreateSimpleMemoryDatabase<string>();

//  because of the simple memory database generic
//  defining string as a data type will automatically show that the value type is going to be a string
//  and the generic is going to copy through to all of these setters and getters

const sbd1 = new StringDatabase();
sbd1.set("a", "hello");

//  the definition of what a constructor creates is defined by the output of its constructor
//  T is the output or a result of the new

type Constructor<T> = new (...args: any[]) => T;

//  Creating a mixin
//  Dumpable function takes as input this base, and the base is of type T and t must extend a constructor

function Dumpable<
  T extends Constructor<{
    getObject(): object;
  }>
>(Base: T) {
  return class Dumpable extends Base {
    dump() {
      console.log(this.getObject());
    }
  };
}

// Passing string database to pass the getObject() funtion to the Dumpable function

const DumpableStringDatabase = Dumpable(StringDatabase);
const sbd2 = new DumpableStringDatabase();
sbd2.set("jack", "hello Jack");
sbd2.dump();
