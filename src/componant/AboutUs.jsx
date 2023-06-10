import React from 'react'
import styled from 'styled-components'


const Section = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    width: 100%;
  }
`;

const Container = styled.div`
  height: 100vh;
  width: 90%;
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    width : 100%;
  }
`;

const HeroImg = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: left;
  position: relative;
  gap: 40px;
`;

const Title = styled.p`
  font-weight: 600;
  font-size: 30px;
  position: relative;
  left: -43%;

`;

const SubTitle = styled.p`
  font-weight: 500;
  font-size: 20px;
  padding-bottom: 80px;
  position: relative;
  left: -43%;
 
  
`;

const HeroTxt = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: right;
  position: relative;
  vertical-align:top;
  gap: 40px;
  padding-top: 0px; // Adjust the padding-top value here;

`;



const Img = styled.img`
    width:100%;
    height:70%;
    float: "right";
    object-fit: contain;
    position:absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    /* margin: auto; */
    border-radius :50%;
`;

const AboutUs = () => {
  return (
      <Section>
        
        <Container>
       
          <HeroTxt>
            <Title>About Us </Title>
            <SubTitle>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, blanditiis..</SubTitle>
          </HeroTxt>
          <HeroImg>
            {/* 3D Model */}
            <Img src="./images/Hero_sec.png"></Img>
          </HeroImg>
        </Container>
      </Section>
  )
}

export default AboutUs