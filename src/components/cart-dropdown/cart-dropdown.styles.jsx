import styled from "styled-components";
import React from "react"

export const CartDropdwonContainer = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 80px;
    right:0;
    z-index: 5;
    
` 
export const EmptyMessage = styled.span`
    font-size: 19px;
    margin: 50px auto;
`
export const CartItems = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: scroll;

`
export const GoToCheckOut = styled(React.Fragment)`
  margin:auto;
`
