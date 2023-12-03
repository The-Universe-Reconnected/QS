import styled from "styled-components";

const FooterStyleWrapper = styled.div`
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
    height: 1149px;
    z-index: 11;
    
    .textContent {
        width: 50%;
        height: 100%;
        display: flex;
        align-items: end;
        justify-content: center;
    }
    .imgContent {
        width: 80%;
        height: 50%;
        margin-left: 10%;
        margin-top: 20%;
    }
    .payContent {
        width: 40%;
        height: 100%;
    }
    .footerMenuListLeft {
        width: 10%;
        height: 100%;
        display: flex;
        justify-content: right;
        align-items: center;
    }
    .footerMenuListRight {
        width: 15%;
        height: 100%;
        display: flex;
        justify-content: right;
        align-items: center;
    }
    .socialContent {
        height: 100%;
        width: 35%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .menuLink {
        font-size: 14px;
        color: white;
    }
    .menuList {
        padding: 2%;
    }
`;

export default FooterStyleWrapper;
