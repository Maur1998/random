export const getImages = async () => {
  const api_key = "K1u1fZa1zOczm4BXoY84swx7UAsyhyxo";
  const url = `https://api.giphy.com/v1/gifs/search?q=ronaldinho&api_key=${api_key}&limit=8`;
  const response = await fetch(url);
  const data = await response.json();

  //console.log(data.data);
  return data.data;
};
