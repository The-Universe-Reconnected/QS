import SetFeatureRightStyleWrapper from "./SetFeatureRight.style";

const SetFeatureRight = (props) => {
    return (
        <SetFeatureRightStyleWrapper>
            <img src={props.image} alt={props.title} />
            <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '16px', fontWeight: 'bold', color: 'white', fontFamily: 'Oxygen', marginTop: '5%' }}>{props.title}</div>
                <div style={{ fontSize: '14px', color: 'white', fontFamily: 'inter', marginTop: '8%' }}>{props.detail}</div>
            </div>
        </SetFeatureRightStyleWrapper>
    );
};

export default SetFeatureRight;