import Header from "../components/section/header/Header";
import Intro from "../components/section/intro/Intro";
import Connect from "../components/section/connect/Connect";
import Sms from "../components/section/sms/Sms";
import Feature from "../components/section/feature/Feature";
import Info from "../components/section/info/Info";
import Footer from "../components/section/footer/Footer";

const HomeV1 = () => {
    return (
        <div>
            <Header />
            <Intro />
            <Connect />
            <Sms />
            <Feature />
            <Info />
            <Footer />
        </div>
    );
}

export default HomeV1;