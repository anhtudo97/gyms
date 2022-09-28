export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '6dd37d17a2mshbca81c624695532p1378f5jsnc0b05de95bcb',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '6dd37d17a2mshbca81c624695532p1378f5jsnc0b05de95bcb',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
