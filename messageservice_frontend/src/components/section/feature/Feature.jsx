import FeatureStyledWrapper from "./Feature.style";
import ConnectBack from "../../../assets/ConnectBack.png";
import Symbol1 from "../../../assets/symbol1.png";
import Symbol2 from "../../../assets/symbol2.png";
import Symbol3 from "../../../assets/symbol3.png";
import Symbol4 from "../../../assets/symbol4.png";
import Symbol5 from "../../../assets/symbol5.png";
import Symbol6 from "../../../assets/symbol6.png";
import Symbol7 from "../../../assets/symbol7.png";
import Symbol8 from "../../../assets/symbol8.png";
import SetFeature from "../../setFeature/SetFeature";
import SetFeatureRight from "../../setFeatureRight/SetFeatureRight";
import SignalImage from "../../../assets/signal.png";

const Feature = () => {
    return (
        <FeatureStyledWrapper style={{ backgroundImage: `url(${ConnectBack})` }}>
            <div style={{ width: '100%', height: '100%' }}>
                <div style={{ width: '100%', height: '40%', display: 'flex', justifyContent: 'center' }}>
                    <div style={{ width: '100%', height: '100%', textAlign: 'center', marginTop: '8%' }}>
                        <div style={{ color: '#ffffff', fontSize: '33px', fontWeight: 'bold' }}>OUR FEATURES</div>
                        <div style={{ marginTop: '1%', color: '#ffffff', fontSize: '14px', fontWeight: 'light' }}>Our exclusive features are the reason behind the trust of our great users</div>
                    </div>
                </div>
                <div style={{ width: '100%', height: '60%', display: 'flex' }}>
                    <div style={{ width: '40%', height: '100%' }}>
                        <SetFeature title='Virtual Phone Numbers' detail='From 80+ countries and 4000+ cities' image={Symbol1} />
                        <SetFeature title='Mobile Data' detail='Locally - Regionally' image={Symbol2} />
                        <SetFeature title='Bundles' detail='Choose the right bundle at the lowest prices' image={Symbol3} />
                        <SetFeature title='Calls and SMS Credit' detail='International rates are almost local' image={Symbol4} />
                    </div>
                    <div style={{ width: '20%', height: '100%' }}>
                        <img src={SignalImage} alt='signalImage' style={{ height: '50%', width: '90%', marginLeft: '5%', marginRight: '5%', marginTop: '5%' }} />
                    </div>
                    <div style={{ width: '40%', height: '100%' }}>
                        <SetFeatureRight title='Free Coins Center' detail='Free USA mobile number' image={Symbol5} />
                        <SetFeatureRight title='Local & International Calls' detail='Also, hide your number' image={Symbol6} />
                        <SetFeatureRight title='Call forwarding' detail='Never miss a call' image={Symbol7} />
                        <SetFeatureRight title='Voicemail' detail='Busy or unavailable? No problem' image={Symbol8} />
                    </div>
                </div>
            </div>
        </FeatureStyledWrapper >
    );
};

export default Feature;