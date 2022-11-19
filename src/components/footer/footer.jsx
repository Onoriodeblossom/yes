import React from "react";
import { P } from "../p/p";
import logo from "../../assets/logo.png"
import {AiOutlineMail}  from "react-icons/ai"
import {HiOutlineLocationMarker} from "react-icons/hi"

import { Container, Flex, FooterContainer, Name, SearchButton, SearchContainer, SearchInput, SearchInputContainer } from "./styles";

export const Footer = () =>{
    return(
        <Container>
            <SearchContainer>
                <P>Subscribe to stay tuned for Newsletter! </P>
                <SearchInputContainer>

                <SearchInput placeholder="Enter your email address"/>
                <SearchButton>
                    <P size={"16px"}>Subscribe</P>
                </SearchButton>
                </SearchInputContainer>

            </SearchContainer>

            <FooterContainer>
                <Flex>
                    <Flex flexDirection="column" width="16%" justifyContent={"center"}>

                    <img src={logo} alt="nnx"/>
                    <Name  >Nicholas Akinwale Agbeni Foundation</Name>
                    <P align={"start"}>A Non-Profit Organization set up with a 
                        mission to meet humanitarian needs in the best way as it can.</P>
                    </Flex>

                    <Flex flexDirection="column" width="14%" justifyContent={"center"}>
                        <Name>Product</Name>

<P>Landing Page</P>
<P>content</P>
<P>Content web design</P>
</Flex>





                    <Flex flexDirection="column" width="10%" justifyContent="center">

<Name>Resourse</Name>

<P align={"start"}>Academy Page</P>
<P align={"start"}>Blog</P>
<P align={"start"}>Themes </P>

<P align={"start"}> Support</P>
<P align={"start"}>Developer</P>

</Flex>

<Flex flexDirection="column" width="10%" justifyContent={"center"}>

<Name>Company</Name>

<P align={"start"}>About Us</P>
<P align={"start"}>Contact Us</P>

<P align={"start"}>FAQs</P>
<P align={"start"}>Teams</P>
</Flex>
<Flex flexDirection="column" width="10%" justifyContent={"center"}>

<Name>Contact Us</Name>

<P align={"start"}> <HiOutlineLocationMarker/>
8 Ebumawe Avenue, Ajaguro Village, Ikorodu Lagos Nigeria </P>
<P align={"start"}> <AiOutlineMail/>naafnig22@gmail.com</P>
<P>+234 8098881004</P>
<Name>Follow us</Name>
<Flex></Flex>
</Flex>
                </Flex>


            </FooterContainer>
        </Container>
    )
}