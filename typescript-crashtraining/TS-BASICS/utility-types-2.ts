type Name = {
  first: string;
  last: string;
};

function addFullName(name: Name): Name & {
  fullName: string;
} {
  return {
    ...name,
    fullName: `${name.first} ${name.last}`
  };
}

// T must extend a function because T alone does not satisfy the constraint of being a function
// any function can be defined as any arguments comming to it producing any results and thats the most generic version of a function.
function permuteRows<T extends (...args: any[]) => any>(
  iteratorFunc: T,
  // thats gives an array of that incomming data
  // thats why it should be the Parameters of that type
  data: Parameters<T>[0][]
): ReturnType<T>[] {
  // iterating over data
  return data.map(iteratorFunc);
}

console.log(
  permuteRows(addFullName, [
    {
      first: "jack",
      last: "herrington"
    }
  ])
);

class PersonWithFullName {
  constructor(public name: Name) {}

  get fullName() {
    return `${this.name.first} ${this.name.last}`;
  }
}

// a function that creates objects if you give it person with full name
// given the data that comes as an input
function createObjects<T extends new (...args: any[]) => any>(
  ObjectType: T,
  data: ConstructorParameters<T>[0][]
): InstanceType<T>[] {
  // each item will instantiate an object type on that item
  return data.map((item) => new ObjectType(item));
}

console.log(
  createObjects(PersonWithFullName, [
    {
      first: "LG",
      last: "herrington"
    }
  ]).map((obj) => obj.fullName)
);
