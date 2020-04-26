import styled from "styled-components";
export const BackgroundImage = styled.div`
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    background-image:${({imageUrl})=>`url(${imageUrl})`};

`
export const Content = styled.div`
    height:90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    border:1px solid black;
    position: absolute;
    background: #FFF;
    opacity: 0.7; 

`
export const MenuItemContainer = styled.div`
   min-width: 30%;
    height: 240px;
    flex:1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border:1px solid black;
    margin:0 7.5px 15px;
    overflow: hidden;
   &:hover{
       cursor: pointer;
       ${BackgroundImage}{
           transform: scale(1.1);
           transition: transform 6s cubic-bezier(0.25, 0.45, 0.45 , 0.95);
       }
       ${Content}{
           opacity: 0.9;
       }
   }
    &.large{
        height: 380px;;
    }
    &:first-child{
        margin-right: 7.5px;
    }
    &:last-child{
        margin-left:7.5px;
    }
    
`



export const Title = styled.h1`
    font-weight:bold;
    margin-bottom:6px;
    font-size:22px;
    columns: #4a4a4a;

`

export const SubTitle = styled.span`
    font-weight:bold;
    font-size: 16px;

`