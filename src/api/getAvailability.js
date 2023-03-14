import axios from "axios";

const getAvailability = async (id) => {
  const options = {
    method: "GET",
    url: `https://streamlinewatch-streaming-guide.p.rapidapi.com/movies/${id}`,
    params: { platform: "web", region: "US" },
    headers: {
        'X-RapidAPI-Key': 'c983d9995cmsh665e48585b2072cp1ca59fjsnc3aea4b84627',
        'X-RapidAPI-Host': 'streamlinewatch-streaming-guide.p.rapidapi.com'
      }
  };
  return axios
    .request(options)
    .then(function (response) {
      const result = response.data;
      return result;
    })
    .catch(function (error) {
      console.error(error);
    });
};

export default getAvailability;
