import styled from "styled-components";

const SmsStyledWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 600px;
    z-index: 11;
    display: flex;
    align-items: center;
    
    .detail_page {
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
    }
    .image_page {
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: left;
        margin-left: 10%;
    }
    .detail_panel {
        width: 100%;
        text-align: center;
    }
`;

export default SmsStyledWrapper;