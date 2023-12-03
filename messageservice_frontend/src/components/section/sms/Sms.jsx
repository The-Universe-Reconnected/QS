import SmsStyleWrapper from "./Sms.style";
import worldImage from "../../../assets/world.png";

const Sms = () => {
    return (
        <SmsStyleWrapper >
            <div className="detail_page">
                <div style={{ width: '50%', textAlign: 'center', marginLeft: '50%' }}>
                    <div style={{ fontSize: '33px', fontWeight: 'bold', color: '#02275B' }}>Cheap Calls & SMS</div>
                    <div style={{ marginTop: '2%', color: '#0065F1', fontSize: '14px', fontWeight: 'bold' }}>Make local and international calls with almost local rates and receive free calls anywhere using Numero eSIM.
                        Simply, stay connected anywhere.
                    </div>
                </div>
            </div>
            <div className="image_page">
                <img src={worldImage} alt="worldImage" style={{ width: '50%', height: '50%' }}></img>
            </div>
        </SmsStyleWrapper>
    );
};

export default Sms;