// Function to fetch data from pokeAPI urls
export async function fetchData(url) {
  const response = await fetch(url);
  var data = await response.json();
  return data;
}
