import styled from "styled-components";

const ConnectStyledWrapper = styled.div`
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
        justify-content: right;
    }
    .detail_panel {
        width: 100%;
        text-align: center;
        margin-right: 10%;
    }
`;

export default ConnectStyledWrapper;