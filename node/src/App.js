import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actions: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8000/actions")
      .then(response => {
        this.setState({ actions: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <div>
          {this.state.actions.map(action => {
            return (
              <div>
                {action.project_id} {action.description} {action.notes}
                {action.completed}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
