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

type FetchPokemonResult<T> = T extends undefined
  ? Promise<PokemonResults>
  : void;

function fetchPokemon<T extends undefined | ((data: PokemonResults) => void)>(
  url: string,
  cb?: T
): FetchPokemonResult<T> {
  if (cb) {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => cb(data as PokemonResults));
    return undefined as FetchPokemonResult<T>;
  } else {
    return fetch(url).then((resp) => resp.json()) as FetchPokemonResult<T>;
  }
}

//  the promised version

(async function () {
  //  the Data can either be a void or pokemon => which leads to coerce this to being a pokemon results
  //  negative issue is that the promise variant of this actually has to do this coersion thats a bit messy
  //  the enhanced version using the functional overloading can be found in conditionals-redone.ts file
  const data = <PokemonResults>(
    await fetchPokemon("https://pokeapi.co/api/v2/pokemon?limit=10")
  );
  data.results.forEach((pokemon) => console.log(pokemon.name));
})();
