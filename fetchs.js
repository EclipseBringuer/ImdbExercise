const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "bb897cbccfmsh7db248c56d51af4p11cb75jsn1b6bdcd719b2",
    "X-RapidAPI-Host": "moviesminidatabase.p.rapidapi.com",
  },
};

async function getSeriesByName(name) {
  const url = `https://moviesminidatabase.p.rapidapi.com/series/idbyTitle/${name}/`;

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }
    const data = await response.json();
    console.log(
      `El número de series de Dragon Ball son ${data.results.length}\n`
    );
  } catch (error) {
    console.log(error);
  }
}

async function getPoster(id_number) {
  const url = `https://moviesminidatabase.p.rapidapi.com/series/id/${id_number}/`;

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(`URL del poster: ${result.results.image_url}\n`);
  } catch (error) {
    console.error(error);
  }
}

async function getArgumentAndTitle(episodeNumber, series_id, season) {
  const url = `https://moviesminidatabase.p.rapidapi.com/series/id/${series_id}/season/${season}/episode/${episodeNumber}/`;

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    const title = result.results.title;
    const argument = result.results.description;

    console.log(`El titulo del episodio es : ${title}\n`);
    console.log(`El argumento del episodio es el siguiente: ${argument}\n`);
  } catch (error) {
    console.error(error);
  }
}

async function getZodiacAndBornPlace(actor_id) {
  const url = `https://moviesminidatabase.p.rapidapi.com/actor/id/${actor_id}/`;

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    const bornPlace = result.results.birth_place;
    const zodiac = result.results.star_sign;

    console.log(`El lugar de nacimiento es: ${bornPlace}\n`);
    console.log(`El signo del zodiaco del actor es: ${zodiac}\n`);
  } catch (error) {
    console.error(error);
  }
}

async function getFilmsByYear(year) {
  const url = `https://moviesminidatabase.p.rapidapi.com/movie/byYear/${year}/`;

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    const films = result.results.length;

    console.log(`El numero de peliculas del año ${year} es ${films}\n`);
  } catch (error) {
    console.error(error);
  }
}

async function getPoltergeistInfo(peli_id) {
  const url = `https://moviesminidatabase.p.rapidapi.com/movie/id/${peli_id}/awards/`;

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    if (Array.isArray(result.results)) var nomination;
    var award;
    result.results.forEach((element) => {
      if (element.award_name === "Oscar") {
        nomination = element.award;
      }
      if (element.type === "Winner") {
        award = element.award_name;
      }
    });
    console.log(`Fue nominada en los oscar a: ${nomination}\n`);
    console.log(`Gano el premio: ${award}\n`);
  } catch (error) {
    console.log(error);
  }
}

getSeriesByName("Dragon Ball");
getPoster("tt0280249");
getArgumentAndTitle(1, "tt0280249", 3);
getZodiacAndBornPlace("nm0154226");
getFilmsByYear("1982");
getPoltergeistInfo("tt0084516");