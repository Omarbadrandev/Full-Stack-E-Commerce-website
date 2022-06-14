interface MyUser {
  name: string;
  id: string;
  email?: string;
  phone?: string;
}

//Partial Makes all user interface values optional
type MyUserOptionals = Partial<MyUser>;

const merge = (user: MyUser, overrides: MyUserOptionals): MyUser => {
  return {
    ...user,
    ...overrides
  };
};

console.log(
  merge(
    {
      name: "omar",
      id: "4567",
      email: "omarBadranm93@hotmail.com"
    },
    { email: "omarBadranm293@hotmail.com" }
  )
);
type RequiredMyUser = Required<MyUser>;
type JustEmailAndName = Pick<MyUser, "email" | "name">;

// Constructs an object type whose property keys are Keys and whose property values are Type.
// This utility can be used to map the properties of a type to another type.
const mapById = (users: MyUser[]): Record<string, MyUser> => {
  return users.reduce((accomulator, v) => {
    return {
      ...accomulator,
      [v.id]: v
    };
  }, {});
};

console.log(
  mapById([
    { id: "foo", name: "Mr.Foo" },
    { id: "baz", name: "BAZ" }
  ])
);
