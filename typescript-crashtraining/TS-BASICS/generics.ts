//  it starts off as initial unknown and changes the type based on the value passed to it
//  for example:  i type (1) which is number
//  TypeScript Generics is a tool which provides a way to create reusable components.
function simpleState<T>(initial: T): [() => T, (v: T) => void] {
  let str: T = initial;
  return [
    () => str,
    (v: T) => {
      str = v;
    }
  ];
}
const [st1getter, st1setter] = simpleState<number | null>(10);
console.log(st1getter());
st1setter(36);
console.log(st1getter());

interface Rank<RankItem> {
  item: RankItem;
  rank: number;
}

function ranker<RankItem>(
  items: RankItem[],
  rank: (v: RankItem) => number
): RankItem[] {
  const ranks: Rank<RankItem>[] = items.map((item) => ({
    item,
    rank: rank(item)
  }));
  ranks.sort((a, b) => a.rank - b.rank);
  return ranks.map((rank) => rank.item);
}

interface Pokemon {
  name: string;
  hp: number;
}

const pokemon: Pokemon[] = [
  {
    name: "Bulbasaur",
    hp: 20
  },
  {
    name: "Megasaur",
    hp: 5
  }
];

const ranks = ranker(pokemon, ({ hp }) => hp);
console.log(ranks);
