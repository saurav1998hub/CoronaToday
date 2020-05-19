import React from "react";
import Axios from "axios";
import "./styles.css";

export default class App extends React.Component{
    state = {
        confirmed:0,
        recovered:0,
        deaths:0,

    }
    componentDidMount(){
        this.getData();
    }
    async getData() {
        const res=await Axios.get("https://covid19.mathdro.id/api");
        this.setState({
            confirmed:res.data.confirmed.value,
            recovered:res.data.recovered.value,
            deaths:res.data.deaths.value,

        });
    }
    render(){
        return(<div class="container">
        <div class="card2">
          <h3>CORONA CASES REGISTERED SO FAR:</h3>
    <h1>{this.state.confirmed}</h1>
          <p>worldwide</p>
          <button class="but2" type="button" name="button">Countrywise</button>
        </div>
        <div class="card1">
          <h3>CORONA CASES RECOVERED SO FAR:</h3>
    <h1>{this.state.recovered}</h1>
          <p>worldwide</p>
          <button  class="but1" type="button" name="button">Countrywise</button>
        </div>
        <div class="card0">
          <h3>TOTAL DEATHS DUE TO CORONA SO FAR:</h3>
    <h1>{this.state.deaths}</h1>
          <p>worldwide</p>
          <button  class="but3" type="button" name="button">Countrywise</button>
        </div>
      </div>);
    }
}
