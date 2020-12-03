import React, { Component } from "react"

class Calculator extends Component {
    state = {
        solution: null,
        num1: 0,
        num2: 0,
    }

    setNum = (e, num) => {
        this.setState({ [num]: e.target.value })
    }

    setSolution = (e) => {
        let solution = parseInt(this.state.num1) + parseInt(this.state.num2)
        console.log(solution)
        this.setState({
            solution: solution,
        })
    }

    render() {
        return (
            <div className="container">
                <h1>Add with React!</h1>

                <div className="add">
                    <input
                        type="number"
                        name="num1"
                        placeholder="Enter your first number"
                        value={this.state.num1}
                        onChange={(e) => this.setNum(e, "num1")}
                    />
                    <span>+</span>
                    <input
                        type="number"
                        name="num2"
                        placeholder="Enter your first number"
                        value={this.state.num2}
                        onChange={(e) => this.setNum(e, "num2")}
                    />
                    <button onClick={(e) => this.setSolution(e)}>=</button>
                    <h3>{this.state.solution}</h3>
                </div>
            </div>
        )
    }
}

export default Calculator
