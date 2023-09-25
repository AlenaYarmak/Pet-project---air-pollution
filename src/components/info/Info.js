import './info.scss';

function Info() {
    return(
        <div className="info">
            <div className="info-inner">
                <h3 className="info-title">Why is it so important to know the level of pollution in your city?</h3>
                <p className="info-descriprion">Knowing the level of pollution, particularly the presence of particulate matter 
                such as PM2.5 and PM10, in the air is highly important for various reasons, 
                including making decisions about when to open windows and whether to invest in an air purifier. 
                Here's why this information is crucial:</p>
                <div className="info-item">
                    <h4 className="info-subtitle">Health Protection:</h4>
                    <p className="info-text">PM2.5 and PM10 particles can penetrate deep into the respiratory system, 
                    potentially causing or exacerbating respiratory problems like asthma, bronchitis, and allergies. 
                    Monitoring pollution levels helps you protect your and your family's health, 
                    especially if you or your loved ones have preexisting respiratory conditions.</p>
                </div>
                <div className="info-item">
                    <h4 className="info-subtitle">Minimizing Exposure:</h4>
                    <p className="info-text">
                    Knowing the pollution levels allows you to make informed decisions about when to keep your windows closed. 
                    During periods of high pollution, such as when there are nearby industrial activities, wildfires, or high traffic, 
                    keeping windows closed can help reduce your exposure to harmful particles.
                    </p>
                </div>
                <div className="info-item">
                    <h4 className="info-subtitle">Air Quality Awareness:</h4>
                    <p className="info-text">
                    Monitoring pollution levels raises awareness about the air quality in your area. 
                    It enables you to take appropriate precautions, 
                    such as staying indoors during pollution peaks or avoiding strenuous outdoor activities when air quality is poor.
                    </p>
                </div>
                <div className="info-item">
                    <h4 className="info-subtitle">Improved Sleep Quality:</h4>
                    <p className="info-text">Good air quality can contribute to better sleep. 
                    Monitoring pollution levels and adjusting your bedroom environment accordingly 
                    can help you sleep more soundly and wake up feeling refreshed.</p>
                </div>
                <div className="info-item">
                    <h4 className="info-subtitle">Community Awareness and Action:</h4>
                    <p className="info-text">By knowing the pollution levels in your area, 
                    you can engage in community initiatives and advocacy efforts to improve air quality. 
                    It also encourages responsible behavior, 
                    such as reducing vehicle emissions and supporting pollution control measures.</p>
                </div>
                <p className="info-descriprion">
                In summary, knowing the level of pollution in your area, particularly the presence of PM2.5 and PM10, 
                is essential for protecting your health, making informed decisions about indoor ventilation and air purifiers, 
                reducing environmental impact, and contributing to the overall well-being of your community. 
                It empowers you to take proactive steps to improve your living environment and lead a healthier life.
                </p>
            </div>
        </div>
    );
}

export default Info;