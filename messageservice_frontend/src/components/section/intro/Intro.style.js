import styled from "styled-components";

const IntroStyleWrapper = styled.div`
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  height: 600px;
  z-index: 11;
  display: flex;
  align-items: center;


  .detail_page {
    width: 50%;
    height: 100%;
  }
  .image_page {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    margin-left: 10%;
  }
 
`;

export default IntroStyleWrapper;
