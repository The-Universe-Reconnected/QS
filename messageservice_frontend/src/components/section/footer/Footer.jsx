import FooterStyleWrapper from "./Footer.style";
import FooterBack from "../../../assets/footer_radiant.png";
import TeleImage from "../../../assets/telecommunication.png";
import AmericanExpress from "../../../assets/american-express.png";
import MasterCard from "../../../assets/master-card.png";
import Paypal from "../../../assets/paypal.png";
import Visa from "../../../assets/visa.png";
import Facebook from "../../../assets/facebook.png";
import Instagram from "../../../assets/instagram.png";
import Linkedin from "../../../assets/linkedin.png";
import Youtube from "../../../assets/youtube.png";
import Twitter from "../../../assets/twitter.png";

const Footer = () => {
    return (
        <FooterStyleWrapper style={{ backgroundImage: `url(${FooterBack})` }}>
            <div style={{ width: '100%', height: '70%', display: 'flex' }}>
                <div className="textContent">
                    <div style={{ fontSize: '32px', fontWeight: 'bold', color: 'white' }}>Please Purchase Free Message Serivce Now!</div>
                </div>
                <div style={{ width: '50%', height: '100%' }}>
                    <img className="imgContent" src={TeleImage} alt="TeleImage"></img>
                </div>
            </div>
            <div style={{ width: '100%', height: '30%', display: 'flex' }}>
                <div className="payContent">
                    <div style={{ display: 'flex', justifyContent: 'right', alignItems: 'center', marginTop: '20%' }}>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '14px', color: 'white' }}>Message Instant Service - Be Local Anywhere</div>
                            <div style={{ marginTop: '5%' }}>
                                <img src={Visa} alt="visa" />
                                <img src={MasterCard} alt="mastercard" />
                                <img src={AmericanExpress} alt="americanexpress" />
                                <img src={Paypal} alt="paypal" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footerMenuListLeft">
                    <ul style={{ listStyle: 'none', marginTop: '20%', width: '100%', marginLeft: '20%' }}>
                        <li className="menuList">
                            <a className="menuLink" href="/">Tutorials</a>
                        </li>
                        <li className="menuList">
                            <a className="menuLink" href="/">Blog</a>
                        </li>
                        <li className="menuList">
                            <a className="menuLink" href="/">FAQs</a>
                        </li>
                    </ul>
                </div>
                <div className="footerMenuListRight">
                    <ul style={{ listStyle: 'none', marginTop: '25%', width: '100%' }}>
                        <li className="menuList">
                            <a className="menuLink" href="/">Affiliate</a>
                        </li>
                        <li className="menuList">
                            <a className="menuLink" href="/">Terms & Conditions</a>
                        </li>
                        <li className="menuList">
                            <a className="menuLink" href="/">Privacy Policy</a>
                        </li>
                        <li className="menuList">
                            <a className="menuLink" href="/">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div className="socialContent">
                    <div style={{ marginRight: '20%' }}>
                        <img src={Facebook} alt="facebook" />
                        <img src={Youtube} alt="youtube" />
                        <img src={Twitter} alt="twitter" />
                        <img src={Linkedin} alt="linkedin" />
                        <img src={Instagram} alt="instagram" />
                    </div>
                </div>
            </div>
        </FooterStyleWrapper>
    );
};

export default Footer;