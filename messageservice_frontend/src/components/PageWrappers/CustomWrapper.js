import styled from "styled-components";
import dropwdownIcon from "../../assets/down-arrow-svgrepo-com.svg";

const CustomWrapper = styled.div`
    .main-container{
        width: 100%;
        min-height: 100vh;
    }
    
    .label-text {
        font-size: 12px;
        font-weight: bold;
        color: white;
        margin-top: 16px;
        margin-bottom: 4px;
    }

    .custom-input {
        display: block;
        background-color: transparent;
        color: white;
        font-weight: bold;
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        margin-bottom: 4px;
    }

    .custom-input:focus {
        outline: none;
    }

    .error-text {
        color: rgb(245, 79, 79);
        margin-bottom: -6px;
      }
      
      
      .register-button {
        height: 30px;
        line-height: 0px;
        width: 100%;
        background-color: #fff;
        border: none;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
        border-radius: 4px;
        font-weight: bold;
        transition: background-color 0.2s ease;
        margin-top: 24px;
      }

        .register-button:hover {
            background-color: #ddd;
        }

        .register-button:active {
            background-color: #ccc;
        }
      
      .profile-icon {
        display: block;
        margin: 20px auto;
        bottom: 44px;
        height: 120px;
        width: auto;
      }
      
      .text-container {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin-top: 50px;
      }
      
      .text-container::before,
      .text-container::after {
        content: '';
        flex: 1;
        border-bottom: 2px solid white;
      }
      
      .text {
        margin: 0 20px;
        color: #ccc;
      }
      
      .google-register-button {
        height: 30px;
        line-height: 22px;
        width: 100%;
        background-color: #fff;
        border: none;
        padding: 0px 60px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 55px auto;
        cursor: pointer;
        border-radius: 4px;
        font-weight: bold;
        box-sizing: border-box;
      }
      
      .google-icon {
        position: relative;
        left: -35px;
        top: 3px;
        height: 20px;
        width: 20px;
        margin-right: 8px;
      }

      .white-icon::-webkit-calendar-picker-indicator {
        cursor: pointer;
        border-radius: 4px;
        margin-right: 2px;
        filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(0deg) brightness(100%) contrast(100%);
      }

      .gender-input{
        -webkit-appearance: none !important;
        -moz-appearance: none !important;
        background-image: url(${dropwdownIcon});
        background-size: 12px;
        background-repeat: no-repeat;
        background-position: calc(100% - 14px) center;
      }

      .success-text{
        color: rgb(85, 229, 85);
        font-weight: bold;
        margin-top: 20px;
      }

      .welcome-msg{
        color: white;
        font-weight: 600;
        font-size: 32px;
        margin-top: -30px;
      }
`;

export default CustomWrapper;