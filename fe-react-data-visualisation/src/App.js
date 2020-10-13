import React from "react";
import "./App.css";
import Header from "./components/Header";
import WorldMap from './components/Map';
import MeteoriteList from "./components/MeteoriteList";

class App extends React.Component {
  state = {
    meteorites: [],
    selectedMeteor: {}
  };

  setSelectedMeteor=(lat, long) => {
    this.setState({selectedMeteor: {lat,long}})
  }

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
        <WorldMap lat={this.state.selectedMeteor.lat} long={this.state.selectedMeteor.long}/>
        <MeteoriteList meteorites={this.state.meteorites} setSelectedMeteor={this.setSelectedMeteor} />
        
      </div>
    );
  }
}

export default App;
