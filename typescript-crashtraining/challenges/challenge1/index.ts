import houses from "./houses.json";

interface House {
  name: string;
  //union types
  planets: string | string[];
}
interface HouseWithId extends House {
  id: number;
}

function findHouses(
  input: House[] | string,
  filter?: (house: House) => boolean
): HouseWithId[] {
  const houses: House[] = typeof input === "string" ? JSON.parse(input) : input;
  return (filter ? houses.filter(filter) : houses).map((house) => ({
    id: houses.indexOf(house),
    ...house
  }));
}

console.log(
  findHouses(JSON.stringify(houses), ({ name }) => name === "Atreides")
);

console.log(findHouses(houses, ({ name }) => name === "Harkonnen"));
