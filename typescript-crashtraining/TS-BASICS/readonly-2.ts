//read only
class Doggy {
  constructor(public readonly name: string, public readonly age: number) {}
}

const lgg = new Doggy("LG", 13);
console.log(lgg.name);
console.log(lgg.age);

//statics
class DogList {
  private doggies: Doggy[] = [];
  //  The static keyword defines a static method or property for a class, or a class static initialization block.
  //  Neither static methods nor static properties can be called on instances of the class.
  //  Instead, they're called on the class itself.
  static instance: DogList = new DogList();

  private constructor() {}

  static addDog(dog: Doggy) {
    DogList.instance.doggies.push(dog);
  }

  getDogs() {
    return this.doggies;
  }
}

DogList.addDog(lgg);

console.log(DogList.instance.getDogs());

// a new doglist cannot be created since the the constructor of the class is private
// const dl = new DogList();
