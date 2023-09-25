import airPollutionFirst from '../../img/air-pollution(1).png';
import airPollutionSecond from '../../img/air-pollution(2).png';
import airPollutionThird from '../../img/air-pollution(3).png';
import airPollutionFourth from '../../img/air-pollution(4).png';

import './head.scss';

function Head() {
    return (
    <section className="head">
        <div className="head-inner">
            <div className="head-title">
                <p>Check the</p>
                <p className="head-title-emphasis">air pollution</p>
                <p>in your city</p>
                <p className="head-text">
                    To find out the level of air pollution you just need to enter the name of your city.</p>
            </div>
            <div className="head-content">
                <div className="head-cards">
                    <div className="head-card">
                        <img className="card-image" src={airPollutionFirst} alt=""></img>
                        <p className="card-text"> It is the presence of harmful substances in the air, such as chemicals, particulate matter, and gases.</p>
                    </div>
                    <div className="head-card">
                        <img className="card-image" src={airPollutionSecond} alt=""></img>
                        <p className="card-text"> The main sources of air pollution include industrial activities, transportation, and energy production.</p>
                    </div>
                    <div className="head-card">
                        <img className="card-image" src={airPollutionThird} alt=""></img>
                        <p className="card-text"> The burning of fossil fuels, such as coal and oil, including carbon dioxide and nitrogen oxides.</p>
                    </div>
                    <div className="head-card">
                        <img className="card-image" src={airPollutionFourth} alt=""></img>
                        <p className="card-text"> It is a leading cause of respiratory and cardiovascular problems, including asthma, heart disease etc.</p>
                    </div>
                </div>
                <div className="head-background"></div>
            </div>
        </div>
    </section>
    );
}

export default Head;