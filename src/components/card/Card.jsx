import React, { Component } from "react";
import "./card.css";

export default class Card extends Component {
  render() {
    const { id, name, email } = this.props.monster;
    return (
      <div className="card">
        <img src={`https://robohash.org/${id}?set=set2`} alt={`${name} Monster`} />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}
