import React from 'react'
import { withRouter } from "react-router-dom"
import {MenuItemContainer,BackgroundImage,Content,Title,SubTitle} from "./menu-item.styles"
const MenuItem = ({title, imageUrl ,size, history,match ,linkUrl})=>(
    <MenuItemContainer className={`menu-item ${size}`} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
        <BackgroundImage imageUrl={imageUrl}/>
        <Content>
            <Title>{title.toUpperCase()}</Title>
            <SubTitle>Shop Now</SubTitle>
         </Content>
    </MenuItemContainer>
) 
export default withRouter(MenuItem);