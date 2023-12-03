import IntroStyleWrapper from "./Intro.style";
import brainImage from "../../../assets/brain1.png";

const Intro = () => {
    return (
        <IntroStyleWrapper>
            <div className="detail_page">

            </div>
            <div className="image_page">
                <img src={brainImage} alt="brainImage" style={{ width: '50%', height: '50%' }}></img>
            </div>
        </IntroStyleWrapper>
    );
};

export default Intro;