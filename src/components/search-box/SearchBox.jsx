import { Component } from "react";
import "./search-box.css";

export default class SearchBox extends Component {
  render() {
    const { onChangeHandler } = this.props;
    return <input className="search-box" type="search" placeholder="Search a Monster" onChange={onChangeHandler} />;
  }
}
