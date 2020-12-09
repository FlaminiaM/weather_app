import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/SearchBar';
import Card from '../../components/Card/Card'
import './App.css';
import axios from "axios";
import React, {useEffect, Component} from 'react';

class App extends Component {

  state = {
    cityInput: "",
    temperature: null,
    description: "",
    loading:true,
  }

  searchBarHandler = (e) => {
    console.log(e.target.value)
    this.setState({
      searchBarInput: e.target.value
    })
  }

  fetchWeather = () => {
    console.log("in fetchweather")
    const city = this.state.searchBarInput;
    const API_KEY = '99077f054cdb0cc60cb2ae7d9dbd7a6b';
    const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
    const URL = API_URL + `?q=${city}&appid=${API_KEY}&units=metric`;
  
    fetch(URL)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      // // If city exists, update weather details
      if(data.cod === 200) {
        this.setState({
          temperature: data.main.temp,
          description: data.weather[0].main,
          loading: false
        });
      } else {
      //   // If city doesn't exist, throw error
         throw data.cod
       }
    })
    .catch(err => {
      console.log(err);
      this.setState({
        loading: false,
        error: true
      });
    });
  }
  
  render() {
    let cardContent = null;
    if (!this.state.loading){
      cardContent = <Card hasLoaded={true} description={this.state.description} temperature={this.state.temperature}/>
    } else{
      cardContent = <Card hasLoaded={false}/>
    }
    return (
      <div className="App">
          <Header />
          <SearchBar onClickHandler={this.fetchWeather} value={this.state.searchBarInput} onChangeHandler={this.searchBarHandler} />
          {cardContent}
          <Footer />
      </div>
    );
  }  
}

export default App;
