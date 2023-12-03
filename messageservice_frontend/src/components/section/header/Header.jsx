import backRadient from "../../../assets/background_gradient1.png"
import braintobrain from "../../../assets/braintobrain.png"
import HeaderStyleWrapper from "./Header.style";

const Header = () => {
    return (
        <HeaderStyleWrapper>
            <div className="menu_list">
                <ul>
                    <li>Home</li>
                    <li>Resource</li>
                    <li>Afflitate</li>
                    <li>Help</li>
                </ul>
            </div>
            <div className="backRadient">
                <img src={backRadient} alt="backRadient" style={{ width: '100%' }} />
            </div>
            <div className="cardContent">
                <div className="left_panel">
                    <img src={braintobrain} alt="braintobrain" style={{ width: '65%', height: '80%' }}></img>
                </div>
                <div className="right_panel">
                    <div className="detail_panel">
                        <input name="momdetail" placeholder="Enter Your Soul mate's Name" style={{ width: '60%', padding: '2%', border: 'solid 1px #330F9F', borderRadius: '10px'}}></input>
                        <div className="text_field">Imagine Their Photo In Your Mind</div>
                    </div>
                </div>
            </div>
        </HeaderStyleWrapper>
    );
};

export default Header;