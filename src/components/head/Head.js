import airPollutionFirst from '../../img/air-pollution(1).png';
import airPollutionSecond from '../../img/air-pollution(2).png';
import airPollutionThird from '../../img/air-pollution(3).png';
import airPollutionFourth from '../../img/air-pollution(4).png';

function Head() {
    return (
    <section class="head">
        <div class="head__inner">
            <div class="head__title">
                <p>Check the</p>
                <p class="head__title-emphasis">air pollution</p>
                <p>in your city</p>
                <p class="head__text">
                    To find out the level of air pollution you just need to enter the name of your city.</p>
            </div>
            <div class="head__content">
                <div class="head__cards">
                    <div class="head__card">
                        <img class="card__image" src={airPollutionFirst} alt=""></img>
                        <p class="card__text"> It is the presence of harmful substances in the air, such as chemicals, particulate matter, and gases.</p>
                    </div>
                    <div class="head__card">
                        <img class="card__image" src={airPollutionSecond} alt=""></img>
                        <p class="card__text"> The main sources of air pollution include industrial activities, transportation, and energy production.</p>
                    </div>
                    <div class="head__card">
                        <img class="card__image" src={airPollutionThird} alt=""></img>
                        <p class="card__text"> The burning of fossil fuels, such as coal and oil, including carbon dioxide and nitrogen oxides.</p>
                    </div>
                    <div class="head__card">
                        <img class="card__image" src={airPollutionFourth} alt=""></img>
                        <p class="card__text"> It is a leading cause of respiratory and cardiovascular problems, including asthma, heart disease etc.</p>
                    </div>
                </div>
                <div class="head__background"></div>
            </div>
        </div>
    </section>
    );
}

export default Head;