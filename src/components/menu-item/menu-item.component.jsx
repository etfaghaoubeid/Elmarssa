import React from 'react'
import { withRouter } from "react-router-dom"
import {MenuItemContainer,BackgroundImage,Content,Title,SubTitle} from "./menu-item.styles"
const MenuItem = ({title, imageUrl ,size, history,match ,linkUrl})=>(
    <MenuItemContainer size={size} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
       
        <BackgroundImage className="background-image" imageUrl={imageUrl}/>
        <Content className="content">
            <Title>{title.toUpperCase()}</Title>
            <SubTitle>Shop Now</SubTitle>
         </Content>
    </MenuItemContainer>
) 
export default withRouter(MenuItem);