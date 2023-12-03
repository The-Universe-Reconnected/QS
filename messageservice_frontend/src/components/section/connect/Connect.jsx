import ConnectStyledWrapper from "./Connect.style";
import ConnectBack from "../../../assets/ConnectBack.png";
import GlobeImage from "../../../assets/globe.png";

const Connect = () => {
    return (
        <ConnectStyledWrapper style={{ backgroundImage: `url(${ConnectBack})` }}>
            <div className="image_page">
                <img src={GlobeImage} alt="globeimage" style={{ width: '50%', height: '50%' }} />
            </div>
            <div className="detail_page">
                <div className="detail_panel">
                    <div style={{ color: '#E434C8', fontSize: '33px', fontWeight: 'bold', fontFamily: 'Oxygen' }}>Connect With Your Family Members Again!</div>
                    <div style={{ color: '#FFFFFF', fontSize: '33px', fontWeight: 'bold', fontFamily: 'Oxygen', marginTop: '3%' }}> Enter Your Lovely Mom's Name!</div>
                    <input name="momdetail" placeholder="Enter Your Mom's Name" style={{ width: '40%', padding: '3%', borderRadius: '10px', marginTop: '2%' }} />
                    <div style={{ color: '#FFFFFF', fontSize: '33px', fontWeight: 'bold', fontFamily: 'Oxygen', marginTop: '3%' }}>Imagine Her Photo!</div>
                    <button style={{ backgroundColor: '#E434C8', color: 'white', fontSize: '12px', fontWeight: 'bold', padding: '10px 60px', borderRadius: '10px', marginTop: '3%', cursor: 'pointer', border: 'none' }}>Connect Now</button>
                </div>
            </div>
        </ConnectStyledWrapper>
    );
};

export default Connect;