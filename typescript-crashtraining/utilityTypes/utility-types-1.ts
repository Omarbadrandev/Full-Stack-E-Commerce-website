interface MyUser {
  name: string;
  id: string;
  email?: string;
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
