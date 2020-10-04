
async function ContentFetch(){
  const response  = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
  
  return response.json();

}

export default ContentFetch;