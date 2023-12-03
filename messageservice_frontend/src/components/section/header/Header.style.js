import styled from "styled-components";

const HeaderStyleWrapper = styled.div`
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  height: 716px;
  z-index: 11;
  display: flex;
  align-items: center;


  .header_wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .backRadient {
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: right;
  }
  .menu_list {
    height: 100%;
    width: 50%;
    ul {
        width: 100%;
        padding-left: 35%;
        padding-top: 10%;
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: left;
        
        li {
            position: relative;
            cursor: pointer;
            padding: 3%;
            color: #02275B;
        }
    }
  }
  .cardContent {
    position: absolute;
    width: 60%;
    height: 45%;
    background: white;
    border-radius: 20px;
    box-shadow: 5px 5px #EFEFEF;
    margin-left: 20%;
    margin-top: 10%;
    display: flex;
  }
  .left_panel {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: right;
  }
  .right_panel {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .detail_panel {
    width: 100%;
    text-align: center;
  }
  .text_field {
    font-size: 24px;
    color: #02275B;
    margin-top: 3%;
  }
`;

export default HeaderStyleWrapper;
