export const getImages = async (searchValue) => {
  const api_key = "K1u1fZa1zOczm4BXoY84swx7UAsyhyxo";
  const url = `https://api.giphy.com/v1/gifs/search?q=${searchValue}&api_key=${api_key}&limit=8`;
  const response = await fetch(url);
  const data = await response.json();

  return data.data;
};
