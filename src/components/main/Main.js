function Main() {
    return(
        <section class="main">
            <form class="main__form">
                <input class="main-inp" type="text"></input>
                <button class="submit-btn" type="submit">Check your city</button>
            </form>
            <div class="main__response">
                <p class="main__response-txt">The level of air quality</p> <p class="main__response-txt">2.</p> <p class="main__response-txt">It's mean the level of air quality is normal. Composition of air:</p>
            </div>
            <div class="main__cards">
                <div class="main__card">
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
                </div>
            </div>
    </section>
    )
}

export default Main;