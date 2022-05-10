import React, { Component } from "react";
import "./card-list.css";
import Card from "../card/Card";

export default class CardList extends Component {
  render() {
    console.log("render from component");
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <Card key={monster.id} monster={monster} />;
        })}
      </div>
    );
  }
}
