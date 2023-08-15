import React from "react";
export default class ShakespeareInfo extends React.Component {
  render() {
    return (
      <>
        <h1>
          {" "}
          Вільям Шекспір
          <br />
          William Shakespeare
        </h1>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/William_Shakespeare_by_John_Taylor.jpg/245px-William_Shakespeare_by_John_Taylor.jpg" />
        <p>Прізвисько: The Bard of Avon</p>
        <p>Народився: 23 квітня 1564р.,</p>
        <p>Помер: 23 квітня (3 травня) 1616</p>
        <p>Країна: Королівство Англія</p>
        <p>Діяльність: драматург, поет, актор</p>
      </>
    );
  }
}
