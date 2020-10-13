import React from "react";
import "./App.css";
import Header from "./components/Header";
import WorldMap from './components/Map';
import MeteoriteList from "./components/MeteoriteList";

class App extends React.Component {
  state = {
    meteorites: [],
  };
  componentDidMount() {
    fetch("https://data.nasa.gov/resource/gh4g-9sfh.json?$limit=10")
      .then((res) => {
        return res.json();
      })
      .then((items) => {
        this.setState({ meteorites: items });
      });
  }
  render() {
    return (
      <div className="App">
        <Header />
        <WorldMap />
        <MeteoriteList meteorites={this.state.meteorites} />
      </div>
    );
  }
}

export default App;
