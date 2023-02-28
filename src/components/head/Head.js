import airPollutionFirst from '../../img/air-pollution(1).png';
import airPollutionSecond from '../../img/air-pollution(2).png';
import airPollutionThird from '../../img/air-pollution(3).png';
import airPollutionFourth from '../../img/air-pollution(4).png';

import './head.scss';

function Head() {
    return (
    <section className="head">
        <div className="head__inner">
            <div className="head__title">
                <p>Check the</p>
                <p className="head__title-emphasis">air pollution</p>
                <p>in your city</p>
                <p className="head__text">
                    To find out the level of air pollution you just need to enter the name of your city.</p>
            </div>
            <div className="head__content">
                <div className="head__cards">
                    <div className="head__card">
                        <img className="card__image" src={airPollutionFirst} alt=""></img>
                        <p className="card__text"> It is the presence of harmful substances in the air, such as chemicals, particulate matter, and gases.</p>
                    </div>
                    <div className="head__card">
                        <img className="card__image" src={airPollutionSecond} alt=""></img>
                        <p className="card__text"> The main sources of air pollution include industrial activities, transportation, and energy production.</p>
                    </div>
                    <div className="head__card">
                        <img className="card__image" src={airPollutionThird} alt=""></img>
                        <p className="card__text"> The burning of fossil fuels, such as coal and oil, including carbon dioxide and nitrogen oxides.</p>
                    </div>
                    <div className="head__card">
                        <img className="card__image" src={airPollutionFourth} alt=""></img>
                        <p className="card__text"> It is a leading cause of respiratory and cardiovascular problems, including asthma, heart disease etc.</p>
                    </div>
                </div>
                <div className="head__background"></div>
            </div>
        </div>
    </section>
    );
}

export default Head;