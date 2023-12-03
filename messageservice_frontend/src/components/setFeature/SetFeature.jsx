import SetFeatureStyleWrapper from "./SetFeature.style";

const SetFeature = (props) => {
    return (
        <SetFeatureStyleWrapper>
            <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '16px', fontWeight: 'bold', color: 'white', fontFamily: 'Oxygen', marginTop: '5%' }}>{props.title}</div>
                <div style={{ fontSize: '14px', color: 'white', fontFamily: 'inter', marginTop: '8%' }}>{props.detail}</div>
            </div>
            <img src={props.image} alt={props.title} />
        </SetFeatureStyleWrapper>
    );
};

export default SetFeature;