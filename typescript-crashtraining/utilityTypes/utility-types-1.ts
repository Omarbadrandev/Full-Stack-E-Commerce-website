interface MyUser {
  name: string;
  id: number;
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
      id: 2,
      email: "omarBadranm93@hotmail.com"
    },
    { email: "omarBadranm293@hotmail.com" }
  )
);
type RequiredMyUser = Required<MyUser>;
type JustEmailAndName = Pick<MyUser, "email" | "name">;

type UserWithoutId = Omit<MyUser, "id">;

// Constructs an object type whose property keys are Keys and whose property values are Type.
// This utility can be used to map the properties of a type to another type.
const mapById = (users: MyUser[]): Record<MyUser["id"], UserWithoutId> => {
  return users.reduce((accomulator, v) => {
    const { id, ...other } = v;
    return {
      ...accomulator,
      [id]: other
    };
  }, {});
};

console.log(
  mapById([
    { id: 1, name: "Mr.Foo" },
    { id: 2, name: "BAZ" }
  ])
);
