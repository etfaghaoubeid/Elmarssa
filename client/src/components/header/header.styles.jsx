import styled, { css}from "styled-components";
import { Link } from "react-router-dom";
const OptionContainerStyles = css`
   
`

export const HeaderContainer = styled.div`
    height:70px;
    width:100%;
    display:flex; 
    justify-content: space-between;
    align-content:center;
    margin-bottom:25px;
    padding:25px;
    @media  screen and (max-width:800px) {
        padding:10px;
        height:60px;
        margin-bottom: 20px;      
    }
`;

export const LogoContainer = styled(Link)`
    height:70%;
    width:100%;
    padding:25px;
    @media  screen and (max-width:800px) {
        width: 50%;
        padding:0;
        
    }    
`;
export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display:flex;
    justify-content: flex-end;
    @media  screen and (max-width:800px) {
       width: 90%;
    }

`
export const OptionLink = styled(Link)`
  padding: 10px 15px;
   cursor: pointer;
   @media  screen and (max-width:800px) {
       width: 100%;
        padding: 10px 5px;

    }
   
   
   
`
