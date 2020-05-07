import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";
export const Button = styled(CustomButton)`
    width: 80px;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
    
`
export const Image = styled.div`
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
    background-image:${({imageUrl})=>`url(${imageUrl})`}
`
export const CollectionItemContainer = styled.div`
    width: 22vw;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;
    margin-bottom:20px;

    &:hover{
      .image{
        opacity: 0.8;
      }
      button{
        opacity: 0.85;
        display: flex;
      }
    }
    @media screen and (max-width: 800px){
     width: 40vw;
     &:hover{
      .image{
        opacity: unset;
      }
      button{
        opacity: unset;
      }
    }

    }
    
`

export const CollectionFooter = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;

`

export const Name = styled.span`
    width: 90%;
    margin-bottom: 15px;

`

export const Price = styled.span`
    width: 10%;

`