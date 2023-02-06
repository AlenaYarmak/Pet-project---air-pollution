import { Component } from "react";

class Main extends Component {
    constructor(props) {
      super(props);
      this.state = {
        city: '',
        components: ''
      }  
    }

    onChangeValue = (e) => {
        this.setState({
            city: e.target.value
        })
    }

    onSubmit = async (e) => {
        e.preventDefault();
        let city = 'London';
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
            data = jsonData.list[0].components;
            this.setState({
                components: data
            })

            return data;
    }

    render() {

        let {city} = this.state;
        let components = this.state.components;
        let cards = [];

        for (let [key, value] of Object.entries(components)) {
            cards.push(<div class="main__card">
            <div class="main__card__title">{key}</div>
            <div class="main__card__value">{value}</div>
            <div class="main__card__text"></div></div>);
        }
        console.log(cards);
        
        return(
            <section class="main">
                <form onSubmit={this.onSubmit} class="main__form">
                    <input onChange={this.onChangeValue} class="main-inp" type="text"></input>
                    <button class="submit-btn" type="submit">Check your city</button>
                </form>
                <div class="main__response">
                    <p class="main__response-txt">The level of air quality</p> <p class="main__response-txt">2.</p> <p class="main__response-txt">It's mean the level of air quality is normal. Composition of air:</p>
                </div>
                <div class="main__cards">
                    {cards}
                    {/* <div class="main__card">
                        <div class="main__card__title">CO</div>
                        <div class="main__card__value">243.66</div>
                        <div class="main__card__text"></div>
                    </div>
                    <div class="main__card">
                        <div class="main__card__title">NH3</div>
                        <div class="main__card__value">0.9</div>
                        <div class="main__card__text"></div>
                    </div>
                    <div class="main__card">
                        <div class="main__card__title">NO</div>
                        <div class="main__card__value">1.19</div>
                        <div class="main__card__text"></div>
                    </div>
                    <div class="main__card">
                        <div class="main__card__title">NO2</div>
                        <div class="main__card__value">22.96</div>
                        <div class="main__card__text"></div>
                    </div>
                    <div class="main__card">
                        <div class="main__card__title">O3</div>
                        <div class="main__card__value">45.78</div>
                        <div class="main__card__text"></div>
                    </div>
                    <div class="main__card">
                        <div class="main__card__title">PM2.5</div>
                        <div class="main__card__value">2.67</div>
                        <div class="main__card__text"></div>
                    </div>
                    <div class="main__card">
                        <div class="main__card__title">PM10</div>
                        <div class="main__card__value">4.49</div>
                        <div class="main__card__text"></div>
                    </div>
                    <div class="main__card">
                        <div class="main__card__title">SO2</div>
                        <div class="main__card__value">8.23</div>
                        <div class="main__card__text"></div>
                    </div> */}
                </div>
        </section>
        )
    }
    
}

export default Main;