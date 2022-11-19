import React from "react";
import { Container } from "../../components/Container/styles";
import { P } from "../../components/p/p";
import { OrangeHeaderText } from "../../components/orangeText/styles";
import { CardContainer, ContactUsContainer, Flex, Image, ImpactStoryCard,  TextContainer, WrapperContainer } from "./styles";
import { ImageCard } from "../../components/imageCard/imageCard";
import One from "../../assets/one.png";
import Two from "../../assets/2.png";
import Three from "../../assets/3.png";
import Four from "../../assets/4.png";
import Poverty from "../../assets/poverty.png"

import A from "../../assets/a.png"
import B from "../../assets/b.png"
import { IoArrowForwardCircleOutline} from "react-icons/io5"

import {IoIosPeople,} from "react-icons/io"
import {GiLoveHowl} from "react-icons/gi"
import {CgPhone} from "react-icons/cg"
import { H2 } from "../../components/h2/h2";
import { Volunteer } from "../../components/volunteer/volunteer";
import { Footer } from "../../components/footer/footer";
import { H1 } from "../../components/h1/h1";
// import { Header } from "../../components/header/header";

const Hero = () => {
  const vision = [
    {
      image: One,
      path:"/community",
      text: "RELIEVE POVERTY  AND HUNGER ",
    },
    {
      image: Two,
      path:"education",
      text: "ENCOURAGE  EDUCATION, SKILLS ACQUISITION AND TRADE ",
    },
    {
      image: Three,
      path:"community",
      text: "COMMUNITY DEVELOPMENT PROJECT ",
    },
    {
      image: Four,
      path:"eldercare",
      text: "COMPASION FOR THE EDERLY, CARE FOR THE LONELY  ",
    },
  ];


  const impactStory =[
    {
      img: Two,
      title:"Anna Kingston",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempor posuere neque at mollis. Mauris vitae tortor leo. Lorem ipsum dolor sit amet,  ",
    },
    {
      img: Three,
      title:"Anna Kingston",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempor posuere neque at mollis. Mauris vitae tortor leo. Lorem ipsum dolor sit amet,  ",
    },
    {
      img: Four,
      title:"Anna Kingston",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempor posuere neque at mollis. Mauris vitae tortor leo. Lorem ipsum dolor sit amet, ",
    },
  ]
  return (
    <Container>
      {/* <Header/> */}
      <WrapperContainer>
        <H1 color="#fff">Nicholas Akinwale Agbeni Foundation</H1>
        <TextContainer>
        <OrangeHeaderText top="40px">Our Mission and Purpose</OrangeHeaderText>
          <P>
          N A A Foundationis a Non-Profit Organization set
            up with a mission to meet humanitarian needs in the best way as it
            can with focus centered on:
            To serve the public interest by supporting the 
            less fortunate through principles of humanity. 
            To make real impact on society. To support, 
            encourage, improve social wellbeing. To assist
             the young, growing youths and the elderly in the society 

          </P>
        </TextContainer>
        <Flex width={"80%"}>
          {vision.map(({ image, text,path}) => (
            <ImageCard src={image} text={text} to={path}  />
          ))}
        </Flex>
        {/* <TextContainer>

        <P>
        In order to do the above, 
        we need financial donation, sponsorship,
         volunteers, donors and partners to help our 
         cause. Would you consider making a donation, 
         fund or give alms to assist us in our fundraising event? Please feel free to encourage your friends, colleagues and neighbours to give to our campaign. Giving a little is better than not giving at all. Thank you so much for reading this message and for being part of the journey to bring joy, hope and happiness to the less fortunate, disadvantaged and challenged in our society. Your financial donation, assistance, support 
        and good heart will go a long way to bringing comfort, peace and assurance to those in need. Thanks again for your generosity.
        </P>
        </TextContainer> */}

      </WrapperContainer>
        <ContactUsContainer>
        <CardContainer>
                <IoIosPeople size={30} color="#FFBD14"/>
                <H2>Meet the team</H2>
                <IoArrowForwardCircleOutline size={35} color="#515151"/>

            </CardContainer>

            <CardContainer>
                <GiLoveHowl size={30} color="#FFBD14"/>
                <H2>Partner with us</H2>
                <IoArrowForwardCircleOutline size={35} color="#515151"/>


            </CardContainer>

            <CardContainer>
                <CgPhone size={30} color="#FFBD14"/>
                <H2>Contact us</H2>
                <IoArrowForwardCircleOutline size={35} color="#515151"/>


            </CardContainer>
            

        </ContactUsContainer>
        <Volunteer background={Poverty} to="poverty" h1="Poverty and Hunger Relief"   color="red" text="Millions of people are 
                        currently living below poverty 
                        and battling with hunger with
                         every ounce of strength due 
                         to rising Inflation, 
                         Conflict and Disaster" />
                         <OrangeHeaderText>Our Impart stories</OrangeHeaderText>
                         <Flex width="80%">

        {
            impactStory.map(({img,text,title})=>(

          <ImpactStoryCard>

          <Image src={img}/>
          <div>

          <OrangeHeaderText size="18px">
            {title}
          </OrangeHeaderText>
          <P align={"start"} color="#515151">{text}</P>
          </div>
          </ImpactStoryCard>
            ))
          }


        </Flex>
        <Volunteer background={A} to={"education"}  h1="Encourage Education, skills Acquisition and Trade" flexDirection="row-reverse"
        text="Millions of children are 
        currently out of school and 
        skill acquisition centre due 
        to extreme poverty."
        text2="Join us on our mission to
         keep his hope and dreams alive 
         a mission to move his mountains
          and a million others."
        />
        <OrangeHeaderText>Our Impart stories</OrangeHeaderText>
        <Flex width="80%">

        {
            impactStory.map(({img,text,title})=>(

          <ImpactStoryCard>

          <Image src={img}/>
          <div>

          <OrangeHeaderText size="18px">
            {title}
          </OrangeHeaderText>
          <P align={"start"} color="#515151">{text}</P>
          </div>
          </ImpactStoryCard>
            ))
          }


        </Flex>
        <Volunteer background={B} to={"community"} h1="Community Development Projects" text="Thousand of 
        communities are currently being neglected and completely cut out of national budget with little to no access to basic ammenities 
        such as Clean water, Constant supply of 
        light, and motorable roads."/>
          <OrangeHeaderText>Our Impart stories</OrangeHeaderText>
        <Flex width="80%">
        {
            impactStory.map(({img,text,title})=>(

          <ImpactStoryCard>

          <Image src={img}/>
          <div>

          <OrangeHeaderText size="18px">
            {title}
          </OrangeHeaderText>
          <P align={"start"} color="#515151">{text}</P>
          </div>
          </ImpactStoryCard>
            ))
          }


        </Flex>
        <Footer/>
    </Container>
  );
};

export default Hero;
