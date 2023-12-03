import InfoStyleWrapper from "./Info.style";
import InfoCard from "../../infoCard/InfoCard";

const Info = () => {
    return (
        <InfoStyleWrapper>
            <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <InfoCard detail='20M' title='Downloads' />
                <InfoCard detail='4.3' title='Average Rating' />
                <InfoCard detail='150+' title='Client Countries' />
                <InfoCard detail='3M+' title='Purchase' />
            </div>
        </InfoStyleWrapper>
    );
};

export default Info;