import Poster from "./Poster";
import Title from "./Title";
import FilmInfo from "./FilmInfo";

export default function Task2() {
  return (
    <>
      <Poster path="https://upload.wikimedia.org/wikipedia/uk/1/18/I_Am_Legend_%28ukr_poster%29.jpg" />
      <Title title="Я — легенда" />
      <FilmInfo
        director="Френсіс Лоуренс"
        year={2007}
        filmStudio="Original Film"
      />
    </>
  );
}
