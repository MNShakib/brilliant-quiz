import React from "react";
import Nav from "../components/nav";
import Chapter from "../components/chapters";
//styled Components
import styled from "styled-components";
//Image
import logic from "../Images/logic.png";

const Main = () => {
  return (
    <Header className="as">
      <Nav />
      <MainContainer className="main">
        <Container className="container">
          <Text>
            <p className="start">
              <a href="https://brilliant.org/practice/warmup-puzzles-6/?p=1">
                <i class="fas fa-chevron-left"></i> Quick Start
              </a>
            </p>
            <h1>Logic</h1>
            <h2>
              Stretch your analytic muscles with knights, knaves, logic gates,
              and more!
            </h2>
            <div>
              <p className="description">
                The beginning of our introductory math journey is Logic. Through
                these challenging problem solving exercises, you'll construct
                the critical thinking skills that are the basis for mathematical
                reasoning.
              </p>
              <p className="description">
                You'll use limited information to make predictions – eliminating
                the impossible to uncover the truth. This course builds up to
                some truly mind-bending challenges!Read more
              </p>
            </div>
          </Text>
          <Card>
            <img src={logic} alt="Logic Symbol" />
            <Stats>
              <div>
                <h3>Interactive quizzes</h3>
                <span>37</span>
              </div>
              <div>
                <h3>Concepts and excercises</h3>
                <span>265+</span>
              </div>
            </Stats>
            <Btn href="https://brilliant.org/practice/warmup-puzzles-6/?p=1">
              Courses
            </Btn>
          </Card>
        </Container>
      </MainContainer>
      <Chapter />
    </Header>
  );
};
const Header = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f7f7f8;
`;
const MainContainer = styled.section`
  min-width: 1200px;
  background-color: #f7f7f8;
  margin-right: auto;
  margin-left: auto;
  padding: 94px 0 64px;
  @media screen and (min-width: 700.08px) and (max-width: 960px) {
    .main {
      width: 700.08px;
      padding: 0 4px;
      margin-right: auto;
      margin-left: auto;
    }
  }
`;
const Container = styled.div`
  display: flex !important;
  justify-content: space-between;
  flex-direction: row;
  align-items: flex-start;
  /* width: 100%; */
  padding: 44px 32px;
  /* background: #ffffff; */
  @media screen and (min-width: 700.08px) and (max-width: 960px) {
    .container {
      width: 700.08px;
      padding: 0 4px;
      margin-right: auto;
      margin-left: auto;
    }
  }
`;

const Text = styled.div`
  flex: 1;
  width: 620px;
  margin-right: 48px;
  .start {
    margin: -48px 0 48px;
  }
  a {
    margin-bottom: 34px;
    font-size: 16px;
    line-height: 26px;
    color: rgba(0, 0, 0, 0.5);
    text-decoration: none;
  }
  h1 {
    display: block;
    margin-bottom: 16px;
    text-align: left;
    font-size: 60px;
    line-height: 68px;
    font-weight: 600;
    color: #000000;
  }
  h2 {
    margin-bottom: 34px;
    font-size: 24px;
    font-weight: normal;
    color: #000000;
    opacity: 0.9;
  }
  .description {
    margin-bottom: 34px;
    font-size: 18px;
    line-height: 26px;
    color: rgba(0, 0, 0, 0.5);
  }
`;

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 460px;
  padding: 44px 32px;
  border: 2px solid rgba(0, 0, 0, 0.14);
  background: #ffffff;
  img {
    display: block;
    width: 254px;
    height: 244px;
    margin-bottom: 44px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
`;

const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 34px;
  div {
    display: flex;
    flex-direction: column-reverse;
    width: 50%;
    h3 {
      margin: 0;
      font-size: 16px;
      font-weight: normal;
      line-height: 20px;
      color: #000000;
      opacity: 0.5;
    }
    span {
      margin: 0 0 12px;
      font-size: 30px;
      line-height: 25px;
      color: #000000;
    }
  }
`;

const Btn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 48px;
  border: 0;
  font-size: 16px;
  font-weight: 600;
  transition: opacity 100ms linear;
  position: relative;
  padding: 3px 16px;
  margin-bottom: 0;
  font-family: "Soleil", Arial, sans-serif;
  font-size: 15px;
  line-height: 1.6em;
  color: white;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  background: black;
  outline: none;
  border-radius: 4px;
  touch-action: manipulation;
  text-decoration: none;
`;

export default Main;
