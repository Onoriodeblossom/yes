import React from "react";
import { HeaderText } from "./styles";
// import 

export const H1 = ({children,align,color}) =>{
    return(
        <HeaderText align={align} color={color}>
            {children}
        
        </HeaderText>
    )
}