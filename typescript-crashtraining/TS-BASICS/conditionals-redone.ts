import fetch from "node-fetch";

interface PokemonResults {
  count: number;
  next?: string;
  previous?: string;
  results: {
    name: string;
    url: string;
  }[];
}


function fetchPokemon(url: string, cb: (data: PokemonResults) => void): void;
//interface Proimse Represents the completion of an asynchronous operation
function fetchPokemon(url: string): Promise<PokemonResults>;
function fetchPokemon(
  url: string,
  cb?: (data: PokemonResults) => void
): unknown {
  if (cb) {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => cb(data));
    return undefined;
  } else {
    return fetch(url).then((resp) => resp.json());
  }
}

//  callback version
//  fetchPokemon("https://pokeapi.co/api/v2/pokemon?limit=10", (data) => {
//   data.results.forEach((pokemon) => console.log(pokemon.name));
//  });

//  the promise based version
(async function () {
  const data = await fetchPokemon("https://pokeapi.co/api/v2/pokemon?limit=10");
  data.results.forEach((pokemon) => console.log(pokemon.name));
})();
