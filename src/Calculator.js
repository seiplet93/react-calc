import React, { Component } from "react";

export default class Calculator extends Component {
  state = {
    num1: 0,
    num2: 0,
    sum: 0,
  };
  setNum = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  addF = (e) => {
    e.preventDefault();
    const number1 = parseInt(this.state.num1);
    const number2 = parseInt(this.state.num2);
    this.setState((previousState, currentProps) => {
      return {
        sum: number1 + number2,
      };
    });
  };
  render() {
    return (
      <>
        <div className="caclulator">
          <h1>Add with React!</h1>

          <form>
            <input
              type="number"
              name="num1"
              value={this.state.num1}
              onChange={this.setNum}
            />
            <span>+</span>
            <input
              type="number"
              name="num2"
              value={this.state.num2}
              onChange={this.setNum}
            />
            <button onClick={this.addF} type="submit">
              =
            </button>
            <h3>{this.state.sum}</h3>
          </form>
        </div>
      </>
    );
  }
}
