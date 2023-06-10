import React from "react";
import styled from "styled-components";
import { GoMarkGithub } from "react-icons/go";
import { FiLink } from "react-icons/fi";
import { BsLinkedin, BsInstagram } from "react-icons/bs";


const Teamsection = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 280px) and (max-width: 1200px) {
    width: 100%;
    height: 100%;
    flex-direction: column;
    
  }
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Teamcolumn = styled.div`
  width: 25%;
  display:flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  

@media all and (max-width: 575px) {
width: 100%;
margin-right:90px;
}
@media all and (min-width: 576px) and (max-width: 767px) {
  width: 50%;
  justify-content: start;
  align-items: center;
  text-align: center;
}
@media all and (min-width: 768px) and (max-width: 991px) {
  width: 50%;
  flex:wrap;

}
@media all and (min-width: 992px) and (max-width: 1199px) {
  width: 33.33%;
}
@media all and (min-width: 1200px) {
  width: 25%;
}
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 50px;
  text-transform: uppercase;
  color: #1d3058;
  font-family: satoshi;
  width: 100%;
  text-align: center;
  }
  
  @media all and (max-width: 575px) {
    font-size: 2em;
    padding-right:65rem;
    margin: 4rem 0;
  text-align: center;

    }
    @media all and (min-width: 576px) and (max-width: 767px) {
      font-size: 2em;
      padding-right:30rem;
      margin: 4rem 0; 
  text-align: center;

    }
    @media all and (min-width: 768px) and (max-width: 991px) {
      font-size: 2em;
      padding-right:13rem;
    margin: 4rem 0; 
  text-align: center;

    }
    @media all and (min-width: 992px) and (max-width: 1199px) {
      font-size: 2em;
      padding-right:5rem;
      margin: 4rem 0; 
  text-align: center;

    }
`;

const Profilecard = styled.div`
  padding: 2.5rem 2rem;
  cursor: pointer;
  @media all and (max-width: 576px) {
  width: 100%;
  padding: 0.5rem 0;
}
@media all and (min-width: 576px) and (max-width: 767px) {
  width: 50%;
  padding: 0.5rem 0;
}
@media all and (min-width: 768px) and (max-width: 991px) {
  width: 33.33%;
  padding: 0.5rem 0;
}
@media all and (min-width: 991px) and (max-width: 1199px) {
  width: 33.33%;
  padding: 0.5rem 0;
}
@media all and (min-width: 1200px) {
  width: 25%;
  padding: 2.5rem 2rem;
}
`;

const Imgcontanier = styled.div`
  width: 14em;
  height: 20em;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-out;

  &:hover {
    box-shadow: 0 0 5px #fff, 0 0 5px #fff, 0 0 5px #1b50e3, 0 0 5px #1b50e3,
      0 0 5px #1b50e3, 0 0 5px #1b50e3, 0 0 5px #1b50e3;
  }
`;

const ProfileImg = styled.img`
  margin-top: 1rem;
  width: 60%;
  border-radius: 50%;
`;

const Name = styled.h3`
  font-weight: 600;
  margin-top: 1rem;
  font-size: 1.2rem;
  color: #1d3058;
`;

const Position = styled.p`
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

const Icons = styled.div`
  width: 50%;
  min-width: 180px;
  margin: 1.1rem;
  display: flex;
  justify-content: space-around;
  font-size: 1.2rem;
`;

const Team = () => {
  return (
    <Teamsection>
        <Title>Our Team</Title>
      <Row>
        <Teamcolumn>
          <Profilecard>
            <Imgcontanier>
              <ProfileImg src="./images/shaden.jpg" alt="profile-image" />
              <Name>
                <h3>Shaden Zidan</h3>
              </Name>
              <Position>
                <p>Founder</p>
              </Position>
              <Icons>
                <GoMarkGithub />
                <BsLinkedin />
                <BsInstagram />
                <FiLink />
              </Icons>
            </Imgcontanier>
          </Profilecard>
        </Teamcolumn>
        <Teamcolumn>
          <Profilecard>
            <Imgcontanier>
              <ProfileImg src="./images/ha.jpeg" alt="profile-image" />
              <Name>
                <h3>Haneen AlRousan</h3>
              </Name>
              <Position>
                <p>General Manager</p>
              </Position>
              <Icons>
                <GoMarkGithub />
                <BsLinkedin />
                <BsInstagram />
                <FiLink />
              </Icons>
            </Imgcontanier>
          </Profilecard>
        </Teamcolumn>
        <Teamcolumn>
          <Profilecard>
            <Imgcontanier>
              <ProfileImg src="./images/wasem.jpeg" alt="profile-image" />
              <Name>
                <h3>Wasem Wassouf</h3>
              </Name>
              <Position>
                <p>IT Department</p>
              </Position>
              <Icons>
                <GoMarkGithub />
                <BsLinkedin />
                <BsInstagram />
                <FiLink />
              </Icons>
            </Imgcontanier>
          </Profilecard>
        </Teamcolumn>
        <Teamcolumn>
          <Profilecard>
            <Imgcontanier>
              <ProfileImg src="./images/salwa.png" alt="profile-image" />
              <Name>
                <h3>Salwa Yehya</h3>
              </Name>
              <Position>
                <p>Developer</p>
              </Position>
              <Icons>
                <GoMarkGithub />
                <BsLinkedin />
                <BsInstagram />
                <FiLink />
              </Icons>
            </Imgcontanier>
          </Profilecard>
        </Teamcolumn>
      </Row>
    </Teamsection>
  );
};

export default Team;
