export default function FilmInfo({ director, year, filmStudio }) {
  return (
    <>
      <div>
        <h3>Режисер: {director}</h3>
        <h3>Рік випуску: {year}</h3>
        <h3>Кіностудія: {filmStudio}</h3>
      </div>
    </>
  );
}
