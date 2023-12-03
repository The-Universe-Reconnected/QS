import InfoCardStyleWrapper from "./InfoCard.style";

const InfoCard = (props) => {
    return (
        <InfoCardStyleWrapper>
            <div className='circleContent'>
                <div style={{ width: '155px', height: '155px', borderRadius: '100px', background: 'white' }}>
                    <div style={{ width: '100%', height: '100%', textAlign: 'center' }}>
                        <div style={{ color: '#4E5155', fontSize: '27px', fontWeight: 'bold', marginTop: '35px' }}>{props.detail}</div>
                        <div style={{ color: '#656363', fontSize: '15.63px', fontWeight: 'bold', marginTop: '15px' }}>{props.title}</div>
                    </div>
                </div>
            </div>
        </InfoCardStyleWrapper>
    );
};

export default InfoCard;