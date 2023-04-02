import { Component } from "react";
import './main.scss';

class Main extends Component {
    constructor(props) {
      super(props);
      this.state = {
        city: '',
        components: '',
        airQualityLevel: ''
      }  
    }

    

    onChangeValue = (e) => {
        this.setState({
            city: e.target.value
        })
    }

    onSubmit = async (e) => {
        e.preventDefault();
        let city = this.state.city;
        let response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=8721d7d2dcb86748b2395c4ff7b1a3cf`);
            let jsonData = await response.json();
            let data = {
                name: jsonData[0].name,
                lat: jsonData[0].lat,
                lon: jsonData[0].lon 
            }
            let lat = jsonData[0].lat;
            let lon = jsonData[0].lon;
            this.setState({
                city: data.name
            })
            response = await fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=8721d7d2dcb86748b2395c4ff7b1a3cf`);
            jsonData = await response.json();

            this.setState({
                /* city: '', */
                components: jsonData.list[0].components,
                airQualityLevel: jsonData.list[0].main.aqi
            })
    }

    render() {

        let nameCity = this.state.city;
        let components = this.state.components;
        let airQualityLevel = this.state.airQualityLevel;
        let description = '';
        let cards = [];

        for (let [key, value] of Object.entries(components)) {
            cards.push(<div className="main__card">
            <div className="main__card__title">{key}</div>
            <div className="main__card__value">{value}</div>
            </div>);
        }

        if (airQualityLevel === 1) {
            description = <div className="main__response">
            <p className="main__response-txt">The level of air quality in {nameCity} is </p> <p className="main__response-txt">{airQualityLevel}.</p> <p className="main__response-txt">It's mean the level of air quality is good. Composition of air:</p>
        </div>
        } 
        if (airQualityLevel === 2) {
            description = <div className="main__response">
            <p className="main__response-txt">The level of air quality in {nameCity} is </p> <p className="main__response-txt">{airQualityLevel}.</p> <p className="main__response-txt">It's mean the level of air quality is fair. Composition of air:</p>
        </div>
        }
        if (airQualityLevel === 3) {
            description = <div className="main__response">
            <p className="main__response-txt">The level of air quality in {nameCity} is </p> <p className="main__response-txt">{airQualityLevel}.</p> <p className="main__response-txt">It's mean the level of air quality is moderate. Composition of air:</p>
        </div>
        }
        if (airQualityLevel === 4) {
            description = <div className="main__response">
            <p className="main__response-txt">The level of air quality in {nameCity} is </p> <p className="main__response-txt">{airQualityLevel}.</p> <p className="main__response-txt">It's mean the level of air quality is poor. Composition of air:</p>
        </div>
        }
        if (airQualityLevel === 5) {
            description = <div className="main__response">
            <p className="main__response-txt">The level of air quality in {nameCity} is </p> <p className="main__response-txt">{airQualityLevel}.</p> <p className="main__response-txt">It's mean the level of air quality is very poor. Composition of air:</p>
        </div>
        }
        
        return(
            <section className="main">
                <form onSubmit={this.onSubmit} className="main__form">
                    <input onChange={this.onChangeValue} className="main-inp" type="text" value= {this.state.city}></input>
                    <button className="submit-btn" type="submit">Check your city</button>
                </form>
                {description}
                <div className="main__cards">
                    {cards}
                </div>
        </section>
        )
    }
    
}

export default Main;