import styled, { css } from "styled-components";
const spanStyle = css`
width: 23%;

`

export const CheckoutItemContainer = styled.div`
   width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
   
    

`
export const ImageContainer = styled.div`
         width: 23%;
        padding-right: 15px;

`
export const Image = styled.img`
    width: 100%;
    height: 100%;

`
export const Name = styled.span`
    ${spanStyle}

`
export const Price = styled.span`
    ${spanStyle}

`
export const Quantity = styled.span`
    ${spanStyle}
    display: flex;

`
export const Arrow = styled.div`
    cursor: pointer;
`
export const RemoveItem = styled.div`
    cursor: pointer;
    padding-left: 12px

`
